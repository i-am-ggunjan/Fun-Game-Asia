import Swal from 'sweetalert2';
import { Color } from '../../assets/color';
import * as actionTypes from "../action-types";
import { put, call, takeLeading } from 'redux-saga/effects';
import { getAPI, postAPI, patchAPI, deleteAPI } from '../../utils/api-function';
import { create_hsn_code, create_item_category, create_item_packing, create_sale_area, create_sale_person, delete_hsn_code, delete_item_category, delete_item_packing, delete_sale_area, delete_sale_person, get_hsn_code, get_item_category, get_item_packing, get_sale_area, get_sale_person, update_hsn_code, update_item_category, update_item_packing, update_sale_area, update_sale_person } from '../../utils/api-routes';

//! HSN Code 
function* getHsnCode() {
    try {
        yield put({ type: actionTypes.SET_IS_LOADING, payload: true });
        const { data } = yield getAPI(get_hsn_code);
        console.log("Get HsnCode Saga Response ::: ", data);

        if (data?.status) {
            yield put({ type: actionTypes.SET_HSN_CODE, payload: data?.result });
        }
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false });

    } catch (error) {
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
        console.log("Get HsnCode Saga Error ::: ", error);
    }
}

function* createHsnCode(action) {
    try {
        const { payload } = action;
        console.log("Payload ::: ", payload);

        const { data } = yield postAPI(create_hsn_code, payload?.data);
        console.log("Create HsnCode Saga Response ::: ", data);

        if (data?.status) {
            Swal.fire({ icon: "success", title: 'Success', text: data?.message, showConfirmButton: false, timer: 2000, });
            yield call(payload?.onComplete);
            yield put({ type: actionTypes.GET_HSN_CODE, payload: null });
        }

    } catch (error) {
        Swal.fire({ icon: "error", title: 'Failed', text: error?.response?.data?.message, showConfirmButton: false, timer: 10000 });
        console.log("Create HsnCode Saga Error ::: ", error);
    }
}

function* updateHsnCode(action) {
    try {
        const { payload } = action;
        console.log("Payload ::: ", payload);

        const { data } = yield patchAPI(update_hsn_code((payload?.id)), payload?.data);
        console.log("Update HsnCode Saga Response ::: ", data);

        if (data?.status) {
            Swal.fire({ icon: "success", title: 'Success', text: data?.message, showConfirmButton: false, timer: 2000, });
            yield call(payload?.onComplete);
            yield put({ type: actionTypes.GET_HSN_CODE, payload: null });
        }

    } catch (error) {
        Swal.fire({ icon: "error", title: 'Failed', text: "Failed To Update", showConfirmButton: false, timer: 2000 });
        console.log("Update HsnCode Saga Error ::: ", error);
    }
}

function* deleteHsnCode(action) {
    try {
        const { payload } = action;
        console.log("Payload ::: ", payload);

        const result = yield Swal.fire({ icon: "warning", title: `Are you sure ?`, text: "You want to delete?", showCancelButton: true, confirmButtonColor: Color.primary, cancelButtonColor: Color.red, confirmButtonText: "Delete", })
        if (result.isConfirmed) {
            const { data } = yield deleteAPI(delete_hsn_code(payload?.id));
            console.log("Delete HsnCode Saga Response ::: ", data);

            if (data?.status) {
                Swal.fire({ icon: "success", title: 'Success', text: data?.message, showConfirmButton: false, timer: 2000, });
                yield put({ type: actionTypes.GET_HSN_CODE, payload: null });
            }
        }
    } catch (error) {
        Swal.fire({ icon: "error", title: 'Failed', text: "Failed To Delete Data", showConfirmButton: false, timer: 2000 });
        console.log("Delete HsnCode Saga Error ::: ", error);
    }
}

//! Sale Area 
function* getSaleArea() {
    try {
        yield put({ type: actionTypes.SET_IS_LOADING, payload: true });
        const { data } = yield getAPI(get_sale_area);
        console.log("Get SaleArea Saga Response ::: ", data);

        if (data?.status) {
            yield put({ type: actionTypes.SET_SALE_AREA, payload: data?.result });
        }
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false });

    } catch (error) {
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
        // Swal.fire({ icon: "error", title: 'Failed', text: error?.response?.statusText ? error?.response?.statusText : "Failed To Get Data", showConfirmButton: false, timer: 2000 });
        console.log("Get SaleArea Saga Error ::: ", error);
    }
}

