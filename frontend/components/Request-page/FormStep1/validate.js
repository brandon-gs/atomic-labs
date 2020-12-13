export default function validateStep1(values) {
  let errors = {};
  const { name, lastnames } = values;

  // Name validation
  if (!name) {
    errors.name = "El nombre es requerido";
  } else if (name.length < 5) {
    errors.name = "El nombre deberá tener mínimo 5 caracteres";
  }

  // Lastnames Validation
  if (!lastnames) {
    errors.lastnames = "Los apellidos son requeridos";
  } else if (lastnames.length < 5) {
    errors.lastnames = "Los apellidos deberán tener mínimo 5 caracteres";
  }

  return errors;
}
