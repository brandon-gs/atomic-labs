// Components
import Link from "next/link";
// Styles
import styles from "./ButtonJoin.module.css";

export default function ButtonJoin() {
  return (
    <Link href="/solicitud/paso/[step]" as="/solicitud/paso/1">
      <a className={styles.button__join}>¡Quiero ser parte!</a>
    </Link>
  );
}
