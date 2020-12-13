// Components
import { ButtonSubmit, InputField } from "components";
// Hooks
import { useContext } from "react";
import { useFormValidation } from "hooks";
// Styles
import clsx from "clsx";
import styles from "./FormPhone.module.css";
// Form validation
import validate from "./validate";
// Context
import { Context } from "context";

export default function FormPhone({ onSubmit }) {
  const {
    state: { phone },
    dispatch,
  } = useContext(Context);

  const INITIAL_STATE = {
    phone,
  };

  const customSubmit = () => {
    dispatch({
      type: "UPDATE_PHONE",
      payload: values.phone,
    });
    onSubmit();
  };

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    blurs,
  } = useFormValidation(INITIAL_STATE, validate, customSubmit);

  return (
    <div className={clsx(styles.form)}>
      <InputField
        name="phone"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.phone}
        error={errors.phone}
        blur={blurs.phone}
        className={styles.input__phone}
        sizeContainer={220}
      />
      <div>
        <button onClick={handleSubmit} className={styles.phone__button}>
          Guardar
        </button>
      </div>
    </div>
  );
}
