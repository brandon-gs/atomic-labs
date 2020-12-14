import clsx from "clsx";
import styles from "./ButtonSubmit.module.css";

export default function ButtonSubmit({ text, className }) {
  return (
    <button type="submit" className={clsx(styles.button, className)}>
      {text}
    </button>
  );
}
