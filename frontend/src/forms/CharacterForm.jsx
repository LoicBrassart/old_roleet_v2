import React from "react";
import { Formik, Form, FieldArray } from "formik";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { TextType, HiddenType } from "./fields";

export function CharacterForm({ cb }) {
  const user = useSelector(state => state.user);
  return (
    <Formik
      initialValues={{
        author: "",
        name: "",
        baseline: "",
        fluffs: [{ title: "", content: "" }]
      }}
      onSubmit={values => {
        toast.info("Bla.");
        console.log(values);
      }}
    >
      {({ values }) => (
        <Form>
          <HiddenType name="author" value={user.id} />
          <TextType
            label="Name"
            name="name"
            placeholder="Sylvanas Windrunner"
          />
          {/* ImgType avatar*/}
          <TextType
            label="Citation"
            name="baseline"
            placeholder="No turning back !"
          />
          {/* TagType */}
          <FieldArray
            name="fluffs"
            render={arrayHelpers => (
              <div>
                {values.fluffs.map((fluff, i) => (
                  <div key={i}>
                    <TextType
                      label="Title"
                      name={`fluffs[${i}].title`}
                      placeholder="Comportement"
                    />
                    <TextType
                      label="Content"
                      name={`fluffs[${i}].content`}
                      placeholder="Bla, blabla..."
                    />
                    <button
                      type="button"
                      onClick={() => arrayHelpers.remove(i)}
                    >
                      -
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => arrayHelpers.push({ title: "", content: "" })}
                >
                  +
                </button>
              </div>
            )}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}
