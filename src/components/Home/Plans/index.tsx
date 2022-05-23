import React, {ReactNode} from "react";
import _30day from "../../../static/images/_30day.jpg";
import blueCrown from "../../../static/images/bluecrown.svg";
import goldCrown from "../../../static/images/goldcrown.svg";
import orangeCrown from "../../../static/images/orangecrown.svg";

import {
    PlanCard,
    PriceContainer,
    BenefitParagraph,
    StrikethroughPrice,
    DiscountedPrice,
    PerYearText,
    PlanCardsContainer,
    MobileDesktopContainer,
    MostPopular,
    PricingContainer,
    MoneyBackContainer,
    TrialContainer,
    MoneyBackImage
} from "./PlansComponents";

interface iBenefits {
    singleCheckBenefits: (string | ReactNode)[];
    doubleCheckBenefits?: string;
}
interface iPlan {
    image: string;
    cardBackground: string;
    secondaryColor: string;
    tertiaryColor: string;
    planName: string;
    currentPrice: number;
    strikeThroughPrice: number;
    mostPopular: boolean;
    benefits: iBenefits;
    borderColor: string;
}
const plansData: iPlan[] = [
    {
        borderColor: '#d0d0d0',
        image: blueCrown,
        planName: "Silver Plan",
        cardBackground: '#ffffff',
        secondaryColor: '#edeff7',
        tertiaryColor: '#6174b8',
        currentPrice: 799,
        strikeThroughPrice: 1299,
        mostPopular: false,
        benefits: {
            singleCheckBenefits: [
                "Unlimited Stock Adjustments",
                "GST Reports, Profit & Loss Report",
                "Remove MyBillBook logo from invoice",
                "Only mobile device supported",
                "+ 5 more features"
            ]
        }
    },
    {
        borderColor: '#f6ce67',
        image: goldCrown,
        planName: "Gold Plan",
        cardBackground: '#fbf6ed',
        secondaryColor: '#f8e9d3',
        tertiaryColor: '#dba267',
        currentPrice: 1799,
        strikeThroughPrice: 2599,
        mostPopular: true,
        benefits: {
            singleCheckBenefits: [
                (<>Add <b>upto 5 staff</b> to my BillBook</>),
                "Unlimited Mobile + Desktop Logins"
            ],
            doubleCheckBenefits: "All Silver Features"
        }
    },
    {
        borderColor: '#d0d0d0',
        image: orangeCrown,
        planName: "Diamond Plan",
        cardBackground: '#ffffff',
        secondaryColor: '#fbefe8',
        tertiaryColor: '#e87137',
        currentPrice: 3500,
        strikeThroughPrice: 14599,
        mostPopular: false,
        benefits: {
            singleCheckBenefits: [(
                <>Add <b>Unlimited staff</b> to My BillBook</>
            )],
            doubleCheckBenefits: "All Gold & Silver Features"
        }
    }
];

const singleGreenTick = (
    <svg stroke="green" fill="green" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
    </svg>
);

const doubleGreenTick = (
    <svg stroke="green" fill="green" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
        <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
    </svg>
);

const mobileDesktopSVG = (tertiaryColor: string) => (
    <svg stroke={tertiaryColor || '#000000'} fill={tertiaryColor || '#000000'} strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"/>
    </svg>
);

const plansElements = plansData.map((plan, index) => (
    <PlanCard key={plan.planName} borderColor={plan.borderColor} firstElement={index === 0} lastElement={index === plansData.length - 1} cardBackground={plan.cardBackground} >
        <div style={{padding: '12px'}}>
            {plan.mostPopular && (
                <MostPopular>
                    Most Popular
                </MostPopular>
            )}

            <img src={plan.image} alt={"Crown"} style={{width: '40px'}}/>
            <p>{plan.planName}</p>
            <PriceContainer>
                <StrikethroughPrice>₹ {plan.strikeThroughPrice}</StrikethroughPrice>
                <DiscountedPrice textColor={plan.tertiaryColor}>₹ {plan.currentPrice}</DiscountedPrice>
                <PerYearText>/ year</PerYearText>
            </PriceContainer>
        </div>

        <MobileDesktopContainer textColor={plan.tertiaryColor} bgColor={plan.secondaryColor}>
            {mobileDesktopSVG(plan.tertiaryColor)}
            Mobile + Desktop
        </MobileDesktopContainer>

        <div style={{padding: '12px'}}>
            {plan.benefits.doubleCheckBenefits && (
                <BenefitParagraph>
                    {doubleGreenTick}
                    <span style={{marginLeft: '10px'}}>{plan.benefits.doubleCheckBenefits}</span>
                </BenefitParagraph>
            )}
            {plan.benefits.singleCheckBenefits.map((benefit) => (
                <BenefitParagraph>
                    {singleGreenTick}
                    <span style={{marginLeft: '10px'}}>{benefit}</span>
                </BenefitParagraph>
            ))}
        </div>
    </PlanCard>
));



const Plans = () => {
    return (
        <PricingContainer>
            <MoneyBackContainer>
                <TrialContainer>
                  <span>
                    Now try all benefits of My BillBook app
                  </span>
                    <span style={{color: "#E87137"}}>
                    Free for 14 days
                  </span>
                </TrialContainer>
                <MoneyBackImage>
                    <img
                        src={_30day}
                        alt="Money back guarantee"
                        width={124}
                        height={124}
                    />
                </MoneyBackImage>
            </MoneyBackContainer>

            <PlanCardsContainer>
                {plansElements}
            </PlanCardsContainer>

        </PricingContainer>
    );
};

export default Plans;
