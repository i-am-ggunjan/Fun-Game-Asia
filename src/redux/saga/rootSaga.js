import { all } from "redux-saga/effects";
import authSaga from "./authSaga";
import masterSaga from "./masterSaga";

export default function* rootSaga() {
    yield all([
        authSaga(),
        masterSaga()
    ])
};