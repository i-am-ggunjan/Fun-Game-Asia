import * as actionTypes from "../action-types";

const initialState = {
    hsncodeData: [],
    hsncodeDataById: [],
    saleAreaData: [],
    saleAreaDataById: [],
    salePersonData: [],
    salePersonDataById: [],
    itemCategoryData: [],
    itemCategoryDataById: [],
    itemPackingData: [],
    itemPackingDataById: [],
};

const masterReducer = (state = initialState, actions) => {
    const { payload, type } = actions;

    switch (type) {
        case actionTypes.SET_HSN_CODE: {
            return {
                ...state,
                hsncodeData: payload,
            };
        }
        case actionTypes.SET_HSN_CODE_BY_ID: {
            return {
                ...state,
                hsncodeDataById: payload,
            };
        }
        case actionTypes.SET_SALE_AREA: {
            return {
                ...state,
                saleAreaData: payload,
            };
        }
        case actionTypes.SET_SALE_AREA_BY_ID: {
            return {
                ...state,
                saleAreaDataById: payload,
            };
        }
        case actionTypes.SET_SALE_PERSON: {
            return {
                ...state,
                salePersonData: payload,
            };
        }
        case actionTypes.SET_SALE_PERSON_BY_ID: {
            return {
                ...state,
                salePersonDataById: payload,
            };
        }
        case actionTypes.SET_ITEM_CATEGORY: {
            return {
                ...state,
                itemCategoryData: payload,
            };
        }
        case actionTypes.SET_ITEM_CATEGORY_BY_ID: {
            return {
                ...state,
                itemCategoryDataById: payload,
            };
        }
        case actionTypes.SET_ITEM_PACKING: {
            return {
                ...state,
                itemPackingData: payload,
            };
        }
        case actionTypes.SET_ITEM_PACKING_BY_ID: {
            return {
                ...state,
                itemPackingDataById: payload,
            };
        }
        default: {
            return state;
        }
    }
};

export default masterReducer;