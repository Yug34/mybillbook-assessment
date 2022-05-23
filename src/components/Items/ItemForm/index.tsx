import React, {SyntheticEvent, useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    CreateEditHeader,
    ItemInputContainer,
    ItemLabel,
    ItemInput,
    StockPricing,
    InputRow,
    StyledSelect,
    SaveCTAContainer,
    SaveCTA
} from "./itemFormComponents";

const ItemForm = () => {
    const [itemName, setItemName] = useState("");
    const [itemCode, setItemCode] = useState("");
    const [salesPrice, setSalesPrice] = useState("");
    const [purchasePrice, setPurchasePrice] = useState("");
    const [measuringUnit, setMeasuringUnit] = useState("Select unit");
    const [stockDate, setStockDate] = useState("");
    //@ts-ignore
    const currentItem = useSelector((state) => state.currentItem);
    //@ts-ignore
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();

    useEffect(() => {
        setItemName(currentItem.itemName || "");
        setItemCode(currentItem.itemCode || "");
        setSalesPrice(currentItem.salesPrice || "");
        setPurchasePrice(currentItem.purchasePrice || "");
        setMeasuringUnit(currentItem.measuringUnit || "");
        setStockDate(currentItem.stockDate || "");
    }, [currentItem]);


    const addItem = (e: SyntheticEvent) => {
        e.preventDefault();

        const payload = {
            itemName,
            itemCode,
            salesPrice,
            purchasePrice,
            measuringUnit,
            stockDate,
        };

        //@ts-ignore
        const itemFound = items.find((item) => item.itemCode === itemCode);

        dispatch({ type: itemFound ? "UPDATE_ITEM" : "ADD_ITEM", payload });

        setItemName("");
        setItemCode("");
        setSalesPrice("");
        setPurchasePrice("");
        setMeasuringUnit("");
        setStockDate("");
    };

    return (
        <div style={{border: "2px solid #d1d5db", width: '40%', overflowX: 'hidden'}}>
            <CreateEditHeader>
                Create/Edit Items
            </CreateEditHeader>

            <form onSubmit={addItem}>
                <div>
                    <InputRow>
                        <ItemInputContainer>
                            <ItemLabel htmlFor="item-name">
                                Item Name *
                            </ItemLabel>
                            <ItemInput
                                type="text"
                                required
                                placeholder="Enter Item Name"
                                id="item-name"
                                name="item-name"
                                value={itemName}
                                onChange={({ target: { value } }) => setItemName(value)}
                            />
                        </ItemInputContainer>

                        <ItemInputContainer>
                            <ItemLabel htmlFor="item-name">
                                Item Code
                            </ItemLabel>
                            <ItemInput
                                type="text"
                                placeholder="Enter Item Code"
                                id="item-name"
                                name="item-name"
                                value={itemCode}
                                onChange={({ target: { value } }) => setItemCode(value)}
                            />
                        </ItemInputContainer>
                    </InputRow>
                </div>

                <StockPricing>
                    Stock & Pricing details (Optional)
                </StockPricing>

                <InputRow>
                    <ItemInputContainer>
                        <ItemLabel htmlFor="sales-price">
                            Sales Price
                        </ItemLabel>
                        <ItemInput
                            type="text"
                            placeholder="₹ 0"
                            id="sales-price"
                            name="sales-price"
                            value={salesPrice}
                            onChange={({ target: { value } }) => setSalesPrice(value)}
                        />
                    </ItemInputContainer>

                    <ItemInputContainer>
                        <ItemLabel htmlFor="purchase-price">
                            Purchase Price
                        </ItemLabel>
                        <ItemInput
                            type="text"
                            placeholder="₹ 0"
                            id="purchase-price"
                            name="purchase-price"
                            value={purchasePrice}
                            onChange={({ target: { value } }) => setPurchasePrice(value)}
                        />
                    </ItemInputContainer>
                </InputRow>

                <InputRow>
                    <ItemInputContainer>
                        <ItemLabel htmlFor="measuring-unit">
                            Measuring UNIT
                        </ItemLabel>
                        <StyledSelect
                            value={measuringUnit}
                            onChange={({ target: { value } }) => setMeasuringUnit(value)}
                        >
                            {["PCS", "BOXES", "GMS", "KGS", "LTR"].map((item: string) => (
                                <option value={item} key={item}>{item}</option>
                            ))}
                        </StyledSelect>
                    </ItemInputContainer>

                    <ItemInputContainer>
                        <ItemLabel htmlFor="stock-date">
                            Opening Stock Date
                        </ItemLabel>
                        <ItemInput
                            type="date"
                            id="stock-date"
                            name="stock-date"
                            value={stockDate}
                            onChange={({ target: { value } }) => setStockDate(value)}
                        />
                    </ItemInputContainer>
                </InputRow>

                <SaveCTAContainer>
                    <SaveCTA type="submit">
                        Save
                    </SaveCTA>
                </SaveCTAContainer>
            </form>
        </div>
    );
};

export default ItemForm;
