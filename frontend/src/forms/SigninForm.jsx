import React from "react";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { api } from "../conf";
import { TextType, PasswordType } from "./fields";

export function SigninForm({ cb }) {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        pseudo: "",
        password: ""
      }}
      onSubmit={values => {
        api
          .get("/users", values)
          .then(({ data }) => {
            dispatch({ type: "LOGIN_MOCK_USER" });
          })
          .catch(() => {
            toast.error(
              "We encountered an error while signing in, sorry about that"
            );
          })
          .then(() => {
            cb();
          });
      }}
    >
      <Form>
        <TextType label="Pseudo" name="pseudo" placeholder="Jane" />
        <PasswordType label="Mot de passe" name="password" placeholder="Jane" />
        <PasswordType
          label="Mot de passe (conf.)"
          name="password"
          placeholder="Jane"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
