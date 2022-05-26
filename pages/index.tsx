import React from "react";
import { NextSeo } from "next-seo";
import Home from "@components/Home/Home";

const HomePage: React.FC = () => {
    return (
        <>
            <NextSeo title="Home" description="Get to know about me!" />
            <Home />
        </>
    );
};

export default HomePage;
