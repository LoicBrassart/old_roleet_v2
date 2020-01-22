import React from "react";
import { useField } from "formik";

export function HiddenType({ value, ...props }) {
  const [field, meta] = useField(props);
  return (
    <>
      <input type="hidden" value={value} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
}
