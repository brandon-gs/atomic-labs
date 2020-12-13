import clsx from "clsx";
import styles from "./InputField.module.css";

export default function InputField({
  label = "",
  img = "",
  name = "input",
  value = "",
  type = "text",
  error = "",
  blur = false,
  onChange = () => {},
  onBlur = () => {},
  className = {},
  sizeContainer,
}) {
  const errorAndBlur = error && blur;

  return (
    <div
      className={styles.input__container}
      style={{ maxWidth: sizeContainer }}
    >
      <label htmlFor="name" className={styles.input__label}>
        {label}
      </label>
      {img && (
        <img
          src={img}
          alt="Imagen del campo de texto"
          className={styles.input__image}
        />
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={clsx(
          styles.input,
          errorAndBlur && styles.input__error,
          className
        )}
      />
      {errorAndBlur ? (
        <span className={styles.input__error__message}>{error}</span>
      ) : (
        <div className={styles.error__message__space} />
      )}
    </div>
  );
}
