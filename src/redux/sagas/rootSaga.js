import { takeEvery } from 'redux-saga/effects';
import {fork, take, call, takeLatest, put, all} from 'redux-saga/effects'; 
import axios from 'axios';
import {GET_TASK_API} from './../constants/ToDoListContants';
import * as Cyberbugs from './Cyberbugs/UserCyberBugsSaga'; 
import {theoDoiActionGetTaskApi, theoDoiActionAddTaskApiAction, theoDoiActionDeleteTaskApiAction, theoDoiActionRejectTaskApiAction, theoDoiActionCheckTaskApiAction} from './ToDoListSaga';
export function * rootSaga(){
//    yield fork(getTaskAPI);  

yield all([
    theoDoiActionGetTaskApi(),
    theoDoiActionAddTaskApiAction(),
    theoDoiActionDeleteTaskApiAction(),
    theoDoiActionRejectTaskApiAction(),
    theoDoiActionCheckTaskApiAction(),


    Cyberbugs.theoDoiSignin()
])


} 