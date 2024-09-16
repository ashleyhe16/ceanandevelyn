import * as React from "react";
import { Helmet } from "react-helmet";
// import Footer from "../components/footer";
// import Header from "../components/header";
// import NavBar from "../components/navbar";
import Main from "../components/main";
import "../styles/index.scss";

const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <title>cean & evelyn</title>
        {/* 
        <link rel="icon" href="/favicon/favicon-32.png" sizes="32x32" />
        <link rel="icon" href="/favicon/favicon-57.png" sizes="57x57" />
        <link rel="icon" href="/favicon/favicon-76.png" sizes="76x76" />
        <link rel="icon" href="/favicon/favicon-96.png" sizes="96x96" />
        <link rel="icon" href="/favicon/favicon-128.png" sizes="128x128" />
        <link rel="icon" href="/favicon/favicon-192.png" sizes="192x192" />
        <link rel="icon" href="/favicon/favicon-228.png" sizes="228x228" />

        <link
          rel="shortcut icon"
          sizes="196x196"
          href="/favicon/favicon-196.png"
        />

        <link
          rel="apple-touch-icon"
          href="/favicon/favicon-120.png"
          sizes="120x120"
        />
        <link
          rel="apple-touch-icon"
          href="/favicon/favicon-152.png"
          sizes="152x152"
        />
        <link
          rel="apple-touch-icon"
          href="/favicon/favicon-180.png"
          sizes="180x180"
        />

        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta
          name="msapplication-TileImage"
          content="/favicon/favicon-144.png"
        />

        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        /> */}
      </Helmet>
      {/* <NavBar />
      <Main />
      <Footer /> */}
      <Main />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
