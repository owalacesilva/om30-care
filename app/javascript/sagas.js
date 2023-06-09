import { call, put, takeLatest } from 'redux-saga/effects'
import { POST_TOWN_SUBMITTING } from './components/TownModal/constants';
import { GET_TOWN_LIST_SUBMITTING } from './pages/TownListPage/constants';
import { GET_TOWN_SUBMITTING } from './pages/TownPage/constants';
import { submitTownFailureAction, submitTownLoadingAction, submitTownSuccessedAction } from './components/TownModal/actions';
import { getTownListFailureAction, getTownListLoadingAction, getTownListSuccessedAction } from './pages/TownListPage/actions';
import { getTownFailureAction, getTownLoadingAction, getTownSuccessedAction } from './pages/TownPage/actions';

const getTowns = () =>
  fetch("http://localhost:3001/towns")
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network res was not ok');
      }
      return res.json();
    })
    .catch((error) => console.error('Error:', error));

const getTown = (slug) =>
  fetch(`http://localhost:3001/towns/${slug}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network res was not ok');
      }
      return res.json();
    })
    .catch((error) => console.error('Error:', error));

const submitTown = (data) =>
  fetch('http://localhost:3001/towns', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network res was not ok');
      }
      return res.json();
    })
    .catch((error) => console.error('Error:', error));

function* getTownsSaga() {
  // Loading request
  yield put(getTownListLoadingAction());

  try {
    const res = yield call(getTowns);
    yield put(getTownListSuccessedAction(res));
  } catch (e) {
    yield put(getTownListFailureAction(e.message));
  }
}

function* getTownDetailsSaga(action) {
  // Loading request
  yield put(getTownLoadingAction());

  try {
    const res = yield call(getTown, action.slug);
    yield put(getTownSuccessedAction(res));
  } catch (e) {
    yield put(getTownFailureAction(e.message));
  }
}

function* submitTownSaga(action) {
  // Loading request
  yield put(submitTownLoadingAction());

  try {
    const res = yield call(submitTown, action.data);
    yield put(submitTownSuccessedAction(res));
  } catch (e) {
    yield put(submitTownFailureAction(e.message));
  }
}

function* root() {
  yield takeLatest(GET_TOWN_LIST_SUBMITTING, getTownsSaga);
  yield takeLatest(GET_TOWN_SUBMITTING, getTownDetailsSaga);
  yield takeLatest(POST_TOWN_SUBMITTING, submitTownSaga);
}

export default root