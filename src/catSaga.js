import { call, put, takeEvery } from "redux-saga/effects";
import { getCatsSuccess } from "./catSlice";

function* workerGetSuccess() {
  const cats = yield call(() => fetch("https://api.thecatapi.com/v1/breeds"));
  const allData = yield cats.json();

  const data = allData?.slice(0, 10);
  yield put(getCatsSuccess(data));
}

function* watchCatSaga() {
  yield takeEvery("cats/getCatsRequest", workerGetSuccess);
}

export default watchCatSaga;
