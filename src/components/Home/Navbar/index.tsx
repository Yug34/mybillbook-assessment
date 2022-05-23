import React from "react";
import logo from "../../../static/images/mybillbook-logo.webp";
import {
    NavbarContainer,
    MyBillBookLogo,
    NavbarLink,
    NavbarLinksContainer
} from "./NavbarComponents";

const Navbar = () => {
    type navbarItem = {
        text: string;
        link: string;
    }
    const navbarLinks: navbarItem[] = [
        {
            text: 'Why Use My BillBook?',
            link: '/'
        },
        {
            text: 'Who is it For?',
            link: '/'
        },
        {
            text: 'Online Store',
            link: '/'
        },
        {
            text: 'Pricing',
            link: '/'
        },
        {
            text: 'FAQs',
            link: '/'
        }
    ];

    const navbarElements = navbarLinks.map((element) => (
        <NavbarLink key={element.text}>
            {element.text}
        </NavbarLink>
    ));

    return (
        <NavbarContainer>
            <MyBillBookLogo src={logo} alt={"MyBillBook logo"} />
            <NavbarLinksContainer>{navbarElements}</NavbarLinksContainer>
        </NavbarContainer>
    );
};

export default Navbar;
