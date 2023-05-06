import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";
import '@coreui/coreui/dist/css/coreui.min.css';
import 'animate.css';
import '../styles/backgroundColor.css';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <meta name="theme-color" content="#3c1742" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;