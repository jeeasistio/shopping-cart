import React from 'react';
import {
  TableRow,
  TableCell,
  Typography
} from '@material-ui';

const CartTotal = ({ totalCartPrice, balance }) => {

  const balanceAfterPurchase = balance - totalCartPrice

  return (
    <React.Fragment>
      <TableRow>
        <TableCell rowSpan="3" />
        <TableCell colSpan="2">Total Price</TableCell>
        <TableCell align="center"><Typography variant="h6">${totalCartPrice.toFixed(2)}</Typography></TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan="2">Balance</TableCell>
        <TableCell align="center"><Typography>${balance.toFixed(2)}</Typography></TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan="2">Balance after purchase</TableCell>
        <TableCell align="center"><Typography>${balanceAfterPurchase.toFixed(2)}</Typography></TableCell>
      </TableRow>
    </React.Fragment>
  )
}

export default CartTotal;