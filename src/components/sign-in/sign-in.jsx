import './sign-in.scss';

import React, { Component } from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import CustomButton from '../custom-button/custom-button';
import FormInput from '../form-input/form-input';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.error(error);
    }
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className='sign-in'>
        <h2>Already have an account ?</h2>
        <span>Sign in with email</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            value={email}
            required
            label='Email'
            handleChange={this.handleChange}
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            required
            label='Password'
            handleChange={this.handleChange}
          />
          <div className='buttons'>
            <CustomButton type='submit'>SIGN IN</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
