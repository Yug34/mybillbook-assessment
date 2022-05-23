import styled from "styled-components";
import { px2vw } from "../../../utils";

interface PlanCardProps {
    cardBackground: string;
    firstElement: boolean;
    lastElement: boolean;
    borderColor: string;
}
export const PlanCard = styled.div<PlanCardProps>`
  width: clamp(300px, ${px2vw(400)}, 400px);
  margin-left: ${(props) => (props.firstElement && `clamp(4rem, ${px2vw(8 * 16)}, 8rem)`)};
  margin-right: ${(props) => (props.lastElement && `clamp(5rem, ${px2vw(10 * 16)}, 10rem)`)};
  background: ${(props) => (props.cardBackground || 'white')};
  display: flex;
  border: 1px solid ${(props) => (props.borderColor)};
  border-radius: 8px;
  flex-direction: column;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const BenefitParagraph = styled.p`
  display: flex;
  align-items: center;
  color: #808080;
`;

export const StrikethroughPrice = styled.div`
  text-decoration: line-through;
  font-weight: 600;
  font-size: 12px;
  color: #a0a0a0;
`;

interface DiscountedPriceProps {
    textColor: string;
}
export const DiscountedPrice = styled.div<DiscountedPriceProps>`
  margin-left: 8px;
  font-size: 24px;
  line-height: 80%;
  font-weight: 600;
  color: ${(props) => (props.textColor || '#000000')};
`;

export const PerYearText = styled.div`
  margin-left: 8px;
  font-size: 12px;
  font-weight: 600;
`;

export const PlanCardsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

interface MobileDesktopContainerProps {
    textColor: string;
    bgColor: string;
}
export const MobileDesktopContainer = styled.div<MobileDesktopContainerProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  color: ${(props) => (props.textColor || '#000000')};
  align-items: center;
  background: ${(props) => (props.bgColor || "")};
  height: 2.5rem;
`;
export const MostPopular = styled.div`
  position: absolute;
  margin-left: clamp(70px, ${px2vw(270)}, 270px);
  margin-top: -20px;
  font-size: 12px;
  color: white;
  background: red;
  font-weight: bold;
  padding: 2px 10px;
  border-radius: 10px;
`;


export const PricingContainer = styled.div`
  width: 100%;
  margin-top: 6rem;
`;

export const MoneyBackContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TrialContainer = styled.div`
  margin-left: clamp(4rem, ${px2vw(8 * 16)}, 8rem);
  display: flex;
  flex-direction: column;
  font-size: clamp(1.75rem, ${px2vw(2.5 * 16)}, 2.5rem);
  font-weight: 500;
`;

export const MoneyBackImage = styled.div`
  margin-right: clamp(5rem, ${px2vw(10 * 16)}, 10rem);
`;