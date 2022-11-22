const Options = ({ list, loaded }) => {
  if (!loaded) {
    return <option>Loading...</option>;
  } else {
    return list.map((elem, key) => (
      <option value={elem.code} key={key}>
        {elem.code} {"("}
        {elem.currency}
        {")"}
      </option>
    ));
  }
};

export default Options;
