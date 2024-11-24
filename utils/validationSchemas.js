export const validateEmail = (value) => {
  if (!value) {
    return "El correo electrónico es obligatorio";
  }
  if (!/\S+@\S+\.\S+/.test(value)) {
    return "Correo electrónico inválido";
  }
};

export const validatePassword = (value) => {
  if (!value) {
    return "La contraseña es obligatoria";
  }
  if (value.length < 6) {
    return "La contraseña debe tener al menos 6 caracteres";
  }
};
