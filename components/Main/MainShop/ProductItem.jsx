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
      height: 200
    },
    popularityStyle: {
      display: 'flex',
      alignItems: 'center'
    },
    popularityIconStyle: {
      fontSize: '1.1rem',
      color: '#f55',
    },
    cardActionsStyle: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }))

  const classes = useStyles();

  const {
    imageUrl: image,
    name,
    popularity,
    price,
    id
  } = item;
  
  useEffect(() => {
    setIsOnCart(cart.some(CI => CI.id === item.id));
  }, [cart, item])
  
  const [imageIsOpen, setImageIsOpen] = useState(false);
  const [detailsIsOpen, setDetailsIsOpen] = useState(false);
  
  const cartBtn = () => {
    !isOnCart ? addToCart(item) : removeFromCart(item);
  }

  return (
    <React.Fragment>
    <Grid item xs={12} sm={6}>
      <Zoom in={true}>
        <Card>
          <CardActionArea onClick={() => setImageIsOpen(true)}>
            <CardMedia className={classes.cardMediaStyle} image={image} />
          </CardActionArea>
          <CardContent>
            <Typography paragraph>{he.decode(name)}</Typography>
            <Typography variant="h6">${(+price).toFixed(2)}</Typography>
          </CardContent>
          <CardActions className={classes.cardActionsStyle}>
            <Button onClick={() => setDetailsIsOpen(true)} >View Details</Button>
            <Typography className={classes.popularityStyle}><Icon className={classes.popularityIconStyle}>favorite</Icon>{popularity}</Typography>
            <IconButton onClick={cartBtn}>
              <Icon>{!isOnCart ? 'add_shopping_cart' : 'remove_shopping_cart'}</Icon>
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
    />
    </React.Fragment>
  )
})

export default ProductItem;