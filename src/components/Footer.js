const Footer = ({ value, isDone, midCode, amount }) => {
    if (!isDone) {
        return <p></p>;
    } else {
        return (
      <p>
        {amount} {midCode} {"to"} {value} {"PLN"}
      </p>
    );
  }
};
export default Footer;
