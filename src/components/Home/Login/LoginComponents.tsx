import styled from "styled-components";
import {px2vw} from "../../../utils";

export const LoginContainer = styled.div`
  width: 320px;
  margin-right: clamp(5rem, ${px2vw(10 * 16)}, 10rem);
  border: 2px solid #c0c0c0;
  background: white;
  border-radius: 4px;
  padding: clamp(1rem, ${px2vw(2.5 * 16)}, 2.5rem);
`;

export const LoginHeader = styled.div`
  font-size: clamp(1rem, ${px2vw(1.5 * 16)}, 1.5rem);
`;

export const StyledForm = styled.form`
  margin-top: clamp(1rem, ${px2vw(2 * 16)}, 2rem);
`;

export const InputContainer = styled.div`
  height: clamp(2rem, ${px2vw(2.75 * 16)}, 2.75rem);
  display: flex;
  justify-items: center;
  align-items: center;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  margin: 10px 0;
`;

export const MobilePrefixContainer = styled.div`
  height: 100%;
  background: #f0f0f0;
  border-radius: 8px 0 0 8px;
  display: flex;
  align-items: center;
  padding: 0 4px;
  font-weight: 400;
  color: #808080;
`;

export const MobileInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  margin-left: 4px;
  border: none;
  font-size: clamp(14px, ${px2vw(18)}, 18px);
  -moz-appearance: textfield;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #a0a0a0;
  }
  &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
`;
export const OTPInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  margin-left: 4px;
  border: none;
  font-size: clamp(14px, ${px2vw(18)}, 18px);
  -moz-appearance: textfield;
  &:disabled {
    cursor: not-allowed;
  }
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #a0a0a0;
  }
  &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
`;
export const DarkCTA = styled.div`
  width: 100%;
  height: clamp(32px, ${px2vw(40)}, 40px);
  margin-top: clamp(1.5rem, ${px2vw(2.5 * 16)}, 2.5rem);
  background: #9CA3AF;
  padding: 8px 0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #606060;
  font-weight: 800;
`;