// Components
import { ButtonSubmit, InputField } from "components";
import FormTitle from "../FormTitle";
// Hooks
import { useContext } from "react";
import { useFormValidation } from "hooks";
import { useRouter } from "next/router";
// Form validation
import validate from "../FormPhone/validate";
// Context
import { Context } from "context";

export default function FormStep2() {
  const {
    state: { phone },
    dispatch,
  } = useContext(Context);
  const router = useRouter();

  const INITIAL_STATE = {
    phone: phone,
  };

  const customSubmit = () => {
    dispatch({
      type: "UPDATE_PHONE",
      payload: values.phone,
    });
    router.push("/solicitud/paso/2/completado");
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
    <form onSubmit={handleSubmit} className="form">
      <FormTitle normalText="valida tu" featuredText="celular" />
      <h3 className="form__subtitle">
        Necesitamos validar tu número para continuar
      </h3>
      <h4 className="form__subtitle__2">
        Ingresa tu número a 10 dígitos y te enviaremos un código SMS.
      </h4>
      <InputField
        label="Número de celular"
        name="phone"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.phone}
        error={errors.phone}
        blur={blurs.phone}
      />
      <div className="form__button">
        <ButtonSubmit text="Continuar" />
      </div>
    </form>
  );
}
