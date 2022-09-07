

import Action from './action';

const initialState = {
  fact: '',
  error: false,
  errorMessage: '',
  successMessage: '',
};

const reducer=(state=initialState,action)=>{

switch(action.type)
{
  case Action.FETCH_FACT_MATH_SUCCESS:
  return {
    ...state,
    fact:action.payload.fact,
    error:false,
    successMessage:action.payload.successMessage
  }
  case Action.FETCH_FACT_MATH_FAILED:
  return {
    ...state,
    fact:'',
    error:true,
    errorMessage:action.payload.errorMessage
  }

default:
return state;
}
}
export default reducer;