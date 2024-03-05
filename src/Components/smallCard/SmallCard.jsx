import React, { useEffect } from 'react';

const SmallCard = () => {
  const config = {
    "colorTheme": "light",
    "dateRange": "12M",
    "showChart": false,
    "locale": "en",
    "largeChartUrl": "",
    "isTransparent": false,
    "showSymbolLogo": true,
    "showFloatingTooltip": false,
    "width": "100%",
    "height": "200",
    "tabs": [
      {
        "title": "crypto",
        "symbols": [
          {
            "s": "BITSTAMP:BTCUSD"
          },
          {
            "s": "CRYPTOCAP:ETH",
          },
          {
            "s": "CRYPTOCAP:MATIC",
          }
        ]
      }
    ]
  };

  useEffect(() => {
    // Load TradingView widget script dynamically
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
    script.async = true;
    script.innerHTML = JSON.stringify(config);
    document.getElementsByClassName('tradingview-widget-container__widget')[0].appendChild(script);

    return () => {
      // Cleanup when component unmounts
      document.getElementsByClassName('tradingview-widget-container__widget')[0].innerHTML = '';
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
        <div className=' text-lg font-semibold pl-4 pb-2'>Trending Coins (24h)</div>
      <div className="tradingview-widget-container__widget"></div>
      
    </div>
  );
};

export default SmallCard;