function* createSaleArea(action) {
    try {
        const { payload } = action;
        console.log("Payload ::: ", payload);

        const { data } = yield postAPI(create_sale_area, payload?.data);
        console.log("Create SaleArea Saga Response ::: ", data);

        if (data?.status) {
            Swal.fire({ icon: "success", title: 'Success', text: data?.message, showConfirmButton: false, timer: 2000, });
            yield call(payload?.onComplete);
            yield put({ type: actionTypes.GET_SALE_AREA, payload: null });
        }

    } catch (error) {
        Swal.fire({ icon: "error", title: 'Failed', text: error?.response?.data?.message, showConfirmButton: false, timer: 10000 });
        console.log("Create SaleArea Saga Error ::: ", error);
    }
}

function* updateSaleArea(action) {
    try {
        const { payload } = action;
        console.log("Payload ::: ", payload);

        const { data } = yield patchAPI(update_sale_area((payload?.id)), payload?.data);
        console.log("Update SaleArea Saga Response ::: ", data);

        if (data?.status) {
            Swal.fire({ icon: "success", title: 'Success', text: data?.message, showConfirmButton: false, timer: 2000, });
            yield call(payload?.onComplete);
            yield put({ type: actionTypes.GET_SALE_AREA, payload: null });
        }

    } catch (error) {
        Swal.fire({ icon: "error", title: 'Failed', text: "Failed To Update", showConfirmButton: false, timer: 2000 });
        console.log("Update SaleArea Saga Error ::: ", error);
    }
}

function* deleteSaleArea(action) {
    try {
        const { payload } = action;
        console.log("Payload ::: ", payload);

        const result = yield Swal.fire({ icon: "warning", title: `Are you sure ?`, text: "You want to delete?", showCancelButton: true, confirmButtonColor: Color.primary, cancelButtonColor: Color.red, confirmButtonText: "Delete", })
        if (result.isConfirmed) {
            const { data } = yield deleteAPI(delete_sale_area(payload?.id));
            console.log("Delete SaleArea Saga Response ::: ", data);

            if (data?.status) {
                Swal.fire({ icon: "success", title: 'Success', text: data?.message, showConfirmButton: false, timer: 2000, });
                yield put({ type: actionTypes.GET_SALE_AREA, payload: null });
            }
        }
    } catch (error) {
        Swal.fire({ icon: "error", title: 'Failed', text: "Failed To Delete Data", showConfirmButton: false, timer: 2000 });
        console.log("Delete SaleArea Saga Error ::: ", error);
    }
}

//! Sale Person 
function* getSalePerson() {
    try {
        yield put({ type: actionTypes.SET_IS_LOADING, payload: true });
        const { data } = yield getAPI(get_sale_person);
        console.log("Get Sale Person Saga Response ::: ", data);

        if (data?.status) {
            yield put({ type: actionTypes.SET_SALE_PERSON, payload: data?.result });
        }
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false });

    } catch (error) {
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
        console.log("Get Sale Person Saga Error ::: ", error);
    }
}

function* createSalePerson(action) {
    try {
        const { payload } = action;
        console.log("Payload ::: ", payload);

        const { data } = yield postAPI(create_sale_person, payload?.data);
        console.log("Create Sale Person Saga Response ::: ", data);

        if (data?.status) {
            Swal.fire({ icon: "success", title: 'Success', text: data?.message, showConfirmButton: false, timer: 2000, });
            yield call(payload?.onComplete);
            yield put({ type: actionTypes.GET_SALE_PERSON, payload: null });
        }

    } catch (error) {
        Swal.fire({ icon: "error", title: 'Failed', text: error?.response?.data?.message, showConfirmButton: false, timer: 10000 });
        console.log("Create Sale Person Saga Error ::: ", error);
    }
}

function* updateSalePerson(action) {
    try {
        const { payload } = action;
        console.log("Payload ::: ", payload);

        const { data } = yield patchAPI(update_sale_person((payload?.id)), payload?.data);
        console.log("Update Sale Person Saga Response ::: ", data);

        if (data?.status) {
            Swal.fire({ icon: "success", title: 'Success', text: data?.message, showConfirmButton: false, timer: 2000, });
            yield call(payload?.onComplete);
            yield put({ type: actionTypes.GET_SALE_PERSON, payload: null });
        }

    } catch (error) {
        Swal.fire({ icon: "error", title: 'Failed', text: "Failed To Update", showConfirmButton: false, timer: 2000 });
        console.log("Update Sale Person Saga Error ::: ", error);
    }
}

