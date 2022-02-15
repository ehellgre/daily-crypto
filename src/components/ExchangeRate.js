const ExchangeRate = ({exchangedData}) => {
    return (
      <div className = "exchange-rate">
        <h3>Exchange Rate</h3>
        <h1 className="exchange-rate-result">{exchangedData.exchangeRate}</h1>
        <p>1 {exchangedData.primaryCurrency} to {exchangedData.secondaryCurrency}</p>
      </div>
    );
}
  
export default ExchangeRate;
  