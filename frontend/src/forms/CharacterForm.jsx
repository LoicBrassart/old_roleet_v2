import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { toast } from "react-toastify";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

const schema = yup.object().shape({});

export function CharacterForm({ cb }) {
  const [tags, setTags] = useState([]);
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });

  const onSubmit = data => {
    data.tags = data.tags.split(",");
    console.log(data);
    if (cb) cb();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" name="author" value="42" ref={register} />

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

      <ReactTagInput
        tags={tags}
        ref={register}
        onChange={newTags => setTags(newTags)}
        placeholder="Horde, Undead, ..."
        removeOnBackspace
        validator={value => {
          const hasComma = value.indexOf(",") !== -1;
          if (hasComma)
            toast.error("Pas de virgule dans les tags s'il te plait !");
          return !hasComma;
        }}
      />
      <input type="hidden" name="tags" value={tags} ref={register} />

      {/* Avatar: file */}
      {/* Fluffs: array */}
      {/*   Title: text */}
      {/*   Content: text */}

      <input type="submit" />
    </form>
  );
}
