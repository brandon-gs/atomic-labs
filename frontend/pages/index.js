import { Fragment } from "react";
import Head from "next/head";
import { Navbar, Dashboard } from "components";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Index page</title>
      </Head>
      <Navbar />
      <Dashboard />
    </Fragment>
  );
}
