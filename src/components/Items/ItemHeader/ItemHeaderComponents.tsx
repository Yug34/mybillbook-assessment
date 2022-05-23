import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 4rem;
  position: fixed;
  top: 0;
  left: 0;
`;

export const HeaderContent = styled.div`
  display: flex;
  height: 100%;
  padding: 0 1rem;
  align-items: center;
  justify-content: space-between;
`;

export const UserNumber = styled.div`
  font-weight: 600;
  color: #606060;
  font-size: 1.25rem;
`;

export const LogoutCTA = styled.div`
  font-weight: 600;
  color: #606060;
  font-size: 1.25rem;
  cursor: pointer;
  
  &:hover {
    color: #303030;
  }
`;