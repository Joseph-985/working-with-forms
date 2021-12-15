import { useReducer } from 'react';

const dispatchData = { value: '', isTouched: false };
const inputReducerFn = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === 'BLUR') {
    return { isTouched: true, value: state.value };
  }
  if (action.type === 'RESET') {
    return { value: (action.value = ''), isTouched: false };
  }

  return dispatchData;
};

const UseInput = (validate) => {
  const [inputState, inputDispatch] = useReducer(inputReducerFn, dispatchData);

  const valueIsValid = validate(inputState.value);

  const inputIsInValid = !valueIsValid && inputState.isTouched;

  const getUserInputHandler = (event) => {
    inputDispatch({
      type: 'USER_INPUT',
      value: event.target.value
    });
  };

  const inputOnBlurHandler = (event) => {
    inputDispatch({
      type: 'BLUR'
    });
  };

  const reset = () => {
    inputDispatch({ type: 'RESET' });
  };

  return {
    inputState: inputState.value,
    valueIsValid,
    inputIsInValid,
    getUserInputHandler,
    inputOnBlurHandler,
    reset
  };
};
export default UseInput;
