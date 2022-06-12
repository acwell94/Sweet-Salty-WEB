import "../styles/globals.css";
import { Global } from "@emotion/react";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/apollo";
import { globalstyles } from "../src/components/commons/globalstyles/globalstyles";
import Layout from "../src/components/commons/layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "antd/dist/antd.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <meta name="keywords" content="맛집, 리뷰, 단짠맛집, 맛집리뷰" />
        <meta name="Robots" content="All" />
        <meta name="title" property="og:title" content="단짠맛집" />
        <meta
          name="image"
          property="og:image"
          content="/images/squarelogo.jpg"
        />
        <meta name="description" content="유저가 만들어 나가는 진짜 맛집리뷰" />
        <title>단짠맛집</title>
        <link rel="icon" href="/images/squarelogo.jpg" />
      </Head>
      <RecoilRoot>
        <ApolloSetting>
          <Global styles={globalstyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloSetting>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
