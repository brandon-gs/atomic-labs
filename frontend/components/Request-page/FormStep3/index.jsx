// Components
import { ButtonSubmit, InputField } from "components";
import { MdModeEdit } from "react-icons/md";
import Link from "next/link";
import FormTitle from "../FormTitle";
import FormPhone from "../FormPhone";
// Hooks
import { Fragment, useContext, useState } from "react";
import { useFormValidation } from "hooks";
import { useRouter } from "next/router";
// Form validation
import validate from "./validate";
// Styles
import styles from "./FormStep3.module.css";
// Context
import { Context } from "context";

const INITIAL_STATE = {
  code: "",
};

export default function FormStep3() {
  const {
    state: { phone },
  } = useContext(Context);

  const [editMode, setEditMode] = useState(false);

  const router = useRouter();

  const customSubmit = () => {
    router.push("/solicitud/paso/3/completado");
  };

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    blurs,
  } = useFormValidation(INITIAL_STATE, validate, customSubmit);

  const formatPhone = (phone) => {
    let formatedPhone = "";
    for (let i = 0; i < phone.length; i++) {
      const requireSpace = i === 1 || i === 5;
      const space = requireSpace ? " " : "";
      formatedPhone += phone[i] + space;
    }
    return formatedPhone;
  };

  const activeEditMode = () => setEditMode(true);
  const disableEditMode = () => setEditMode(false);

  return (
    <>
      <FormTitle normalText="código de" featuredText="verificación" />
      <h3 className={styles.form__subtitle}>Te enviamos un SMS al número:</h3>
      {!editMode ? (
        <h3 className={styles.edit__phone__container}>
          {`+52 ${formatPhone(phone)}`}
          <MdModeEdit className={styles.icon__edit} onClick={activeEditMode} />
        </h3>
      ) : (
        <Fragment>
          <FormPhone onSubmit={disableEditMode} />
        </Fragment>
      )}
      <h4>Ingresa el código de verificación:</h4>
      <form onSubmit={handleSubmit} className="form">
        <InputField
          label="Código de verificación"
          name="code"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.code}
          error={errors.code}
          blur={blurs.code}
        />
        <div className="form__button">
          <ButtonSubmit text="Validar código" />
        </div>
      </form>
      <p className={styles.resend__container}>
        ¿No recibiste el código?{" "}
        <Link href="/solicitud/reenviar">
          <a className={styles.resend}>Reenviar el código</a>
        </Link>
      </p>
    </>
  );
}
