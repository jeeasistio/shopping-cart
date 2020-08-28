import React from 'react';
import { TableRow, TableCell } from '@material-ui';

const CartTotal = ({ totalCartPrice }) => {

  const balance = 500
  const balanceAfterPurchase = balance - totalCartPrice

  return (
    <React.Fragment>
      <TableRow>
        <TableCell rowSpan="3" />
        <TableCell colSpan="2">Total Price</TableCell>
        <TableCell align="center">${totalCartPrice.toFixed(2)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan="2">Balance</TableCell>
        <TableCell align="center">${balance.toFixed(2)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan="2">Balance after purchase</TableCell>
        <TableCell align="center">${balanceAfterPurchase.toFixed(2)}</TableCell>
      </TableRow>
    </React.Fragment>
  )
}

export default CartTotal;