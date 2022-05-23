import React from "react";
import heartEmoji from "../../../static/images/heartEmoji.png";
import isoCertified from "../../../static/images/isoCertified.png";
import Index from "../Login";

import {
    BannerContainer,
    BannerContentLoginContainer,
    BannerContent,
    BannerHeader,
    BannerDescription,
    TextContainer,
    SmallImage
} from "./BannerComponents"

const Banner = () => {
    return (
        <BannerContainer>
            <BannerContentLoginContainer>
                <BannerContent>
                    <div style={{ marginTop: '16px'}}>
                        <BannerHeader>Simple GST Billing & Stock Management</BannerHeader>
                        <BannerDescription>software for your business</BannerDescription>
                        <p style={{fontWeight: 400, fontSize: '24px', marginBottom: '0'}}>Atma Nirbhar Vyapari bane</p>
                    </div>

                    <TextContainer>
                        <span>
                          Made with
                            <SmallImage src={heartEmoji} alt={"Heart emoji"}/>
                          in India
                        </span>
                        <span style={{marginLeft: '2rem'}}>
                            <SmallImage  src={isoCertified} alt={"ISO Certified"}/>
                            ISO Certified
                        </span>
                    </TextContainer>
                </BannerContent>

                <Index/>

            </BannerContentLoginContainer>
        </BannerContainer>
    );
};

export default Banner;
