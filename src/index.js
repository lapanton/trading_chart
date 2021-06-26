import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// https://iexcloud.io/docs/api/#quote

// For company data (at the top of the page), use https://iexcloud.io/docs/api/#quote endpoint and latestPrice, change and marketCap fields. You can hardcode the Earnings value. This section should update its data twice every minute.
// For the line, use the close field. For the bars at the bottom of the chart use the volume field (ignore the colors of the bars and use only one color).

//https://iexcloud.io/docs/api/#historical-prices

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
