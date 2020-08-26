import React, { useContext } from 'react';
import CartItem from './MainCart/CartItem.jsx';
import {
  makeStyles,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui';

import { CartContext } from '/contexts/CartContext.jsx';

const MainCart = () => {
  
  const { cart, removeFromCart } = useContext(CartContext);
  
  const useStyles = makeStyles(theme => ({
    cartTitle: {
      margin: '10px auto',
      textAlign: 'center'
    },
    tableStyle: {
      margin: '10px auto'
    }
  }))
  
  const classes = useStyles();
  
  return (
    <section id="cart">
      <Typography className={classes.cartTitle} variant="h5">Cart</Typography>
      <TableContainer className={classes.tableStyle} component={Paper}>
        <Table>
          <TableHead> 
            <TableRow> 
              <TableCell align="center" colSpan={3}> Details </TableCell> 
              <TableCell align="center">Price</TableCell> 
            </TableRow> 
            <TableRow> 
              <TableCell align="center">Desc</TableCell> 
              <TableCell align="center">Quantity</TableCell> 
              <TableCell align="center">Unit</TableCell>
              <TableCell align="center">Sum</TableCell> 
            </TableRow> 
          </TableHead> 
          <TableBody> 
            {cart.map(item => (
              <CartItem 
                item={item}
                removeFromCart={removeFromCart}
              />
            ) )}
          </TableBody> 
        </Table> 
      </TableContainer>
    </section>
  )
}

export default MainCart;