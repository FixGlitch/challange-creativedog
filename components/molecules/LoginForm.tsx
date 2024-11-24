"use client";

import { useState } from "react";
import Link from "next/link";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useTranslation } from "react-i18next";
import { validateEmail, validatePassword } from "../../utils/validationSchemas";
import Image from "next/image";
import styles from "../../styles/login-form.module.css";

interface LoginFormProps {
  onSubmit: (values: { email: string; password: string }) => void;
}

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className={`${styles.loginFormContainer} d-flex flex-column`}
      style={{ backgroundColor: "#F7F7F7" }}
    >
      <div className="flex-grow-1 d-flex justify-content-center align-items-center">
        <div className={`${styles.formContainer}`}>
          <h1 className={`${styles.formTitle} text-center mb-4`}>
            {t("login")}
          </h1>
          <p
            className={`${styles.formSubTitle} text-center mb-4 text-decoration-none`}
          >
            {t("enterEmail")} & {t("enterPassword")}
          </p>

          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="bg-white rounded-2 shadow-sm p-4 d-flex flex-column gap-3">
                  <div className="mb-3">
                    <label
                      htmlFor="email"
                      className={`${styles.labels} form-label text-decoration-none text-start`}
                    >
                      {t("email")}
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className={`${styles.fields} form-control text-decoration-none text-start`}
                      placeholder="juanperez@mail.com"
                      validate={validateEmail}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="password"
                      className={`${styles.labels} form-label text-decoration-none text-start`}
                    >
                      {t("password")}
                    </label>
                    <div
                      className="input-group"
                      style={{ position: "relative" }}
                    >
                      <Field
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        className={`${styles.fields} form-control text-decoration-none text-start`}
                        placeholder="••••••••••"
                        validate={validatePassword}
                      />
                      <button
                        type="button"
                        className="btn btn-outline-light"
                        style={{
                          position: "absolute",
                          right: "10px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          borderLeft: "none",
                          padding: 0,
                          backgroundColor: "transparent",
                        }}
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label={
                          showPassword ? t("hidePassword") : t("showPassword")
                        }
                      >
                        {showPassword ? (
                          <Image
                            src="/eye.svg"
                            alt="Eye"
                            width={24}
                            height={24}
                          />
                        ) : (
                          <Image
                            src="/eye-off.svg"
                            alt="Eye Off"
                            width={24}
                            height={24}
                          />
                        )}
                      </button>
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </div>
                <div className="d-flex flex-column gap-3 mt-4">
                  <button
                    type="submit"
                    className={`${
                      styles.buttonSubmit
                    } btn w-100 text-decoration-none text-center ${
                      isSubmitting ? styles.submitting : ""
                    }`}
                    disabled={isSubmitting}
                  >
                    <Image
                      src="/user.svg"
                      alt="user Logo"
                      width={24}
                      height={24}
                      style={{ marginRight: "10px" }}
                    />
                    {isSubmitting ? t("entering") : t("loginButton")}
                  </button>

                  <div className="d-flex justify-content-between">
                    <Link
                      href="/register"
                      className="link"
                      style={{ color: "#0500FF" }}
                    >
                      {t("register")}
                    </Link>
                    <Link
                      href="/forgot-password"
                      className="link"
                      style={{ color: "#0500FF" }}
                    >
                      {t("forgotPassword")}
                    </Link>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
