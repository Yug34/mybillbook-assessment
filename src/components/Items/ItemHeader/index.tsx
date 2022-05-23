//TODO:
// @ts-nocheck
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
    HeaderContainer,
    HeaderContent,
    UserNumber,
    LogoutCTA
} from "./ItemHeaderComponents";

const ItemHeader = () => {
    const currentUser = useSelector((state) => state.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("billbookuser");
        dispatch({ type: "SET_USER", payload: {} });
        navigate({ pathname: "/" });
    };

    return (
        <HeaderContainer>
            <HeaderContent>
                <UserNumber>{currentUser.mobile_number}</UserNumber>
                <LogoutCTA onClick={handleLogout}>
                    Logout
                </LogoutCTA>
            </HeaderContent>
        </HeaderContainer>
    );
};

export default ItemHeader;
