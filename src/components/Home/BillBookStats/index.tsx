import React from "react";

import {
    StatContainer,
    StatValue,
    StatValueContainer,
    Statistics
} from "./BillBookStatsComponents";

interface statisticData {
    stat: string;
    statDescription: string;
    displayStar?: boolean;
}
const stats: statisticData[] = [
    {
        stat: "1,00,000 +",
        statDescription: "Businesses Trust Us"
    },
    {
        stat: "30,00,000 +",
        statDescription: "Invoices created"
    },
    {
        stat: "5,000 +",
        statDescription: "Cities & Towns in India"
    },
    {
        stat: "4.5",
        displayStar: true,
        statDescription: "Rating on Google Play"
    }
];

const statElements = stats.map((stat, index) => (
    <StatContainer firstElement={index === 0} lastElement={index === stats.length - 1}>
        <StatValueContainer>
            <StatValue>{stat.stat}</StatValue>
            {stat.displayStar && (
                <svg style={{marginLeft: '4px'}} stroke="#E87137"
                     fill="#E87137" strokeWidth="0" viewBox="0 0 1024 1024"
                     height="2rem" width="2rem" xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M512.5 190.4l-94.4 191.3-211.2 30.7 152.8 149-36.1 210.3 188.9-99.3 188.9 99.2-36.1-210.3 152.8-148.9-211.2-30.7z"/><path d="M908.6 352.8l-253.9-36.9L541.2 85.8c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L370.3 315.9l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1L239 839.4a31.95 31.95 0 0 0 46.4 33.7l227.1-119.4 227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM665.3 561.3l36.1 210.3-188.9-99.2-188.9 99.3 36.1-210.3-152.8-149 211.2-30.7 94.4-191.3 94.4 191.3 211.2 30.7-152.8 148.9z"/>
                </svg>
            )}
        </StatValueContainer>
        <span style={{ marginTop: '10px', color: '#606060' }}>
            {stat.statDescription}
        </span>
    </StatContainer>
));

const Numbers = () => {
    return (
        <Statistics>
            {statElements}
        </Statistics>
    );
};

export default Numbers;
