import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Header from '/components/Header/Header.jsx';
import Main from '/components/Main/Main.jsx';
import Footer from '/components/Footer/Footer.jsx';
import { CssBaseline } from '@material-ui';

import { ProductsProvider } from '/contexts/ProductsContext.jsx';

const App = () => {
  return (
    <div className="App">
      <Router>  
        <Switch>
          <CssBaseline>
            <ProductsProvider>
              <Header />
              <Main />
              <Footer />
            </ProductsProvider>
          </CssBaseline>
        </Switch>
      </Router>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('react-app')
);
