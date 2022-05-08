import {put, takeEvery} from'redux-saga/effects';
import { actionDecrement, actionIncrement } from '../store/counterReducer';



const ASYNC_INCREMENT = 'ASYNC_INCREMENT';
export const asyncInrementAction = () => ({type:ASYNC_INCREMENT});
const ASYNC_DECREMENT = 'ASYNC_DECREMENT';
export const asyncDecrementAction = () => ({type:ASYNC_DECREMENT});




const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* incrementWorker() {
    yield delay(1000);
    yield put(actionIncrement());
}

function* decrementWorker() {
    yield delay(1000);
    yield put(actionDecrement());
}


export function* countWatcher() {
    yield takeEvery(ASYNC_INCREMENT, incrementWorker)
    yield takeEvery(ASYNC_DECREMENT, decrementWorker)
}