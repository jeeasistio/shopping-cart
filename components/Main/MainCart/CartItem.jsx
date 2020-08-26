import React, { useState } from 'react';
import {
  makeStyles,
  TableRow,
  TableCell,
  IconButton,
  Icon
} from '@material-ui';

const CartItems = ({ item, removeFromCart }) => {
  
  const {name, price} = item
  
  const [quantity, setQuantity] = useState(1);
  
  const sum = quantity * +price;
  
  const addQuantity = () => {
    setQuantity(quantity + 1);
  }
  
  const reduceQuantity = () => {
    if (quantity < 2) {
      removeFromCart(item);
    }
    setQuantity(quantity - 1);
  }

  return (
    <TableRow key={name}>
      <TableCell>{name}</TableCell>
      <TableCell align="center">
        <IconButton onClick={reduceQuantity}><Icon>{quantity < 2 ? 'close' : 'remove'}</Icon></IconButton>
          {quantity}
        <IconButton onClick={addQuantity}><Icon>add</Icon></IconButton>
      </TableCell>
      <TableCell align="center">${(+price).toFixed(2)}</TableCell> 
      <TableCell align="center">${(sum).toFixed(2)}</TableCell>
    </TableRow>
  )
}

export default CartItems;