import React from "react";
import { NextSeo } from "next-seo";
import Work from "@components/Work/Work";

const WorkPage: React.FC = () => {
    return (
        <>
            <NextSeo
                title="Work"
                description="Get to know my professional work experiences!"
            />
            <Work />
        </>
    );
};

export default WorkPage;
