import SuccessStep from "components/Common/SuccessStep";

export default function Resend() {
  const image = ["/assets/img/plane_icon.png"];
  const message = "Te estamos reenviando el código";
  return (
    <SuccessStep
      image={image}
      message={message}
      href="/solicitud/paso/2/completado"
    />
  );
}
