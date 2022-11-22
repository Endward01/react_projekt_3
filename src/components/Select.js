import Options from "./Options";
const Select = ({ list, loaded, handleChange }) => {
  return (
    <select onChange={handleChange}>
      <option hidden>Wybierz Walute</option>
      <Options list={list} loaded={loaded} />
    </select>
  );
};
export default Select;
