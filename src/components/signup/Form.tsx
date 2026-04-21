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

const inputClass =
  "mb-6 h-11 w-full rounded-[10px] border border-slate-900/[0.06] bg-slate-100 px-4 font-sans text-sm font-normal text-slate-900 shadow-none transition-[border-color,box-shadow] duration-200 placeholder:text-slate-500 focus:border-indigo-500/45 focus:outline-none focus:shadow-[0_0_0_3px_rgba(99,102,241,0.12)]";

const btnClass =
  "mt-2.5 inline-block cursor-pointer rounded-[10px] border-0 bg-gradient-to-br from-indigo-500 to-indigo-600 px-5 py-3 text-[15px] font-semibold text-white shadow-[0_4px_16px_rgba(99,102,241,0.35)] transition-shadow duration-200 hover:shadow-[0_6px_22px_rgba(99,102,241,0.45)] disabled:cursor-not-allowed disabled:opacity-50";

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
        <input className={inputClass} placeholder="E-mail" {...register("email")} />
      </div>
      <div>
        <input className={inputClass} placeholder="Nome de usuário" {...register("username")} />
      </div>
      <div>
        <input
          type="password"
          className={inputClass}
          placeholder="Senha"
          autoComplete="off"
          {...register("password")}
        />
      </div>
      <div>
        <input
          type="password"
          className={inputClass}
          placeholder="Confirmar senha"
          autoComplete="off"
          {...register("confirmPassword")}
        />
      </div>
      <div className="mr-8 inline-block cursor-pointer select-none whitespace-nowrap text-sm font-medium text-[#606266]">
        <label className="mb-2.5 flex cursor-pointer items-center text-[13px] font-normal text-slate-500">
          <input
            type="checkbox"
            className="peer mr-2.5 cursor-pointer"
            {...register("acceptTerms")}
          />
          <span className="peer-checked:text-indigo-500">Concordo com os termos de uso</span>
        </label>
      </div>
      <Link href="/">
        <button className={`${btnClass} mr-2.5`} type="button">
          Voltar ao início
        </button>
      </Link>
      <button disabled={isSubmitting} className={btnClass} name="submit" type="submit">
        Cadastrar-se
      </button>
      {isModalVisible ? <Modal onClose={() => setIsModalVisible(false)} /> : null}
    </form>
  );
};

export default Form;
