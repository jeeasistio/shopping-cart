import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Header from '/components/Header/Header.jsx';
import Main from '/components/Main/Main.jsx';
import Footer from '/components/Footer/Footer.jsx';
import { CssBaseline, makeStyles } from '@material-ui';
import AppTheme from '/contexts/AppTheme.jsx';

import { ProductsProvider } from '/contexts/ProductsContext.jsx';
import { CartProvider } from '/contexts/CartContext.jsx';
import { UserProvider } from '/contexts/UserContext.jsx';

const App = () => {
  
  const useStyles = makeStyles(theme => ({
    app: {
      position: 'relative'
    }
  }))
  
  const classes = useStyles();
  
  return (
    <div className={classes.app}>
      <Router>  
        <Switch>
          <CssBaseline>
            <ProductsProvider>
              <CartProvider>
                <UserProvider>
                  <AppTheme>
                    <Header />
                    <Main />
                    <Footer />
                  </AppTheme>
                </UserProvider>
              </CartProvider>
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