import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import MainHome from './MainHome.jsx';
import MainShop from './MainShop.jsx';
import MainCart from './MainCart.jsx';
import MainContact from './MainContact.jsx';
import MainUser from './MainUser.jsx'
import PrivacyAndTerms from './PrivacyAndTerms.jsx';

const Main = () => {
  return (
    <main style={{minHeight: '90vh'}}>
      <Redirect from="/" to ="/home" />
      <Route path="/home" exact component={MainHome} />
      <Route path="/shop" exact component={MainShop} />
      <Route path="/cart" exact component={MainCart} />
      <Route path="/contact" exact component={MainContact} />
      <Route path="/user" exact component={MainUser} />
      <Route path="/privacy and terms" exact component={PrivacyAndTerms} />
    </main>
  )
}

export default Main;