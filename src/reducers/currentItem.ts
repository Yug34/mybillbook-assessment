import { itemActionTypes } from "./reducerTypes";

const currentItemReducer = (state = {}, action: any) => {
    switch (action.type) {
        case itemActionTypes.SET_CURRENT_ITEM: {
            return action.payload;
        }
        default:
            return state;
    }
};

export default currentItemReducer;
