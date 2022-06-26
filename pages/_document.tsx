import Document, { DocumentContext, DocumentInitialProps } from "next/document";
import { getCssText } from "@styles/stitches.config";
import { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext,
    ): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);

        return initialProps;
    }
    render(): JSX.Element {
        return (
            <Html lang="en">
                <Head>
                    <link
                        href="https://fonts.cdnfonts.com/css/sofia-pro"
                        rel="stylesheet"
                    />
                    <style
                        id="stitches"
                        dangerouslySetInnerHTML={{ __html: getCssText() }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default CustomDocument;
