// eslint-disable-next-line react/prop-types
function Sort({ SetSearch }) {
  return (
    <select onChange={(e) => SetSearch(e.target.value)}>
      <option value="input">input</option>
      <option value="description">description</option>
      <option value="packed">Packed </option>
    </select>
  );
}

export default Sort;
