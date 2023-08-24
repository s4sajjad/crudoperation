import { put, takeLatest } from "redux-saga/effects";
import { ADD_USER_START, DELETE_USER_START, EDIT_USER_START, GET_USER_START } from "../constant/user.constant";
import { addUserError, addUserSuccess, editUserError, getUserError, getUserStart, getUserSuccess } from "../action/user.action";
import { addUserFirebase, deleteUserFirebase, getUserDataFirebase, updateUserFirebase } from "../service/user.service";

function* getuser() {
    try {
        let result = yield getUserDataFirebase();
        yield put(getUserSuccess(result))
    } catch (error) {
        yield put(getUserError(error.message))
    }
}

function* adduser({ payload }) {
    try {
        yield addUserFirebase(payload);
        yield put(addUserSuccess(payload))
    } catch (error) {
        yield put(addUserError(error.message))
    }
}
function* edituser({ payload }) {
    try {
        yield updateUserFirebase(payload.data, payload.id);
        yield put(getUserStart())
    } catch (error) {
        yield put(editUserError(error.message))
    }
}

function* deleteuser({ payload }) {
    try {
        yield deleteUserFirebase(payload);
        yield put(getUserStart())
    } catch (error) {
        yield put(editUserError(error.message))
    }
}

export function* user() {
    yield takeLatest(GET_USER_START, getuser)
    yield takeLatest(ADD_USER_START, adduser)
    yield takeLatest(EDIT_USER_START, edituser)
    yield takeLatest(DELETE_USER_START, deleteuser)
}