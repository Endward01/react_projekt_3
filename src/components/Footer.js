const Footer = ({ value, isDone, midCode, amount }) => {
  return isDone ? (
    <p>
      {amount} {midCode} {"to"} {value} {"PLN"}
    </p>
  ) : (
    <p></p>
  );
};
export default Footer;
