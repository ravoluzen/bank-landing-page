import Currency from "./Currency";
import {useState, useEffect} from "react";
import axios from "axios";

const CurrencyConverter = () => {

  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('EUR');
  const [rates, setRates] = useState([]);


  useEffect(() => {
    axios.get('http://data.fixer.io/api/latest?access_key=fc27d49a2f58b8de29cb1376757c65eb')
      .then(response => {
        setRates(response.data.rates);
      })
  }, []);


  useEffect(() => {
    if (!!rates) {

      function init() {
        handleAmount1Change(1);

      }

      init();
    }
  }, [rates]);



  function format(number) {
    return number.toFixed(4);
  }

  function handleAmount1Change(amount1) {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1) {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
    setCurrency1(currency1);
  }

  function handleAmount2Change(amount2) {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
    setAmount2(amount2);
  }

  function handleCurrency2Change(currency2) {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
    setCurrency2(currency2);
  }


  return (
    <div className="p-8 flex flex-col justify-around items-center bg-slate-200 lg:p-32 lg:flex-row lg:text-left lg:-mt-24">

        <article className="w-full mb-12 lg:w-2/5">
            <h1 className="mb-8 text-2xl font-bold text-slate-900 lg:text-4xl">Deal in multiple currencies.</h1>

            <p className="mb-8 text-md text-slate-700 lg:text-xl">
                Our banking experience provides seamless services over all the popular currencies and more. You never have to worry about exchanges while transacting.
            </p>
        </article>

        <section className="lg:-mt-16">
            <h2 className="mb-8 text-xl text-slate-900 lg:text-2xl">Convert Currencies</h2>

            <Currency
                onAmountChange={handleAmount1Change}
                onCurrencyChange={handleCurrency1Change}
                currencies={Object.keys(rates)}
                amount={amount1}
                currency={currency1} 
            />

            <Currency
                onAmountChange={handleAmount2Change}
                onCurrencyChange={handleCurrency2Change}
                currencies={Object.keys(rates)}
                amount={amount2}
                currency={currency2} 
            />
        </section>
    </div>
  );
}

export default CurrencyConverter;