import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import ContextProviders from './ContextProvider';

import {
  Login,
  Search,
  Cart,
  Payment,
} from './pages/Index';


class App extends React.Component {

  render() {
    return (
   <HashRouter>

      <ContextProviders>
      <Routes>
      <Route path="/" element={ <Login />} />
      <Route path="/search" element={ <Search />} />
      <Route path="/cart" element={ <Cart />} />
      <Route path="/payment" element={ <Payment />} />

      </Routes>
      </ContextProviders>
      </HashRouter>
    );
  }
}

export default App;
