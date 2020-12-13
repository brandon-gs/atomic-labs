import clsx from "clsx";
import styles from "./MoreInfo.module.css";
import scroll from "utils/scroll";

export default function MoreInfo() {
  return (
    <div className={styles.moreInfo} onClick={() => scroll("about")}>
      <img
        src="/assets/img/down_arrow.png"
        alt="Flecha abajo"
        className={styles.moreInfo__image}
      />
      <p className={clsx("font__6", styles.moreInfo__text)}>Quiero saber más</p>
    </div>
  );
}
