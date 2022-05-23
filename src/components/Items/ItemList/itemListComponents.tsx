import styled from "styled-components";

export const ListContainer = styled.div`
  height: 100%;
  width: 60%;
  border: 2px solid #d1d5db;
  border-right: none;
  border-radius: 2px;
`;

export const SearchResultsContainer = styled.div`
  padding: 1rem;
  border-top: 2px solid #d1d5db;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 20rem;
  height: 40px;
  padding: 0 16px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
`;

export const SearchInput = styled.input`
  margin-left: 10px;
  border: none;
  outline: none;
  font-size: 16px;
  color: #a0a0a0;
  &::placeholder {
    color: #a0a0a0;
  }
`;

export const ItemsHeader = styled.div`
  height: 46px;
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

export const HeaderRow = styled.tr`
  border: 1px solid #d1d5db;
  height: 40px;
  background: #e5e7eb;
  padding: 0 2rem;
  width: 100%;
`;

export const ItemTable = styled.table`
  width: 100%;
  border: none;
  border-collapse: collapse;
  margin-top: 1.5rem;
`;

export const DataRowElement = styled.td`
  height: 2.5rem;
  text-align: left;
  padding-left: 1.5rem;
`;