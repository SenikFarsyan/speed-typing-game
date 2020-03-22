import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//ations
import { registerUser, signinUser } from '../../redux/user/user.actions';

//selectors
import { selectMessages } from '../../redux/user/user.selectors';

//styles
import './sign-in-and-sign-up.styles.css';

const SignInAndSignUpPage = ({ signinUser, registerUser, messages }) => {
  const name = useFormInput('');
  const password = useFormInput('');

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      name: name.value,
      password: password.value,
      history: []
    };
    if (e.target.name === 'signin') {
      signinUser(user);
    } else {
      registerUser(user);
    }
  };
  return (
    <div className='sign-in-and-sign-up'>
      <h3>Sign in and Sign up page</h3>
      <form className='form'>
        <input type='text' required placeholder='name' {...name} />
        <input type='password' required placeholder='password' {...password} />
        <div className='buttons-container'>
          <input
            type='button'
            name='register'
            value='Register'
            onClick={handleSubmit}
          />
          <input
            type='button'
            name='signin'
            value='Signin'
            onClick={handleSubmit}
          />
        </div>
      </form>
      <div
        className={`${messages.error ? 'error-message' : 'success-message'} `}
      >
        <p>{messages.error}</p>
        <p>{messages.success}</p>
      </div>
    </div>
  );
};

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange
  };
}

const mapStateToProps = createStructuredSelector({
  messages: selectMessages
});

const mapDistpatchToProps = { registerUser, signinUser };

export default connect(
  mapStateToProps,
  mapDistpatchToProps
)(SignInAndSignUpPage);
