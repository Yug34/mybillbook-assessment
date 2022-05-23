import { userActionTypes } from "./reducerTypes";

const currentUserReducer = (state = {}, action: any) => {
    switch (action.type) {
        case userActionTypes.SET_USER: {
            return action.payload;
        }
        default:
            return state;
    }
};

export default currentUserReducer;
