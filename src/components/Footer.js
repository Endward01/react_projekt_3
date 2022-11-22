const Footer = ({ value, isDone, midCode, amount }) => {
    if (!isDone) {
        return <h2></h2>;
    } else {
        return (
      <h2>
        {amount} {midCode} {"to"} {value} {"PLN"}
      </h2>
    );
  }
};
export default Footer;
