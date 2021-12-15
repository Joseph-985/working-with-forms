// import { useState } from 'react';

import UseInput from './Hooks/use-input';

const SimpleInput = (props) => {
  const {
    enteredValue: nameEntered,
    valueIsValid: enteredNameIsValid,
    inputIsInValid,
    getUserInputHandler,
    inputOnBlurHandler,
    reset
  } = UseInput((value) => value.trim() !== '');

  const {
    enteredValue: enteredEmail,
    valueIsValid: emailIsValid,
    inputIsInValid: emailInputIsInvalid,
    getUserInputHandler: getEmailInputHandler,
    inputOnBlurHandler: mailInputOnBlur,
    reset: emailReset
  } = UseInput((value) => value.trim().includes('@'));

  let formIsValid = false;

  if (enteredNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid && !emailIsValid) {
      return;
    }
    console.log(nameEntered, enteredEmail);

    reset();
    emailReset();
  };

  const inputStyles = inputIsInValid ? 'form-control invalid' : 'form-control';

  const emailStyles = emailInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={inputStyles}>
        <label htmlFor="name">Your Name</label>
        <input
          value={nameEntered}
          type="text"
          id="name"
          onChange={getUserInputHandler}
          onBlur={inputOnBlurHandler}
        />
        {inputIsInValid && (
          <p className="error-text">Please enter a valid name</p>
        )}
      </div>
      <div className={emailStyles}>
        <label htmlFor="email">Your Email</label>
        <input
          value={enteredEmail}
          type="text"
          id="email"
          onChange={getEmailInputHandler}
          onBlur={mailInputOnBlur}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Please enter a valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
