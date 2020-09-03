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
  TableRow,
  Box
} from '@material-ui';

import { CartContext } from '/contexts/CartContext.jsx';
import { UserContext } from '/contexts/UserContext.jsx';

const MainCart = () => {

  const { cart, removeFromCart, totalCartPrice, setTotalCartPrice, clearCart, onCartQuantities, setOnCartQuantities } = useContext(CartContext);
  const { balance, purchaseItem } = useContext(UserContext);

  const useStyles = makeStyles(theme => ({
    cartTitle: {
      margin: '10px auto',
      textAlign: 'center'
    },
    tableStyle: {
      overflowX: 'auto',
      margin: '10px auto'
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
                onCartQuantities={onCartQuantities} 
                setOnCartQuantities={setOnCartQuantities}
              />
            ))}
            {!cart.length &&
              <TableRow>
                <TableCell colSpan="4">
                  <Box
                    display="flex"
                    justifyContent="center"
                  >
                    <Typography variant="h5" color="textSecondary">Empty</Typography>
                  </Box>
                </TableCell>
              </TableRow>
            }
            <CartTotal totalCartPrice={totalCartPrice} balance={balance} />
          </TableBody>
        </Table>
      </TableContainer>
      <CartPurchase cart={cart} clearCart={clearCart} purchaseItem={purchaseItem} onCartQuantities={onCartQuantities} setOnCartQuantities={setOnCartQuantities} />
    </section>
  )
}

export default MainCart;