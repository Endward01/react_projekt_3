const url = "https://api.nbp.pl/api/exchangerates/tables/A/";

const fetchExchangeRates = fetch(url)
  .then(res => res.json())
  .catch((err) => console.log(err));

export { fetchExchangeRates };
