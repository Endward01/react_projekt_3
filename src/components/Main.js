import style from "../css/Main.module.css";
import Button from "./Button";
import Header from "./Header";
import Input from "./Input";
import Select from "./Select";
import { useEffect, useState } from "react";
import { fetchExchangeRates } from "../services/fetchCurrenciesAPI";
import Footer from "./Footer";
import Loader from "./Loader";
const Main = () => {
  // input
  const [amount, setAmount] = useState("");
  const inputAmount = (elem) => {
    setAmount(elem.target.value);
    setIsDone(false);
  };

  // select
  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    fetchExchangeRates.then((result) => {
      setLoaded(true);
      setItems(result[0].rates);
    });
  }, []);

  // get mid of selected currency
  const [mid, setMid] = useState("");
  const [midCode, setMidCode] = useState("ds");
  const handleChange = (elem) => {
    const value = elem.target.value;
    setMidCode(value);
    items.forEach((elem) => {
      if (elem.code === value) {
        setMid(elem.mid);
        setIsDone(false);
      }
    });
  };

  //count

  const [value, setValue] = useState(NaN);
  const [isDone, setIsDone] = useState(false);
  const showValue = () => {
    const sum = amount * mid;
    setValue(sum.toFixed(2));
    setIsDone(true);
  };

  return (
    <main className={style.container}>
      <Header />
      <Input amount={amount} inputAmount={inputAmount} />
      <Select list={items} loaded={loaded} handleChange={handleChange} />
      <Button showValue={showValue} />
      <Footer value={value} isDone={isDone} midCode={midCode} amount={amount} />
      <Loader loaded={loaded} />
    </main>
  );
};

export default Main;
