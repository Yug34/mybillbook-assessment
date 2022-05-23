//TODO:
// @ts-nocheck
import React, { useEffect, useState } from "react";
import { iItem } from "../../../reducers/reducerTypes";
import { useDispatch, useSelector } from "react-redux";

import {
    ListContainer,
    SearchResultsContainer,
    SearchBar,
    SearchInput,
    ItemsHeader,
    HeaderRow,
    ItemTable,
    DataRowElement
} from "./itemListComponents";

const ItemList = () => {
    const [searchValue, setSearchValue] = useState("");
    const items = useSelector((state) =>
        state.items.sort((a: iItem, b: iItem) =>
            a.itemName.toLowerCase() > b.itemName.toLowerCase() ? 1 : -1
        )
    );
    const dispatch = useDispatch();

    useEffect(() => {
        const billBookItems = localStorage.getItem("billbookitems");
        if (billBookItems) {
            dispatch({ type: "SET_ITEMS", payload: JSON.parse(billBookItems) });
        }
    }, [dispatch]);

    const setCurrentItem = (_: any, item: iItem) => {
        dispatch({ type: "SET_CURRENT_ITEM", payload: item });
    };

    const handleSearchChange = ({ target: { value } }) => {
        setSearchValue(value);

        if (value) {
            const searchedItems = items.filter((item: iItem) =>
                (
                    item.itemName.toLowerCase() +
                    " " +
                    item.itemCode.toLowerCase()
                ).includes(value.toLowerCase())
            );
            dispatch({ type: "SET_ITEMS", payload: searchedItems });
        } else {
            dispatch({
                type: "SET_ITEMS",
                payload: JSON.parse(localStorage.getItem("billbookitems") || "{}"),
            });
        }
    };

    return (
        <ListContainer>
            <ItemsHeader>Items</ItemsHeader>

            <SearchResultsContainer style={{padding: '1rem'}}>
                <SearchBar>
                    <svg stroke="#606060" fill="#606060" strokeWidth="0" viewBox="0 0 24 24" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"/>
                    </svg>
                    <SearchInput
                        type="text"
                        placeholder="Search Items"
                        value={searchValue}
                        onChange={handleSearchChange}
                    />
                </SearchBar>

                {items.length === 0 ? (
                    <div style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        You do not have any items to display
                    </div>
                ) : (
                    <ItemTable>
                        <thead>
                            <HeaderRow>
                                {["ITEM NAME", "ITEM CODE", "SELLING PRICE", "PURCHASE PRICE", "UNIT", "DATE"].map((columnTitle) => (
                                    <th style={{fontSize: '14px', color: '#909090', textAlign: 'left', paddingLeft: '1.5rem'}} key={columnTitle}>{columnTitle}</th>
                                ))}
                            </HeaderRow>
                        </thead>
                        <tbody>
                            {items.map((item: iItem) => (
                                <tr
                                    style={{ border: '1px solid #d1d5db', borderTop: 'none', boxSizing: 'content-box'}}
                                    key={item.itemCode}
                                    onClick={(e) => setCurrentItem(e, item)}
                                >
                                    <DataRowElement>{item.itemName}</DataRowElement>
                                    <DataRowElement>{item.itemCode}</DataRowElement>
                                    <DataRowElement>₹ {item.salesPrice}</DataRowElement>
                                    <DataRowElement>₹ {item.purchasePrice}</DataRowElement>
                                    <DataRowElement>{item.measuringUnit}</DataRowElement>
                                    <DataRowElement>{item.stockDate}</DataRowElement>
                                </tr>
                            ))}
                        </tbody>
                    </ItemTable>
                )}

            </SearchResultsContainer>
        </ListContainer>
    );
};

export default ItemList;
