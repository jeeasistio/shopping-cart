import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import MainHome from './MainHome.jsx';
import MainShop from './MainShop.jsx';
import MainCart from './MainCart.jsx';
import MainContact from './MainContact.jsx';
import MainLogin from './MainLogin.jsx'

const Main = () => {
  return (
    <section id="main">
      <Redirect from="/" to ="/home" />
      <Route path="/home" component={MainHome} />
      <Route path="/shop" component={MainShop} />
      <Route path="/cart" component={MainCart} />
      <Route path="/contact" component={MainContact} />
      <Route path="/login" component={MainLogin} />
    </section>
  )
}

export default Main;