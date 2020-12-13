import { useEffect, useState } from "react";

export default function useFormValidation(
  initialState,
  validate,
  customSubmit
) {
  const [values, setValues] = useState(initialState);
  const [blurs, setBlurs] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        customSubmit();
        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
  }, [isSubmitting, errors]);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleBlur = (event) => {
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setBlurs({
      ...blurs,
      [event.target.name]: true,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    const changeBlurs = {};
    for (const key in validationErrors) {
      changeBlurs[key] = true;
    }
    setBlurs(changeBlurs);
    setErrors(validationErrors);
    setSubmitting(true);
  };

  return {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    blurs,
    isSubmitting,
  };
}
