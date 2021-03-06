import React, { useState, useEffect } from 'react';
import {
  makeStyles,
  TableRow,
  TableCell,
  Button,
  Icon,
  Collapse,
  Box,
  Typography
} from '@material-ui';

const CartItems = ({ cart, item, removeFromCart, totalCartPrice, setTotalCartPrice, onCartQuantities, setOnCartQuantities }) => {
  
  const [quantity, setQuantity] = useState(1);
  
  const {
    brand,
    name,
    on_sale,
    price,
    quantity_available: available,
    sale_price,
    thumbnailImageUrl: thumbnail
  } = item;

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
    reduceQuantityBtn: {
      minWidth: 20,
      maxWidth: 20,
      minHeight: 20,
      maxHeight: 20,
      margin: 5,
      background: `linear-gradient(${quantity < 2 ? '#f55, #f55' : '#f93, #f93'})`,
      color: '#fff'
    },
    addQuantityBtn: {
      minWidth: 20,
      maxWidth: 20,
      minHeight: 20,
      maxHeight: 20,
      margin: 5,
      background: `linear-gradient(${quantity < available ? '#3c3, #3c3' : null})`,
      color: '#fff'
    },
    quantityIcon: {
      fontSize: '0.8rem'
    },
    collapseCtn: {
      paddingTop: 0,
      paddingBottom: 0,
      background: '#f4f4f4'
    },
    detailsCtn: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10
    },
    detailsImg: {
      maxWidth: 100,
      maxHeight: 100,
      borderRadius: 5
    }
  }))

  const classes = useStyles();
  
  const [isSale, setIsSale] = useState(false);
  const [detailsIsOpen, setDetailsIsOpen] = useState(false);

  const unitPrice = isSale ? +sale_price : +price;
  const sum = quantity * unitPrice;

  const addQuantity = () => {
    setQuantity(quantity + 1);
    setTotalCartPrice(totalCartPrice + unitPrice);
  }

  const reduceQuantity = () => {
    setQuantity(quantity - 1);
    setTotalCartPrice(totalCartPrice - unitPrice);
  }

  useEffect(() => {
    setIsSale(
      on_sale === 'Yes'
    );
    setQuantity(1);
    setTotalCartPrice(
      cart
      .map(({ on_sale, sale_price, price }) => on_sale === 'Yes' ? +sale_price : +price)
      .reduce((a, b) => a + b, 0)
    );
  }, [cart])

  useEffect(() => {
    setOnCartQuantities({
      ...onCartQuantities,
      [name]: quantity
    })
  }, [quantity, cart])

  const removeItem = () => {
    if (cart.length === 1) {
      setTotalCartPrice(0);
    };
    removeFromCart(item)
  }

  return (
    <React.Fragment>
      <TableRow>
        <TableCell><Button onClick={() => setDetailsIsOpen(!detailsIsOpen)}>{name}</Button></TableCell>
        <TableCell align="center">
          <div className={classes.quantityCtn}>
            <Button 
              className={classes.reduceQuantityBtn}
              variant="contained"
              size="small"
              onClick={quantity < 2 ? removeItem : reduceQuantity}
            >
              <Icon className={classes.quantityIcon}>{quantity < 2 ? 'close' : 'remove'}</Icon>
            </Button>
              {quantity}
            <Button
              className={classes.addQuantityBtn}
              disabled={quantity >= available}
              variant="contained"
              size="small"
              onClick={addQuantity}
            >
              <Icon className={classes.quantityIcon}>add</Icon>
            </Button>
          </div>
        </TableCell>
        <TableCell align="center">${unitPrice.toFixed(2)}</TableCell> 
        <TableCell align="center"><Typography variant="subtitle2">${sum.toFixed(2)}</Typography></TableCell>
      </TableRow>
      <TableRow>
        <TableCell className={classes.collapseCtn} colSpan={4}>
          <Collapse in={detailsIsOpen} timeout="auto" unmountOnExit>
            <Box className={classes.detailsCtn} m={1}>
              <img className={classes.detailsImg} src={thumbnail} />
              <div>
                <Typography variant="subtitle2">Brand:</Typography>
                <br />
                <Typography>{brand}</Typography>
              </div>
              <div>
                <Typography variant="subtitle2">Available:</Typography>
                <br />
                <Typography>{available}</Typography>
              </div>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

export default CartItems;