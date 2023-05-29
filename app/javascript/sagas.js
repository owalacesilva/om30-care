import { call, put, takeLatest } from 'redux-saga/effects'
import { GET_TOWN_LIST, GET_TOWN_LIST_ERROR, GET_TOWN_LIST_SUCCESS } from './pages/TownListPage/constants'

const getTowns = () =>
  fetch("http://localhost:3001/towns")
    .then((response) => response.json())
    .catch((error) => error)

function* fetchTowns() {
  try {
    const response = yield call(getTowns);
    yield put({ type: GET_TOWN_LIST_SUCCESS, townList: response.rows })
  } catch (e) {
    yield put({ type: GET_TOWN_LIST_ERROR, message: e.message })
  }
}

function* root() {
  yield takeLatest(GET_TOWN_LIST, fetchTowns)
}

export default root