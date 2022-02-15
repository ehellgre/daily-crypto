import NewsFeed from "./components/NewsFeed";
import CurrencyConverter from "./components/CurrencyConverter";
import Data from "./components/Data";

const App = () => {
  return (
    <div className="app">
      <h1>Daily Crypto</h1>
      <div className="app-wrapper">
        <CurrencyConverter />
        <NewsFeed />
      </div>
      <div className="crypto-search">
        <Data />
      </div>

      
    </div>
  );
}

export default App;
