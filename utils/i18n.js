import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        login: "Login",
        email: "Email Address",
        password: "Password",
        enterEmail: "Enter your email",
        enterPassword: "Enter your password",
        showPassword: "Show password",
        hidePassword: "Hide password",
        loginButton: "Login",
        registering: "Registering...",
        forgotPassword: "Forgot your password?",
        register: "Don't have an account? Register",
        submit: "Submitting...",
        entering: "Entering...",
        terms: "Terms and Conditions",
        copyright: "All rights reserved to Creativedog Agency - 2022",
        designBy: "Design and development with ❤️ by",
      },
    },
    es: {
      translation: {
        login: "Iniciar sesión",
        email: "Correo Electrónico",
        password: "Contraseña",
        enterEmail: "Ingresa tu correo electrónico",
        enterPassword: "Ingresa tu contraseña",
        showPassword: "Mostrar contraseña",
        hidePassword: "Ocultar contraseña",
        loginButton: "Ingresar",
        registering: "Registrando...",
        forgotPassword: "¿Olvidaste tu contraseña?",
        register: "¿No tienes cuenta? Regístrate",
        submit: "Enviando...",
        entering: "Ingresando...",
        terms: "Términos y Condiciones",
        copyright: "Todos los derechos reservados a Creativedog Agency - 2022",
        designBy: "Diseño y desarrollo con ❤️ por",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
