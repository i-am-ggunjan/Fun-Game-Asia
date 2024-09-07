import axios from 'axios';
import Swal from 'sweetalert2';
import * as actionTypes from "../action-types";
import { api_urls } from '../../utils/api-urls';
import { admin_login } from '../../utils/api-routes';
import { put, call, takeLeading } from 'redux-saga/effects';
import { access_token, refresh_token } from '../../utils/constant';

function* adminLogin(action) {
    try {
        const { payload } = action;
        console.log("Payload ::: ", payload)

        const { data } = yield axios.post(api_urls + admin_login, payload?.data);
        console.log("Admin Login Saga Response ::: ", data);

        if (data) {
            Swal.fire({ icon: "success", title: "Login Successfully", showConfirmButton: false, timer: 2000 });
            localStorage.setItem(access_token, data?.accessToken);
            localStorage.setItem(refresh_token, data?.refreshToken);
            yield call(payload?.onComplete);
        }

    } catch (error) {
        Swal.fire({
            icon: "error",
            title: 'Failed To Login',
            text: error?.response?.data ? error?.response?.data : 'Failed To Login',
            showConfirmButton: false,
            timer: 2000,
        });
        console.log("Admin Login Saga Error ::: ", error)
    }
}

export default function* authSaga() {
    yield takeLeading(actionTypes.ADMIN_LOGIN, adminLogin);
}