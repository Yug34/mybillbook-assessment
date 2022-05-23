import styled from "styled-components";
import {px2vw} from "../../../utils";

export const FooterContainer = styled.div`
  margin-top: 5rem;
  width: 100%;
  display: flex;
  justify-items: center;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const GetInTouchSection = styled.div`
  margin-left: clamp(4rem, ${px2vw(8 * 16)}, 8rem);
  display: flex;
  flex-direction: column;
`;

export const ChatLinkContainer = styled.div`
  display: flex;
`;

export const FooterTitle = styled.div`
  color: #E87137;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 24px;
`;

export const ContactMail = styled.div`
  margin-bottom: 12px;
  color: #404040;
`;

export const FollowUsContainer = styled.div`
  margin-right: clamp(5rem, ${px2vw(10 * 16)}, 10rem);
`;

export const ContactNumber = styled.div`
  font-size: 1.5rem;
  margin-bottom: 12px;
  color: #404040;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ChatItem = styled.div`
  border-radius: 4px;
  padding: 0.5rem 1rem;
  display: flex;
  justify-items: center;
  align-items: center;
`;

export const SocialElement = styled.div`
  border-radius: 50%;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 6px 5px 0 rgba(0,0,0,0.1);
  -webkit-box-shadow: 0 6px 5px 0 rgba(0,0,0,0.1);
  -moz-box-shadow: 0 6px 5px 0 rgba(0,0,0,0.1);
`;