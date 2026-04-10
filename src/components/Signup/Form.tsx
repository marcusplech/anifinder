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
  acceptTerms: boolean;
}

const signupSchema = yup
  .object({
    email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
    username: yup
      .string()
      .min(3, "Nome de usuário: mínimo de 3 caracteres")
      .required("Nome de usuário obrigatório"),
    password: yup.string().min(6, "Senha: mínimo de 6 caracteres").required("Senha obrigatória"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas devem ser iguais")
      .required("Confirmação obrigatória"),
    acceptTerms: yup.boolean().oneOf([true], "Você precisa aceitar os termos de uso").required(),
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
    formState: { isSubmitting },
  } = useForm<UserInfo>({
    resolver: yupFormResolver,
    mode: "onChange",
    reValidateMode: "onChange",
    criteriaMode: "all",
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
  });

  const onSubmit = () => {
    setIsModalVisible(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input className="al-input" placeholder="E-mail" {...register("email")} />
      </div>
      <div>
        <input className="al-input" placeholder="Nome de usuário" {...register("username")} />
      </div>
      <div>
        <input
          type="password"
          className="al-input"
          placeholder="Senha"
          autoComplete="off"
          {...register("password")}
        />
      </div>
      <div>
        <input
          type="password"
          className="al-input"
          placeholder="Confirmar senha"
          autoComplete="off"
          {...register("confirmPassword")}
        />
      </div>
      <div className="checkbox-container">
        <label className="label-checkbox">
          <input type="checkbox" {...register("acceptTerms")} />
          <span>Concordo com os termos de uso</span>
        </label>
      </div>
      <Link href="/">
        <button className="back-submit" type="button">
          Voltar ao início
        </button>
      </Link>
      <button disabled={isSubmitting} className="submit" name="submit" type="submit">
        Cadastrar-se
      </button>
      {isModalVisible ? <Modal onClose={() => setIsModalVisible(false)} /> : null}
    </form>
  );
};

export default Form;
