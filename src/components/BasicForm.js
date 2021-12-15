import UseInput from './Hooks/use-input';

const isNotEmpty = (value) => value !== '';

const BasicForm = (props) => {
  const {
    inputState: firstName,
    valueIsValid: firstIsValid,
    inputIsInValid: firstNameIsInValid,
    getUserInputHandler: getFirstNameHandler,
    inputOnBlurHandler: firstNameOnBlurHandler,
    reset: resetFirstName
  } = UseInput(isNotEmpty);

  let firstNameErrorMsg;

  if (firstNameIsInValid) {
    firstNameErrorMsg = (
      <p className="error-text">Your first name shouldn't be empty</p>
    );
  }

  const {
    inputState: lastName,
    valueIsValid: lastNameIsValid,
    inputIsInValid: lastNameIsInValid,
    getUserInputHandler: getlastNameHandler,
    inputOnBlurHandler: lastNameInputOnBlurHandler,
    reset: resetlastName
  } = UseInput(isNotEmpty);

  let lastNameErrorMsg;

  if (lastNameIsInValid) {
    lastNameErrorMsg = (
      <p className="error-text">Your last name shouldn't be empty</p>
    );
  }

  const {
    inputState: emailValue,
    valueIsValid: emailValueIsValid,
    inputIsInValid: emailValueIsInValid,
    getUserInputHandler: getEmailInputValueHandler,
    inputOnBlurHandler: emailInputOnBlurHandler,
    reset: resetEmailValue
  } = UseInput((value) => value.trim().includes('@'));

  let emailErrorMsg;

  if (emailValueIsInValid) {
    emailErrorMsg = (
      <p className="error-text">Your email address shouldn't be empty</p>
    );
  }

  let formIsValid = false;

  if (firstIsValid && lastNameIsValid && emailValueIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    console.log({
      firstName: firstName,
      lastName: lastName,
      email: emailValue
    });
    resetFirstName();
    resetlastName();
    resetEmailValue();
  };

  const firstNameStyles = firstNameIsInValid
    ? 'form-control invalid'
    : 'form-control';

  const lastNameStyles = lastNameIsInValid
    ? 'form-control invalid'
    : 'form-control';

  const emailInputStyles = emailValueIsInValid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <div className={firstNameStyles}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstName}
            onChange={getFirstNameHandler}
            onBlur={firstNameOnBlurHandler}
          />
          {firstNameErrorMsg}
        </div>
        <div className={lastNameStyles}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastName}
            onChange={getlastNameHandler}
            onBlur={lastNameInputOnBlurHandler}
          />
          {lastNameErrorMsg}
        </div>
      </div>
      <div className={emailInputStyles}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={emailValue}
          onChange={getEmailInputValueHandler}
          onBlur={emailInputOnBlurHandler}
        />
        {emailErrorMsg}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
