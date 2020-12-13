// Hooks
import { useStep } from "hooks";
// Styles
import styles from "./FormTitle.module.css";

export default function FormTitle({ normalText, featuredText }) {
  const { step } = useStep();
  return (
    <h2 className={`title text__white ${styles.form__title}`}>
      <img
        src={`/assets/img/number_${step}_fill.png`}
        alt="Numero 1"
        className={styles.form__title__image}
      />
      {normalText} <span className="text__orange">{featuredText}</span>
    </h2>
  );
}
