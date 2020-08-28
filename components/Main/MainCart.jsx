import React, { useContext, useState } from 'react';
import CartItem from './MainCart/CartItem.jsx';
import CartTotal from './MainCart/CartTotal.jsx';
import CartPurchase from './MainCart/CartPurchase.jsx';
import {
  makeStyles,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui';

import { CartContext } from '/contexts/CartContext.jsx';

const MainCart = () => {

  const { cart, removeFromCart, totalCartPrice, setTotalCartPrice, clearCart } = useContext(CartContext);

  const useStyles = makeStyles(theme => ({
    cartTitle: {
      margin: '10px auto',
      textAlign: 'center'
    },
    tableStyle: {
      margin: '10px auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    toolbarStyle: {
      padding: 0,
      textAlign: 'center'
    },
    spacerStyle: {
      maxWidth: 300
    }
  }))

  const classes = useStyles();

  return (
    <section id="cart">
      <Typography className={classes.cartTitle} variant="h5">Cart</Typography>
      <TableContainer className={classes.tableStyle} component="div">
        <Table>
          <TableHead>
            <TableRow> 
              <TableCell align="center">Name</TableCell> 
              <TableCell align="center">Quantity</TableCell> 
              <TableCell align="center">Unit</TableCell>
              <TableCell align="center">Sum</TableCell> 
            </TableRow> 
          </TableHead> 
          <TableBody> 
            {cart.map(item => (
              <CartItem 
                cart={cart}
                item={item}
                removeFromCart={removeFromCart}
                totalCartPrice={totalCartPrice}
                setTotalCartPrice={setTotalCartPrice}
              />
            ))}
            <CartTotal totalCartPrice={totalCartPrice} />
          </TableBody>
        </Table>
      </TableContainer>
      <CartPurchase cart={cart} clearCart={clearCart} />
    </section>
  )
}

export default MainCart;