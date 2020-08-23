import React, { useState } from 'react';
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
  Backdrop,
  Zoom
} from '@material-ui';

const ProductItem = ({ item }) => {

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
    },
    backdropStyle: {
      zIndex: theme.zIndex.drawer + 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    backdropImage: {
      maxWidth: '80%',
      maxHeight: '80%'
    }
  }))

  const classes = useStyles();

  const {
    brand,
    days_since_published: days,
    description,
    id,
    imageUrl: image,
    keywords,
    name,
    popularity,
    on_sale: sale,
    price,
    quantity_available: available,
    sale_price: salePrice
  } = item;

  const [backdropIsOpen, setBackDropIsOpen] = useState(false);

  return (
    <Grid item xs={12} sm={6}>
      <Zoom in={true}>
        <Card>
          <CardActionArea onClick={() => setBackDropIsOpen(true)}>
            <CardMedia className={classes.cardMediaStyle} image={image} />
          </CardActionArea>
          <CardContent>
            <Typography paragraph>{name}</Typography>
            <Typography>${(+price).toFixed(2)}</Typography>
          </CardContent>
          <CardActions className={classes.cardActionsStyle}>
            <Button>View Details</Button>
            <Typography className={classes.popularityStyle}><Icon className={classes.popularityIconStyle}>favorite</Icon>{popularity}</Typography>
            <IconButton>
              <Icon>add_shopping_cart</Icon>
            </IconButton>
          </CardActions>
        </Card>
      </Zoom>
      <Backdrop
        className={classes.backdropStyle} 
        open={backdropIsOpen} 
        onClose={() => setBackDropIsOpen(false)}
        onClick={() => setBackDropIsOpen(false)}
      >
        <img className={classes.backdropImage} src={image} />
      </Backdrop>
    </Grid>
  )
}

export default ProductItem;