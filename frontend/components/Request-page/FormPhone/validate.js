const onlyNumbers = /^\d{0,}$/;

export default function validateFormStep2(values) {
  let errors = {};
  const { phone } = values;

  // Phone validation
  if (!phone) {
    errors.phone = "El número es requerido";
  } else if (!onlyNumbers.test(phone)) {
    errors.phone = "Sólo se aceptan dígitos";
  } else if (phone.length < 10) {
    errors.phone = "El número deberá tener mínimo 10 dígitos";
  } else if (phone.length > 10) {
    errors.phone = "El número deberá tener menos de 10 dígitos";
  }
  return errors;
}
