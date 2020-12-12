import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <section className={styles.footer__container}>
      <div className={styles.footer}>
        <p>© 2020 AtomicLabs. Todos los derechos reservados.</p>
        <div className={styles.footer__grow} />
        <Link href="/">
          <a className={styles.footer__privacity}>Aviso de privacidad</a>
        </Link>
        <div className={styles.footer_social__container}>
          <img
            src="/assets/img/linkedin.png"
            alt="Logo de Linkedin"
            className={styles.footer__social}
          />
          <img
            src="/assets/img/twitter.png"
            alt="Logo de Twitter"
            className={styles.footer__social}
          />
        </div>
      </div>
    </section>
  );
}
