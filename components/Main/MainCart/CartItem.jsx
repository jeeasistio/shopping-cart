import React, { useState, useEffect, memo } from 'react';
import {
  makeStyles,
  TableRow,
  TableCell,
  Button,
  Icon
} from '@material-ui';

const CartItems = memo(({ item, removeFromCart }) => {

  const useStyles = makeStyles(theme => ({
    quantityCtn: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column-reverse',
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row'
      }
    },
    quantityBtn: {
      minWidth: 20,
      maxWidth: 20,
      minHeight: 20,
      maxHeight: 20,
      margin: 5
    },
    quantityIcon: {
      fontSize: '0.8rem'
    }
  }))

  const classes = useStyles();

  const { name, price, on_sale, sale_price } = item;

  const [quantity, setQuantity] = useState(1);
  const [isSale, setIsSale] = useState(false);

  const unitPrice = isSale ? +sale_price : +price;
  const sum = quantity * unitPrice;

  const addQuantity = () => {
    setQuantity(quantity + 1);
  }

  const reduceQuantity = () => {
    setQuantity(quantity - 1);
  }

  useEffect(() => {
    setIsSale(
      on_sale === 'Yes'
    );
  }, [item]);

  return (
    <TableRow key={name}>
      <TableCell>{name}</TableCell>
      <TableCell align="center">
        <div className={classes.quantityCtn}>
          <Button 
            className={classes.quantityBtn}
            variant="contained"
            size="small"
            onClick={quantity < 2 ? () => removeFromCart(item) : reduceQuantity}
          >
            <Icon className={classes.quantityIcon}>{quantity < 2 ? 'close' : 'remove'}</Icon>
          </Button>
            {quantity}
          <Button
            className={classes.quantityBtn}
            variant="contained"
            size="small"
            onClick={addQuantity}
          >
            <Icon className={classes.quantityIcon}>add</Icon>
          </Button>
        </div>
      </TableCell>
      <TableCell align="center">${(unitPrice).toFixed(2)}</TableCell> 
      <TableCell align="center">${(sum).toFixed(2)}</TableCell>
    </TableRow>
  )
})

export default CartItems;