import React, { Component } from 'react'
import Login from './Login';
import AWS from 'aws-sdk';

 class LoginContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      confirm_password: '',
      confirmation_code: '',
      jwt: '',
      displayConfirmationModal: false,
      isLoading: true
    };
    this.onLogin = this.onLogin.bind(this);
    this.onChange = this.onChange.bind(this);
    // this.onEmailChange = this.onEmailChange.bind(this);
    // this.onPasswordChange = this.onPasswordChange.bind(this);
    // this.onPasswordConfirmationChange = this.onPasswordConfirmationChange.bind(this);
  };

  componentDidMount(){
    console.log(this.state)
    setTimeout(()=>{this.setState({...this.tate, isLoading: false})}, 1000)
  };

  onChange(event){
    this.setState({ [event.target.name] : event.target.value })
  };

  // onPasswordChange(event){
  //   this.setState({ password: event.target.value })
  //   console.log(this.state.password)
  // };

  // onPasswordConfirmationChange(event){
  //   this.setState({ confirm_password: event.target.value })
  //   console.log(this.state.confirm_password)
  // };  

  onLogin(event){
    console.log('login email', this.state.email);
    console.log('login password', this.state.password);
    console.log('login confirm password', this.state.confirm_password);
    
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
          <Login 
            displayConfirmationModal={this.state.displayConfirmationModal}
            handleEmailChange={this.onChange}
            handlePasswordChange={this.onChange}
            handlePasswordConfirmationChange={this.onChange}
            handleLogin={this.onLogin} />
        </React.Fragment>
      );
    };

  }
}

export default LoginContainer;