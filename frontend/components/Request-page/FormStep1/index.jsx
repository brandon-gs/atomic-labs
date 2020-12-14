// Components
import { ButtonSubmit, InputField } from "components";
import FormTitle from "../FormTitle";
// Hooks
import { useFormValidation } from "hooks";
import { useRouter } from "next/router";
// Form validation
import validate from "./validate";

const INITIAL_STATE = {
  name: "",
  lastnames: "",
};

export default function FormStep1() {
  const router = useRouter();

  const customSubmit = () => {
    router.push("/solicitud/paso/2");
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
    <>
      <form onSubmit={handleSubmit} className="form">
        <FormTitle normalText="te queremos" featuredText="conocer" />
        <h3>
          Queremos saber que eres tú, por favor ingresa los siguientes datos:
        </h3>
        <InputField
          label="Nombre (s)"
          name="name"
          type="text"
          img="/assets/img/ic_lock_24px.png"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          error={errors.name}
          blur={blurs.name}
        />
        <InputField
          label="Apellidos"
          name="lastnames"
          type="text"
          img="/assets/img/ic_lock_24px.png"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastnames}
          error={errors.lastnames}
          blur={blurs.lastnames}
        />
        <div className="form__button">
          <ButtonSubmit text="Enviar" />
        </div>
      </form>
    </>
  );
}
