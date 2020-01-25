import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { toast } from "react-toastify";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

const schema = yup.object().shape({});

export function CharacterForm({ cb }) {
  const [fluffs, setFluffs] = useState([]);
  const [tags, setTags] = useState([]);
  const [counterFluffs, setCounterFluffs] = useState(0);

  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });

  const addFluff = () => {
    setFluffs(prevFluffs => [...prevFluffs, counterFluffs]);
    setCounterFluffs(prevCounterFluffs => prevCounterFluffs + 1);
  };

  const removeFluff = index => () => {
    setFluffs(prevFluffs => [...prevFluffs.filter(item => item !== index)]);
    setCounterFluffs(prevCounterFluffs => prevCounterFluffs - 1);
  };

  const onSubmit = data => {
    data.tags = data.tags.split(",");
    console.log(data);
    if (cb) cb();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" name="author" value="42" ref={register} />
      <>
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
      </>

      <>
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
      </>

      <>
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
      </>

      <>
        {fluffs.map(index => {
          const fieldName = `fluffs[${index}]`;
          return (
            <fieldset name={fieldName} key={index}>
              <label>
                Titre:
                <input type="text" name={`${fieldName}.title`} ref={register} />
              </label>

              <label>
                Contenu:
                <input
                  type="text"
                  name={`${fieldName}.content`}
                  ref={register}
                />
              </label>
              <button type="button" onClick={removeFluff(index)}>
                Supprimer
              </button>
            </fieldset>
          );
        })}
        <button type="button" onClick={addFluff}>
          Ajouter
        </button>
      </>
      <input type="file" name="avatar" ref={register} />

      <input type="submit" value="Sauvegarder" />
    </form>
  );
}
