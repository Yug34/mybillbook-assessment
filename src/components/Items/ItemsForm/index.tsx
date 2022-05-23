import React from "react";
import ItemForm from "../ItemForm";
import ItemList from "../ItemList";

const ItemsForm = () => {
    return (
        <div style={{display: "flex", marginTop: '4rem'}}>
            <ItemList />
            <ItemForm/>
        </div>
    );
};

export default ItemsForm;
