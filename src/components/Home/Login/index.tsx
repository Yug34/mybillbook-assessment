import React, {SyntheticEvent, useState} from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
    LoginContainer,
    LoginHeader,
    StyledForm,
    InputContainer,
    MobilePrefixContainer,
    MobileInput,
    OTPInput,
    DarkCTA
} from "./LoginComponents";

const Login = () => {
    const [mobile, setMobile] = useState("");
    const [otp, setOtp] = useState("");
    const [getOTPClicked, setGetOTPClicked] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const config = {
        headers: {
            accept: "application/json",
            "content-type": "application/json",
            client: "web",
        },
    };

    const getOTP = () => {
        const body = {
            mobile_number: mobile,
        };

        axios
            .post("https://niobooks.in/api/web/request_otp", body, config)
            .then(() => {
                setGetOTPClicked(true);
            });
    };

    const handleLogin = (e: SyntheticEvent) => {
        e.preventDefault();

        const body = {
            mobile_number: mobile,
            otp_code: otp,
        };

        axios
            .post("https://niobooks.in/api/web/authenticate", body, config)
            .then((res) => {
                dispatch({ type: "SET_USER", payload: res.data });
                localStorage.setItem("billbookuser", JSON.stringify(res.data));
                navigate({ pathname: "/items" });
            });
    };

    return (
        <LoginContainer>
            <LoginHeader>Login to myBillBook</LoginHeader>
            <StyledForm onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="mobile-number" style={{ color: '#b0b0b0', fontWeight: '600'}}>
                    Enter mobile number
                </label>
                <InputContainer>
                    <MobilePrefixContainer>
                      +91
                    </MobilePrefixContainer>
                    <MobileInput
                        type="number"
                        id="mobile-number"
                        name="mobile-number"
                        placeholder="Mobile Number"
                        value={mobile}
                        onChange={({ target: { value } }) => setMobile(value)}
                    />
                </InputContainer>

                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <label htmlFor="otp" style={{ color: '#b0b0b0', fontWeight: '600', marginTop: '1rem'}}>
                        Enter OTP
                    </label>
                    <InputContainer>
                        <OTPInput
                            disabled={!getOTPClicked}
                            type="number"
                            placeholder="One Time Password"
                            id="otp"
                            name="otp"
                            value={otp}
                            onChange={({ target: { value } }) => setOtp(value)}
                        />
                    </InputContainer>

                </div>

                <DarkCTA onClick={getOTPClicked ? handleLogin : getOTP}>
                    {getOTPClicked ? "Login" : "Get OTP"}
                </DarkCTA>
            </StyledForm>
        </LoginContainer>
    );
};

export default Login;
