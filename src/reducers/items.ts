import { iItem, iItemAction, itemActionTypes } from "./reducerTypes"

const itemsReducer = (state: iItem[] = [], action: iItemAction) => {
    switch (action.type) {
        case itemActionTypes.SET_ITEMS: {
            return action.payload;
        }
        case itemActionTypes.ADD_ITEM: {
            const newState = [...state].concat(action.payload);
            localStorage.setItem("billbookitems", JSON.stringify(newState));
            return newState;
        }
        case itemActionTypes.UPDATE_ITEM: {
            const newState = [...state].map((item) =>
                item.itemCode === action.payload.itemCode ? action.payload : item
            );
            localStorage.setItem("billbookitems", JSON.stringify(newState));
            return newState;
        }
        default:
            return state;
    }
};

export default itemsReducer;
