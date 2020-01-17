export function Scenarii({ data }) {
  return data.map(scen => {
    return scen.title;
  });
}
