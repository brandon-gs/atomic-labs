import { Fragment } from "react";
import Head from "next/head";
import { Navbar, Dashboard, About, WorkWithUs, Features } from "components";
import Footer from "components/Layout/Footer";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Atomic Labs</title>
      </Head>
      <Navbar />
      <Dashboard />
      <About />
      <WorkWithUs />
      <Features />
      <Footer />
    </Fragment>
  );
}
