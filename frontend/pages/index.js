import { Fragment } from "react";
import Head from "next/head";
import {
  Navbar,
  Dashboard,
  About,
  WorkWithUs,
  Features,
  Footer,
} from "components";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Atomic Labs</title>
        <meta name="viewport" content="width=1200" />
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
