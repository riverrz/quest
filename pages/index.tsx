import React from "react";
import { NextSeo } from "next-seo";
import Home from "@components/Home/Home";

interface HomePageProps {
    isTransitioning: boolean;
}

const HomePage: React.FC<HomePageProps> = ({ isTransitioning }) => {
    return (
        <>
            <NextSeo title="Home" description="Get to know about me!" />
            <Home isTransitioning={isTransitioning} />
        </>
    );
};

export default HomePage;
