import clsx from "clsx";
import styles from "./MoreInfo.module.css";

export default function MoreInfo() {
  return (
    <div
      className={styles.moreInfo}
      onClick={() => {
        console.log("do something");
      }}
    >
      <img
        src="/assets/img/down_arrow.png"
        alt="Flecha abajo"
        className={styles.moreInfo__image}
      />
      <p className={clsx("font__6", styles.moreInfo__text)}>Quiero saber más</p>
    </div>
  );
}
