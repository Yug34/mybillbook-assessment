import styled from "styled-components";
import { px2vw } from "../../../utils";

export const Statistics = styled.div`
  margin-top: 3rem;
  width: 100%;
  justify-content: space-between;
  display: flex;
`;

interface StatContainerProps {
    firstElement: boolean;
    lastElement: boolean;
}
export const StatContainer = styled.div<StatContainerProps>`
  margin-left: ${(props) => (props.firstElement && `clamp(4rem, ${px2vw(8 * 16)}, 8rem)`)};
  margin-right: ${(props) => (props.lastElement && `clamp(5rem, ${px2vw(10 * 16)}, 10rem)`)};
  min-width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
`;

export const StatValueContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StatValue = styled.div`
  color: #E87137;
  font-size: clamp(1.875rem, ${px2vw(2.25 * 16)}, 2.25rem);
  font-weight: 600;
`;