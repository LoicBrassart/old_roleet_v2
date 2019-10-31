export default function Scenarii({ data }) {
  return data.map(char => {
    return char.title;
  });
}