function* deleteSalePerson(action) {
    try {
        const { payload } = action;
        console.log("Payload ::: ", payload);

        const result = yield Swal.fire({ icon: "warning", title: `Are you sure ?`, text: "You want to delete?", showCancelButton: true, confirmButtonColor: Color.primary, cancelButtonColor: Color.red, confirmButtonText: "Delete", })
        if (result.isConfirmed) {
            const { data } = yield deleteAPI(delete_sale_person(payload?.id));
            console.log("Delete Sale Person Saga Response ::: ", data);

            if (data?.status) {
                Swal.fire({ icon: "success", title: 'Success', text: data?.message, showConfirmButton: false, timer: 2000, });
                yield put({ type: actionTypes.GET_SALE_PERSON, payload: null });
            }
        }
    } catch (error) {
        Swal.fire({ icon: "error", title: 'Failed', text: "Failed To Delete Data", showConfirmButton: false, timer: 2000 });
        console.log("Delete Sale Person Saga Error ::: ", error);
    }
}

//! Item Category
function* getItemCategory() {
    try {
        yield put({ type: actionTypes.SET_IS_LOADING, payload: true });
        const { data } = yield getAPI(get_item_category);
        console.log("Get Item Category Saga Response ::: ", data);

        if (data?.status) {
            yield put({ type: actionTypes.SET_ITEM_CATEGORY, payload: data?.result });
            yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
        }

    } catch (error) {
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
        console.log("Get Item Category Saga Error ::: ", error);
    }
}

function* createItemCategory(action) {
    try {
        const { payload } = action;
        console.log("Payload ::: ", payload);

        const { data } = yield postAPI(create_item_category, payload?.data);
        console.log("Create Item Category Saga Response ::: ", data);

        if (data?.status) {
            Swal.fire({ icon: "success", title: 'Success', text: data?.message, showConfirmButton: false, timer: 2000, });
            yield call(payload?.onComplete);
            yield put({ type: actionTypes.GET_ITEM_CATEGORY, payload: null });
        }

    } catch (error) {
        Swal.fire({ icon: "error", title: 'Failed', text: error?.response?.data?.message, showConfirmButton: false, timer: 2000 });
        console.log("Create Item Category Saga Error ::: ", error);
    }
}

function* updateItemCategory(action) {
    try {
        const { payload } = action;
        console.log("Payload ::: ", payload);

        const { data } = yield patchAPI(update_item_category((payload?.id)), payload?.data);
        console.log("Update Item Category Saga Response ::: ", data);

        if (data?.status) {
            Swal.fire({ icon: "success", title: 'Success', text: data?.message, showConfirmButton: false, timer: 2000, });
            yield call(payload?.onComplete);
            yield put({ type: actionTypes.GET_ITEM_CATEGORY, payload: null });
        }

    } catch (error) {
        Swal.fire({ icon: "error", title: 'Failed', text: "Failed To Update", showConfirmButton: false, timer: 2000 });
        console.log("Update Item Category Saga Error ::: ", error);
    }
}

function* deleteItemCategory(action) {
    try {
        const { payload } = action;
        console.log("Payload ::: ", payload);

        const result = yield Swal.fire({ icon: "warning", title: `Are you sure ?`, text: "You want to delete?", showCancelButton: true, confirmButtonColor: Color.primary, cancelButtonColor: Color.red, confirmButtonText: "Delete", })
        if (result.isConfirmed) {
            const { data } = yield deleteAPI(delete_item_category(payload?.id));
            console.log("Delete Item Category Saga Response ::: ", data);

            if (data?.status) {
                Swal.fire({ icon: "success", title: 'Success', text: data?.message, showConfirmButton: false, timer: 2000, });
                yield put({ type: actionTypes.GET_ITEM_CATEGORY, payload: null });
            }
        }
    } catch (error) {
        Swal.fire({ icon: "error", title: 'Failed', text: "Failed To Delete Data", showConfirmButton: false, timer: 2000 });
        console.log("Delete Item Category Saga Error ::: ", error);
    }
}

//! Item Packing 
function* getItemPacking() {
    try {
        yield put({ type: actionTypes.SET_IS_LOADING, payload: true });
        const { data } = yield getAPI(get_item_packing);
        console.log("Get Item Packing Saga Response ::: ", data);

        if (data?.status) {
            yield put({ type: actionTypes.SET_ITEM_PACKING, payload: data?.result });
        }
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false });

    } catch (error) {
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
        console.log("Get Item Packing Saga Error ::: ", error);
    }
}

