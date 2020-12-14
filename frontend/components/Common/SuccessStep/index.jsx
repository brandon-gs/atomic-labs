// Hooks
import { useRouter } from "next/router";
import { useEffect } from "react";
// Styles
import styles from "./SuccessStep.module.css";

export default function SuccessStep({ message, image, href }) {
  const router = useRouter();
  const isCheckmarkImage = image.includes("checkmark");
  const imageClass = isCheckmarkImage
    ? styles.success__image__checkmark
    : styles.success__image__plane;

  useEffect(() => {
    const redirect = setTimeout(() => {
      router.push(href);
    }, 3500);

    return () => {
      clearTimeout(redirect);
    };
  }, []);

  return (
    <>
      <div
        className="background-3"
        style={{
          backgroundImage: `url(${process.env.ASSET_PREFIX}/assets/img/background_3.jpg)`,
        }}
      />
      <section className={styles.success}>
        <div className={styles.success__container}>
          <img src={image} alt="Marca de verifacion" className={imageClass} />
          <p className={styles.sucess__message}>{message}</p>
        </div>
      </section>
    </>
  );
}
