"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FieldErrors, Resolver, useForm } from "react-hook-form";
import * as yup from "yup";
import Modal from "./Modal";

interface UserInfo {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const signupSchema = yup
  .object({
    email: yup.string().email("Email invalido").required("Email obrigatorio"),
    username: yup
      .string()
      .min(3, "Username minimo de 3 caracteres")
      .required("Username obrigatorio"),
    password: yup.string().min(6, "Senha minima de 6 caracteres").required("Senha obrigatoria"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas devem ser iguais")
      .required("Confirmacao obrigatoria"),
  })
  .required();

const yupFormResolver: Resolver<UserInfo> = async (values) => {
  try {
    const validated = await signupSchema.validate(values, {
      abortEarly: false,
    });

    return {
      values: validated,
      errors: {},
    };
  } catch (error) {
    const fieldErrors: FieldErrors<UserInfo> = {};
    if (error instanceof yup.ValidationError) {
      error.inner.forEach((validationError) => {
        if (!validationError.path) return;
        if (fieldErrors[validationError.path as keyof UserInfo]) return;
        fieldErrors[validationError.path as keyof UserInfo] = {
          type: validationError.type ?? "validation",
          message: validationError.message,
        };
      });
    }
    return {
      values: {},
      errors: fieldErrors,
    };
  }
};

const Form = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm<UserInfo>({
    resolver: yupFormResolver,
    mode: "onChange",
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const isFormInvalid = !isValid || isSubmitting;
  const onSubmit = () => {
    setIsModalVisible(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input className="al-input" placeholder="Email" {...register("email")} />
      </div>
      <div>
        <input className="al-input" placeholder="Username" {...register("username")} />
      </div>
      <div>
        <input
          type="password"
          className="al-input"
          placeholder="Password"
          autoComplete="off"
          {...register("password")}
        />
      </div>
      <div>
        <input
          type="password"
          className="al-input"
          placeholder="Confirm Password"
          autoComplete="off"
          {...register("confirmPassword")}
        />
      </div>
      <div className="checkbox-container">
        <label className="label-checkbox">
          <input checked name="toggle" type="checkbox" disabled={isFormInvalid} readOnly></input>
          <span>You agree to our terms of service</span>
        </label>
      </div>
      <Link href="/">
        <button className="back-submit" type="button">
          Back to Home
        </button>
      </Link>
      <button disabled={isFormInvalid} className="submit" name="submit" type="submit">
        Sign Up
      </button>
      {isModalVisible ? <Modal onClose={() => setIsModalVisible(false)} /> : null}
    </form>
  );
};

export default Form;