function* createItemPacking(action) {
    try {
        const { payload } = action;
        console.log("Payload ::: ", payload);

        const { data } = yield postAPI(create_item_packing, payload?.data);
        console.log("Create Item Packing Saga Response ::: ", data);

        if (data?.status) {
            Swal.fire({ icon: "success", title: 'Success', text: data?.message, showConfirmButton: false, timer: 2000, });
            yield call(payload?.onComplete);
            yield put({ type: actionTypes.GET_ITEM_PACKING, payload: null });
        }

    } catch (error) {
        Swal.fire({ icon: "error", title: 'Failed', text: error?.response?.data?.message, showConfirmButton: false, timer: 10000 });
        console.log("Create Item Packing Saga Error ::: ", error);
    }
}

function* updateItemPacking(action) {
    try {
        const { payload } = action;
        console.log("Payload ::: ", payload);

        const { data } = yield patchAPI(update_item_packing((payload?.id)), payload?.data);
        console.log("Update Item Packing Saga Response ::: ", data);

        if (data?.status) {
            Swal.fire({ icon: "success", title: 'Success', text: data?.message, showConfirmButton: false, timer: 2000, });
            yield call(payload?.onComplete);
            yield put({ type: actionTypes.GET_ITEM_PACKING, payload: null });
        }

    } catch (error) {
        Swal.fire({ icon: "error", title: 'Failed', text: "Failed To Update", showConfirmButton: false, timer: 2000 });
        console.log("Update Item Packing Saga Error ::: ", error);
    }
}

function* deleteItemPacking(action) {
    try {
        const { payload } = action;
        console.log("Payload ::: ", payload);

        const result = yield Swal.fire({ icon: "warning", title: `Are you sure ?`, text: "You want to delete?", showCancelButton: true, confirmButtonColor: Color.primary, cancelButtonColor: Color.red, confirmButtonText: "Delete", })
        if (result.isConfirmed) {
            const { data } = yield deleteAPI(delete_item_packing(payload?.id));
            console.log("Delete Item Packing Saga Response ::: ", data);

            if (data?.status) {
                Swal.fire({ icon: "success", title: 'Success', text: data?.message, showConfirmButton: false, timer: 2000, });
                yield put({ type: actionTypes.GET_ITEM_PACKING, payload: null });
            }
        }
    } catch (error) {
        Swal.fire({ icon: "error", title: 'Failed', text: "Failed To Delete Data", showConfirmButton: false, timer: 2000 });
        console.log("Delete Item Packing Saga Error ::: ", error);
    }
}

export default function* masterSaga() {
    //? HSN Code 
    yield takeLeading(actionTypes?.GET_HSN_CODE, getHsnCode);
    yield takeLeading(actionTypes?.CREATE_HSN_CODE, createHsnCode);
    yield takeLeading(actionTypes?.UPDATE_HSN_CODE, updateHsnCode);
    yield takeLeading(actionTypes?.DELETE_HSN_CODE, deleteHsnCode);
    //? Sale Area
    yield takeLeading(actionTypes?.GET_SALE_AREA, getSaleArea);
    yield takeLeading(actionTypes?.CREATE_SALE_AREA, createSaleArea);
    yield takeLeading(actionTypes?.UPDATE_SALE_AREA, updateSaleArea);
    yield takeLeading(actionTypes?.DELETE_SALE_AREA, deleteSaleArea);
    //? Sale Person
    yield takeLeading(actionTypes?.GET_SALE_PERSON, getSalePerson);
    yield takeLeading(actionTypes?.CREATE_SALE_PERSON, createSalePerson);
    yield takeLeading(actionTypes?.UPDATE_SALE_PERSON, updateSalePerson);
    yield takeLeading(actionTypes?.DELETE_SALE_PERSON, deleteSalePerson);
    //? Item Category
    yield takeLeading(actionTypes?.GET_ITEM_CATEGORY, getItemCategory);
    yield takeLeading(actionTypes?.CREATE_ITEM_CATEGORY, createItemCategory);
    yield takeLeading(actionTypes?.UPDATE_ITEM_CATEGORY, updateItemCategory);
    yield takeLeading(actionTypes?.DELETE_ITEM_CATEGORY, deleteItemCategory);
    //? Item Packing
    yield takeLeading(actionTypes?.GET_ITEM_PACKING, getItemPacking);
    yield takeLeading(actionTypes?.CREATE_ITEM_PACKING, createItemPacking);
    yield takeLeading(actionTypes?.UPDATE_ITEM_PACKING, updateItemPacking);
    yield takeLeading(actionTypes?.DELETE_ITEM_PACKING, deleteItemPacking);
}