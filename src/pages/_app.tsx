import ApolloSetting from "@/common/apollo";
import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ApolloSetting>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ApolloSetting>
    );
}
