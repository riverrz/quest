import React from "react";
import { NextSeo } from "next-seo";

const Blog: React.FC = () => {
    return (
        <>
            <NextSeo
                title="Blogs"
                description="A curated collection of my discoveries in my quest to understand technology better!"
            />
            <h1>Blog</h1>
        </>
    );
};

export default Blog;
