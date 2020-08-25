import React, { useState, memo } from 'react';
import he from 'he';
import ProductImage from './ProductImage.jsx';
import ProductDetails from './ProductDetails.jsx';
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
      fontSize: 18,
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
    price
  } = item;

  const [imageIsOpen, setImageIsOpen] = useState(false);
  const [detailsIsOpen, setDetailsIsOpen] = useState(false);

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
            <IconButton>
              <Icon>add_shopping_cart</Icon>
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
    />
    </React.Fragment>
  )
})

export default ProductItem;