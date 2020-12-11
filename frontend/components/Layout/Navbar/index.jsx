import Link from "next/link";
import { Fragment } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <Fragment>
      <header className={styles.navbar}>
        <Link href="/">
          <a>
            <img src="/assets/img/logo.png" />
          </a>
        </Link>
      </header>
      <div className={styles.navbar__space} />
    </Fragment>
  );
}
