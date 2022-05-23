import styled from "styled-components";
import { px2vw } from "../../../utils";

export const BannerContainer = styled.div`
  margin-top: 4rem;
  height: 500px;
  width: 100%;
  background: #FBF7F4;
  border-bottom: 3px solid;
  border-image: linear-gradient(to right, #E87137 0%, #E87137 14%, white 14%) 3;
`;

export const BannerContentLoginContainer = styled.div`
  display: flex;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const BannerContent = styled.div`
  margin-left: clamp(4rem, ${px2vw(8 * 16)}, 8rem);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

export const BannerHeader = styled.h1`
  margin-top: 8rem;
  font-weight: bold;
  margin-bottom: 2px;
`;
export const BannerDescription = styled.div`
  font-size: 30px;
  margin-bottom: 6px;
`;
export const TextContainer = styled.div`
  color: #404040;
  font-weight: bold;
  margin-bottom: 1.75rem;
`;
export const SmallImage = styled.img`
  width: 16px;
  height: 16px;
  margin: 0 4px 0 2px;
`;
