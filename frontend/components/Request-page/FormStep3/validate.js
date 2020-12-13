const onlyNumbers = /^\d{0,}$/;

export default function validate(values) {
  let errors = {};
  const { code } = values;

  // Code validation
  if (!code) {
    errors.code = "El código es requerido";
  } else if (!onlyNumbers.test(code)) {
    errors.code = "Sólo se aceptan números";
  } else if (code.length < 6) {
    errors.code = "El código debe tener mínimo 6 números";
  } else if (code.length > 6) {
    errors.code = "El código deberá tener menos de 6 números";
  }

  return errors;
}
