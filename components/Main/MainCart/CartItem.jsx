import React, { useState, useEffect } from 'react';
import CartImage from './CartImage.jsx';
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

const CartItems = ({ cart, item, removeFromCart, totalCartPrice, setTotalCartPrice }) => {

  const useStyles = makeStyles(theme => ({
    nameStyle: {
      maxWidth: 90,
      padding: 5,
      [theme.breakpoints.up('xs')]: {
        maxWidth: 'none'
      }
    },
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
    },
    imgButton: {
      padding: 0
    }
  }))

  const classes = useStyles();

  const {
    brand,
    imageUrl: image,
    name,
    on_sale,
    price,
    quantity_available: available,
    sale_price,
    thumbnailImageUrl: thumbnail
  } = item;

  const [quantity, setQuantity] = useState(1);
  const [isSale, setIsSale] = useState(false);
  const [detailsIsOpen, setDetailsIsOpen] = useState(false);
  const [imageIsOpen, setImageIsOpen] = useState(false);

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
  
  const removeItem = () => {
    if (cart.length === 1) {
      setTotalCartPrice(0);
    };
    removeFromCart(item)
  }

  return (
    <React.Fragment>
      <TableRow key={name}>
        <TableCell className={classes.nameStyle}><Button onClick={() => setDetailsIsOpen(!detailsIsOpen)}>{name}</Button></TableCell>
        <TableCell align="center">
          <div className={classes.quantityCtn}>
            <Button 
              className={classes.quantityBtn}
              variant="contained"
              size="small"
              onClick={quantity < 2 ? removeItem : reduceQuantity}
            >
              <Icon className={classes.quantityIcon}>{quantity < 2 ? 'close' : 'remove'}</Icon>
            </Button>
              {quantity}
            <Button
              className={classes.quantityBtn}
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
        <TableCell align="center">${sum.toFixed(2)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className={classes.collapseCtn} colSpan="4">
          <Collapse in={detailsIsOpen} timeout="auto" unmountOnExit>
            <Box className={classes.detailsCtn} margin="1">
              <Button classes={{root: classes.imgButton}} onClick={() => setImageIsOpen(true)}>
                <img className={classes.detailsImg} src={thumbnail} />
              </Button>
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
      <CartImage
        image={image}
        imageIsOpen={imageIsOpen}
        setImageIsOpen={setImageIsOpen}
      />
    </React.Fragment>
  )
}

export default CartItems;