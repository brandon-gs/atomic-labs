import Head from "next/head";
import { SuccessStep } from "components";

export default function Resend() {
  const image = ["/assets/img/plane_icon.png"];
  const message = "Te estamos reenviando el código";
  return (
    <>
      <Head>
        <title>Atomic Labs | Reenviando</title>
      </Head>
      <SuccessStep
        image={image}
        message={message}
        href="/solicitud/paso/2/completado"
      />
    </>
  );
}
