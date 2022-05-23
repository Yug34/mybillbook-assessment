import styled from "styled-components";

export const CreateEditHeader = styled.div`
  height: 46px;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  border-bottom: 2px solid #d1d5db;
  
`;

export const ItemInputContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

export const ItemLabel = styled.label`
  color: #9090c0;
`;

export const ItemInput = styled.input`
  margin-top: 10px;
  padding: 8px 10px;
  border: 1px solid #e5e7eb;
  font-size: 16px;
  border-radius: 4px;
  outline: none;
  &::placeholder {
    color: #b0b0b0;
  }
`;

export const StockPricing = styled.div`
  display: flex;
  margin-top: 1rem;
  padding-left: 1rem;
  align-items: center;
  width: 100%;
  height: 2rem;
`;

export const InputRow = styled.div`
  margin-top: 1rem;
  display: flex; 
  justify-content: space-between;
  align-items: center;
`;

export const StyledSelect = styled.select`
  margin-top: 10px;
  padding: 8px 10px;
  border: 1px solid #e5e7eb;
  font-size: 16px;
  border-radius: 4px;
  outline: none;
  background: white;
  &::placeholder {
    color: #b0b0b0;
  }
`;

export const SaveCTAContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;

export const SaveCTA = styled.button`
  background-color: #485eb0;
  color: white;
  border-radius: 8px;
  height: 3rem;
  font-size: 16px;
  font-weight: 600;
  border: none;
  width: 96%;
  margin-bottom: 1rem;
`;