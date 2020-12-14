import { Fragment } from "react";
import Head from "next/head";
import { Layout, CurrentStep } from "components";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Atomic Labs | Solicitud</title>
      </Head>
      <Layout>
        <CurrentStep />
      </Layout>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const {
    params: { step },
  } = context;
  return {
    props: {
      step: parseInt(step),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { step: "1" } },
      { params: { step: "2" } },
      { params: { step: "3" } },
      { params: { step: "4" } },
    ],
    fallback: false,
  };
}
