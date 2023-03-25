import React from 'react';
import ProductsContextProvider from './contexts/Products';
import Main from './components/Main';

const App = () => {
  return (
    <ProductsContextProvider>
        <Main />
    </ProductsContextProvider>
  );
}

export default App;
