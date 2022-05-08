import {put, takeEvery, call} from'redux-saga/effects';
import { addManyCustomersAction, FETCH_USERS_SAGA } from '../store/customerReducer';


const fetchUsersFromApi = () => fetch('https://jsonplaceholder.typicode.com/users');

function* fetchUsersWorker(){
    const data = yield call(fetchUsersFromApi);
    const json = yield call(() => new Promise(res => res(data.json())));
    yield put(addManyCustomersAction(json))
}

export function* userWatcher(){
    yield takeEvery(FETCH_USERS_SAGA, fetchUsersWorker) ;
}