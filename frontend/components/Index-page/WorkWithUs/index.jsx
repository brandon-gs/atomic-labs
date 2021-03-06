// Components
import { ButtonJoin } from "components";
import Steps from "./Steps";
// Styles
import styles from "./WorkWithUs.module.css";

export default function WorkWithUs() {
  return (
    <section
      className={styles.work}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${process.env.ASSET_PREFIX}/assets/img/background_2.jpg)`,
      }}
    >
      <h2 className={"title text__white"}>¡Te encantará</h2>
      <h2 className={"title text__orange"}>trabajar con nosotros!</h2>
      <img
        src={`${process.env.ASSET_PREFIX}/assets/img/work_with_us.png`}
        alt="personas"
        className={styles.work__image}
      />
      <Steps />
      <ButtonJoin />
    </section>
  );
}
