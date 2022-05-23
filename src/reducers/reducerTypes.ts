export interface iItem {
    itemCode: string;
    itemName: string;
    measuringUnit: string;
    purchasePrice: string;
    salesPrice: string;
    stockDate: string;
}

export interface iItemAction {
    type: "SET_ITEMS" | "ADD_ITEM" | "UPDATE_ITEM" | "SET_CURRENT_ITEM";
    payload: iItem;
}

export const itemActionTypes = {
    SET_ITEMS: "SET_ITEMS",
    ADD_ITEM: "ADD_ITEM",
    UPDATE_ITEM: "UPDATE_ITEM",
    SET_CURRENT_ITEM: "SET_CURRENT_ITEM"
}

export interface iUserAction {
    type: "SET_USER";
    payload: iItem;
}

export const userActionTypes = {
    SET_USER: "SET_USER"
}