import React from "react";
import { useField } from "formik";

/* 
    Use example:
    <TextType
        label="First Name"
        name="firstName"
        placeholder="Jane"
    />
*/
export function TextType({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input type="text" className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
}
