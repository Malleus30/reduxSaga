import {put, takeEvery} from'redux-saga/effects';
import { actionIncrement } from '../store/counterReducer';



const ASYNC_INCREMENT = 'ASYNC_INCREMENT';
export const asyncInrementAction = () => ({type:ASYNC_INCREMENT});



const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* incrementWorker(){
    yield delay(1000);
    yield put(actionIncrement());
}

export function* counttWatcher(){
    yield takeEvery(asyncInrementAction, incrementWorker);
}

