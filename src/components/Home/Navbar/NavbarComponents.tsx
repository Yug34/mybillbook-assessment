import styled from "styled-components";
import { px2vw } from "../../../utils";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 4rem;
  position: fixed;
  display: flex;
  justify-content: space-between;

  align-items: center;
  align-content: center;
  
  background: white;
  top: 0;
  left: 0;
`;

export const NavbarLink = styled.div`
  width: fit-content;
  font-weight: 500;
  margin: 0 1.5rem;
  cursor: pointer;
  line-height: 20px;
  padding-bottom: 3px;
  
  &:hover {
    color: #E87137;
    padding-bottom: 0;
    border-bottom: 3px solid;
    border-image: linear-gradient(to right, white 25%, white 45%, #E87137 45%, #E87137 55%, white 55%, white 75%) 3;
  }
`;

export const NavbarLinksContainer = styled.div`
  display: flex;
  margin-right: clamp(5rem, ${px2vw(10 * 16)}, 10rem);
`;

export const MyBillBookLogo = styled.img`
  margin-left:  clamp(4rem, ${px2vw(8 * 16)}, 8rem);
  width: 200px;
  height: 42px;
`;