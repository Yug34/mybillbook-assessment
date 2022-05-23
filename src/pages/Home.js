import React from "react";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import Banner from "../components/Home/Banner";
import Numbers from "../components/Home/BillBookStats";
import Plans from "../components/Home/Plans";

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Numbers />
            <Plans />
            <Footer />
        </>
    );
};

export default Home;
