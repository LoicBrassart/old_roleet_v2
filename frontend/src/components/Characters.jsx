export default function Characters({ data }) {
  return data.map(char => {
    return char.name;
  });
}
