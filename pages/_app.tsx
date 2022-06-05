import React from "react";
import { AppProps } from "next/app";
import { AnimatePresence, domAnimation, LazyMotion } from "framer-motion";
import { globalStyles } from "@styles/globalStyles";
import Head from "next/head";
import Nav from "@components/Nav/Nav";
import Layout from "@components/Layout/Layout";
import { styled } from "@styles/stitches.config";
import { useLastRoute } from "@hooks";

const AppWrap = styled("div", {
    height: "100%",
    width: "100%",
});

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
    globalStyles();
    const lastRoute = useLastRoute();

    return (
        <>
            <Head>
                <link
                    href="https://fonts.cdnfonts.com/css/sofia-pro"
                    rel="stylesheet"
                />
            </Head>
            <AppWrap>
                <LazyMotion features={domAnimation} strict>
                    <AnimatePresence
                        exitBeforeEnter={false}
                        initial={false}
                        onExitComplete={() => window.scrollTo(0, 0)}
                    >
                        <Layout key={router.pathname} lastPath={lastRoute}>
                            <Component {...pageProps} />
                        </Layout>
                    </AnimatePresence>
                </LazyMotion>
            </AppWrap>
            <Nav />
        </>
    );
}

export default MyApp;
