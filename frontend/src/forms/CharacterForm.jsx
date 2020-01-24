import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({});

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
      <label htmlFor="name" hidden>
        Nom
      </label>
      <input
        type="text"
        ref={register}
        name="name"
        placeholder="Sylvanas Murmevent"
      />
      {errors.name && <p>{errors.name.message}</p>}

      <label htmlFor="baseline" hidden>
        Citation
      </label>
      <input
        type="text"
        ref={register}
        name="baseline"
        placeholder="No turning back !"
      />
      {errors.baseline && <p>{errors.baseline.message}</p>}

      {/* Avatar: file */}
      {/* Tags: text */}
      {/* Fluffs: array */}
      {/*   Title: text */}
      {/*   Content: text */}
      {/* Author: hidden */}

      <input type="submit" />
    </form>
  );
}
