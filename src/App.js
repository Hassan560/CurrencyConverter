import React from 'react';

//components
import Currency from './Components/Currency';
import CurrencyProvider from './Context/CurrencyProvider';

const App = () => {
  return (
    <CurrencyProvider>
      <Currency />
    </CurrencyProvider>
  )
}

export default App