import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().required()
});

export function LoginForm({ cb }) {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });
  const onSubmit = data => {
    console.log(data);
    cb();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="login" hidden>
        Login
      </label>
      <input
        type="text"
        ref={register}
        name="login"
        placeholder="Ton adresse mail"
      />
      {errors.login && <p>{errors.login.message}</p>}

      <label htmlFor="password" hidden>
        Mot de passe
      </label>
      <input
        type="password"
        ref={register}
        name="password"
        placeholder="Password"
      />
      {errors.password && <p>{errors.password.message}</p>}

      <input type="submit" />
    </form>
  );
}
