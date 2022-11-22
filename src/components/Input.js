import { NumericFormat } from "react-number-format";
const Input = ({ amount, inputAmount }) => {
  return (
    <NumericFormat
      value={amount}
      onChange={inputAmount}
      placeholder="Kwota"
      decimalScale={2}
      allowNegative={false}
    />
  );
};

export default Input;
