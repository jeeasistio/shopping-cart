import React, { useContext } from 'react';
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
  
  const { cart } = useContext(CartContext);
  
  const useStyles = makeStyles(theme => ({
    cartTitle: {
      margin: '10px auto',
      textAlign: 'center'
    },
    tableStyle: {
      margin: 10
    }
  }))
  
  const classes = useStyles();
  
  const createRow = (desc, qty, unit) => {
    const price = qty * unit;
    return { desc, qty, unit, price };
  }
  
  const rows = cart.map( ({name, price}) => createRow(name, 1, +price));
  
  return (
    <section id="cart">
      <Typography className={classes.cartTitle} variant="h5">Cart</Typography>
      <TableContainer className={classes.tableStyle} component={Paper}>
        <Table>
          <TableHead> 
            <TableRow> 
              <TableCell align="center" colSpan={3}> Details </TableCell> 
              <TableCell align="right">Price</TableCell> 
            </TableRow> 
            <TableRow> 
              <TableCell>Desc</TableCell> 
              <TableCell align="right">Quantity</TableCell> 
              <TableCell align="right">Unit</TableCell>
              <TableCell align="right">Sum</TableCell> 
            </TableRow> 
          </TableHead> 
          <TableBody> 
            {rows.map( ({desc, qty, unit, price}) => (
              <TableRow key={desc}>
                <TableCell>{desc}</TableCell>
                <TableCell align="right">{qty}</TableCell> 
                <TableCell align="right">${(unit).toFixed(2)}</TableCell>
                <TableCell align="right">${(price).toFixed(2)}</TableCell>
              </TableRow>
            ))} 
          </TableBody> 
        </Table> 
      </TableContainer>
    </section>
  )
}

export default MainCart;