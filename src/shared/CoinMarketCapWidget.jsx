import { useEffect } from "react";

function CoinMarketCapWidget() {
    useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://files.coinmarketcap.com/static/widget/currency.js";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }, []);
  
    return (
      <section className="container mb-12">
        <div
          className="coinmarketcap-currency-widget text-gray-800 dark:text-gray-300 backdrop-blur-sm rounded-md"
          data-currencyid="23322"
          data-base="USD"
          data-secondary="BTC"
          data-ticker="true"
          data-rank="true"
          data-marketcap="true"
          data-volume="true"
          data-statsticker="true"
          data-stats="USD"
        ></div>
      </section>
    );
  }
  
  export default CoinMarketCapWidget;