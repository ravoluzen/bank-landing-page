import PropTypes from "prop-types";

const Currency = (props) => {
  return (
    <div className="group shadow-md rounded p-4">
      <input 
      type="text" 
      value={props.amount} 
      onChange={ev => props.onAmountChange(ev.target.value)}
      className="bg-slate-200" 
      />

      <select 
      value={props.currency} 
      onChange={ev => props.onCurrencyChange(ev.target.value)}
      className="bg-slate-200"
      >
        {props.currencies.map((currency => (
          <option key={currency} value={currency}>{currency}</option>
        )))}
      </select>
    </div>
  );
}

Currency.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
};

export default Currency;