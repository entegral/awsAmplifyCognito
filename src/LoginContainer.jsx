import React, { Component } from 'react'
import SignUp from './SignUp';
import Login from './Login';
import Header from './Header';
import { Auth } from 'aws-amplify';

 class LoginContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      confirm_password: '',
      confirmation_code: '',
      authenticationCode: '',
      displayConfirmation: false,
      isLoading: true,
      userConfirmed: false,
      errorMessage: '',
      loggedIn: false
    };
    // this.onLogin = this.onLogin.bind(this);
    this.onChange = this.onChange.bind(this);
  };

  componentDidMount(){
    console.log(this.state)

    Auth.currentAuthenticatedUser({
        bypassCache: true  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then((user) => {
      console.log(user);
      this.setState( {loggedIn: true, email: user.signInUserSession.idToken.payload.email } )
    })
    .catch(err => console.log(err));

    setTimeout(()=>{this.setState({...this.state, isLoading: false})}, 1000)
  };

  onChange(event){
    console.log(this.state[event.target.name])
    this.setState({ [event.target.name] : event.target.value })
  };

  onLogin = (e) => {
    e.preventDefault();
    console.log('login email', this.state.email);
    console.log('login password', this.state.password);
    console.log('login confirm password', this.state.confirm_password);
   
    Auth.signIn(this.state.email, this.state.password)
      .then((user) => {
        console.log(user);
        this.setState( { errorMessage: ''} )
      })
      .catch((err) => {
        console.log(err)
        this.setState( { errorMessage: 'Username and/or Password Incorrect'} )
      });
  }

  onSignUp = async (e) => {
    e.preventDefault();

    if (this.state.password !== this.state.confirm_password){
      return this.setState({ errorMessage: 'passwords do not match' })
    }

    const { password, email} = this.state;
    const username = email;
    try {
      await Auth.signUp({username, password, attributes: { email } });
      this.setState( { displayConfirmation: true, errorMessage: '', username: this.state.email })
      console.log('signup successful');
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }

  onConfirmSignup = async (e) => {
    e.preventDefault();
    const { username, authenticationCode } = this.state;
    try {
      await Auth.confirmSignUp( username, authenticationCode );
      this.setState( { displayConfirmation: false, userConfirmed: true })
      console.log('email confirmation successful')
    } catch (err) {
      console.log('error confirming signup: ', err)
    }
  }
  
  render() {
    
    if (this.state.isLoading){
      return (
        <div>
          Loading...
        </div>
      );
    } else {
      return (
        <React.Fragment>
          {
            this.state.loggedIn ? ( <Header username = {this.state.email} /> ) : null
          }
          <Login 
            handleLogin = {this.onLogin}
            handleOnChange={this.onChange}
            errorMessage= {this.state.errorMessage} />
          <SignUp 
            displayConfirmation={this.state.displayConfirmation}
            errorMessage= {this.state.errorMessage}
            handleOnChange={this.onChange}
            handleSignUp={this.onSignUp} 
            handleConfirmSignUp={this.onConfirmSignup} />
        </React.Fragment>
      );
    };

  }
}

export default LoginContainer;