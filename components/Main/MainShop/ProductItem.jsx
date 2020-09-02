import React, { useState, useContext, useEffect, memo } from 'react';
import he from 'he';
import ProductImage from './ProductImage.jsx';
import ProductDetails from './ProductDetails.jsx';
import { CartContext } from '/contexts/CartContext.jsx';
import {
  makeStyles,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  IconButton,
  Icon,
  Zoom
} from '@material-ui';

const ProductItem = memo(({ item }) => {

  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const [isOnCart, setIsOnCart] = useState(false);

  const useStyles = makeStyles(theme => ({
    cardMediaStyle: {
      width: '100%',
      height: 150
    },
    cardContentStyle: {
      padding: '5px 10px'
    },
    priceCtn: {
      display: 'flex',
      alignItems: 'center',
      fontWeight: 500
    },
    origPrice: {
      textDecoration: 'line-through',
      marginRight: 5
    },
    cardActionsStyle: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: 5
    },
    viewDetailsBtn: {
      fontSize: '0.8rem'
    },
    cartBtnStyle: {
      fontSize: '1.3rem',
      color: !isOnCart ? '#f93' : '#f55'
    }
  }))

  const classes = useStyles();

  const [imageIsOpen, setImageIsOpen] = useState(false);
  const [detailsIsOpen, setDetailsIsOpen] = useState(false);
  const [isSale, setIsSale] = useState(false);

  const {
    imageUrl: image,
    name,
    price,
    sale_price,
    on_sale,
    id
  } = item;

  const cartBtn = () => {
    !isOnCart ? addToCart(item) : removeFromCart(item);
  }

  useEffect(() => {
    setIsOnCart(cart.some(CI => CI.id === item.id));
    setIsSale(on_sale === 'Yes');
  }, [cart, item])

  return (
    <React.Fragment>
    <Grid item xs={6} sm={4} md={3}>
      <Zoom in={true}>
        <Card>
          <CardActionArea onClick={() => setImageIsOpen(true)}>
            <CardMedia className={classes.cardMediaStyle} image={image} />
          </CardActionArea>
          <CardContent className={classes.cardContentStyle}>
            <Typography noWrap>{he.decode(name)}</Typography>
            <Typography className={classes.priceCtn}>
              {isSale && <Typography color="textSecondary" variant="body2" className={classes.origPrice}>${(+price).toFixed(2)}</Typography>}
              {isSale ? `$${(+sale_price).toFixed(2)}` : `$${(+price).toFixed(2)}`}
            </Typography>
          </CardContent>
          <CardActions className={classes.cardActionsStyle}>
            <Button className={classes.viewDetailsBtn} onClick={() => setDetailsIsOpen(true)}>Details</Button>
            <IconButton onClick={cartBtn}>
              <Icon className={classes.cartBtnStyle}>{!isOnCart ? 'add_shopping_cart' : 'remove_shopping_cart'}</Icon>
            </IconButton>
          </CardActions>
        </Card>
      </Zoom>
    </Grid>
    <ProductImage 
      image={image} 
      imageIsOpen={imageIsOpen} 
      setImageIsOpen={setImageIsOpen} 
    />
    <ProductDetails
      item={item}
      detailsIsOpen={detailsIsOpen}
      setDetailsIsOpen={setDetailsIsOpen}
      cartBtn={cartBtn}
      isOnCart={isOnCart}
      isSale={isSale}
    />
    </React.Fragment>
  )
})

export default ProductItem;