import React from 'react';
import ProductKeywords from './ProductKeywords.jsx';
import {
  makeStyles,
  Dialog,
  Typography,
  Button,
  Icon,
  Divider,
  Paper
} from '@material-ui';

const ProductDetails = ({ item, detailsIsOpen, setDetailsIsOpen }) => {
  
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      '& > *': {
        margin: '10px'
      }
    },
    backCtn: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
    },
    itemImageCtn: {
      background: '#f9f9f9',
      width: '100%',
      height: 300,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.up('sm')]: {
        width: '40%',
        height: 400
      }
    },
    itemImage: {
      maxWidth: '100%',
      maxHeight: '100%'
    },
    detailsRoot: {
      display: 'flex',
      flexDirection: 'column',
      '& > *': {
        margin: 5
      },
      [theme.breakpoints.up('sm')]: {
        maxWidth: '50%'
      }
    },
    subDetails: {
      display: 'flex',
      alignItems: 'center',
      '& > *': {
        margin: 'auto 5px'
      }
    },
    faveStyle: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      '& > span': {
        fontSize: 18
      }
    },
    priceCtn: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    }
  }))
  
  const classes = useStyles();

  const {
    imageUrl: image,
    name,
    popularity,
    price,
    brand,
    days_since_published: days,
    description,
    id,
    keywords,
    on_sale: sale,
    quantity_available: available,
    sale_price: salePrice
  } = item;

  return (
    <Dialog classes={{paper : classes.root}} open={detailsIsOpen} onClose={() => setDetailsIsOpen} fullScreen>
      <div className={classes.backCtn}>
        <Typography variant="h5">Your Balance: $0.00</Typography>
        <Button onClick={() => setDetailsIsOpen(false)}><Icon>arrow_backward</Icon></Button>
      </div>
      <Paper className={classes.itemImageCtn} elevation="2">
        <img className={classes.itemImage} src={image} />
      </Paper>
      <div className={classes.detailsRoot}>
        <Typography variant="h6">{name}</Typography>
        <Typography className={classes.subDetails} variant="subtitle2">Brand:
          <Typography variant="subtitle1">{brand}</Typography>
        </Typography>
        <Typography className={classes.subDetails} variant="subtitle2">Popularity:
          <Typography className={classes.faveStyle} variant="subtitle1"><Icon color="error">favorite</Icon>{popularity}</Typography>
        </Typography>
        <Typography className={classes.subDetails} variant="subtitle2">Keywords:
          {keywords && <ProductKeywords keywords={keywords} />}
        </Typography>
        <div className={classes.priceCtn}>
          <Typography variant="h6">${(+price).toFixed(2)}</Typography>
          <Divider flexItem orientation="vertical" />
          <Typography variant="body2">{available} available</Typography>
          <Divider flexItem orientation="vertical" />
          <Typography variant="body2">{days} days ago</Typography>
        </div>
        <Typography variant="body2">{description}</Typography>
      </div>
      <Button fullWidth variant="contained"><Icon>add_shopping_cart</Icon> Add to Cart</Button>
    </Dialog>
  )
}

export default ProductDetails;