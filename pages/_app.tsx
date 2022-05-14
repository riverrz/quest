import React from "react";
import { AppProps } from "next/app";
import { globalStyles } from "@styles/globalStyles";
import Head from "next/head";

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
        </>
    );
}

export default MyApp;
