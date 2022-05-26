import React from "react";
import { AppProps } from "next/app";
import { globalStyles } from "@styles/globalStyles";
import Head from "next/head";
import Nav from "@components/Nav/Nav";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    globalStyles();
    return (
        <>
            <Head>
                <link
                    href="https://fonts.cdnfonts.com/css/sofia-pro"
                    rel="stylesheet"
                />
            </Head>
            <Component {...pageProps} />
            <Nav />
        </>
    );
}

export default MyApp;
