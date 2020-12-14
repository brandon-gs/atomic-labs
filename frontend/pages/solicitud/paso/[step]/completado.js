import Head from "next/head";
import SuccessStep from "components/Common/SuccessStep";

export default function StepCompleted({ step }) {
  const checkmarkImage = `${process.env.ASSET_PREFIX}/assets/img/checkmark@2x.png`;
  const images = [null, checkmarkImage, checkmarkImage];
  const messages = [
    null,
    "Te hemos enviado el código al número que nos proporcionaste",
    "Hemos validado el código",
  ];
  return (
    <>
      <Head>
        <title>Atomic Labs | Paso completado</title>
      </Head>
      <SuccessStep
        image={images[step - 1]}
        message={messages[step - 1]}
        href={`/solicitud/paso/${step + 1}`}
      />
    </>
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
    paths: [{ params: { step: "2" } }, { params: { step: "3" } }],
    fallback: false,
  };
}
