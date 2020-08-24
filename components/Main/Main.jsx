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
      <Route path="/home" exact component={MainHome} />
      <Route path="/shop" exact component={MainShop} />
      <Route path="/cart" exact component={MainCart} />
      <Route path="/contact" exact component={MainContact} />
      <Route path="/login" exact component={MainLogin} />
    </section>
  )
}

export default Main;