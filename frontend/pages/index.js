import { Fragment } from "react";
import Head from "next/head";
import { Navbar } from "components";
import Dashboard from "components/Index-page/Dashboard";

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
