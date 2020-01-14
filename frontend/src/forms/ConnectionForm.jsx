import React from "react";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { api } from "../conf";
import { TextType, PasswordType } from "./fields/index";

export default function ConnectionForm() {
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
              "We encountered an error while logging in, sorry about that"
            );
          });
      }}
    >
      <Form>
        <TextType label="Pseudo" name="pseudo" placeholder="Jane" />
        <PasswordType label="Mot de passe" name="password" placeholder="Jane" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
