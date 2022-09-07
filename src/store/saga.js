import { call, put, takeLatest } from 'redux-saga/effects'
import Action from "./action";
import { fetchMathApi } from "../api";

function* fetchFact(action) {
  

  try {
    const fact = yield call(fetchMathApi);
   
    yield put({
      type: Action.FETCH_FACT_MATH_SUCCESS,
      payload: {
        fact: fact.joke,
        successMessage: "message is succesfull"
      }
    });
  } catch (e) {
    console.log("error", e);

    yield put({
      type: Action.FETCH_FACT_MATH_FAILED,
      payload: { errorMessage: e }
    });
  }
}

function* mySaga() {
  
  yield takeLatest("fetch_fact_math_call_from_api", fetchFact);
}

export default mySaga;
