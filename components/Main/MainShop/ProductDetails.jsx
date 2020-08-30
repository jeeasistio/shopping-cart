import React, { useContext } from 'react';
import he from 'he';
import ProductKeywords from './ProductKeywords.jsx';
import ProductPurchase from './ProductPurchase.jsx';
import {
  makeStyles,
  Dialog,
  Typography,
  Button,
  Icon,
  IconButton,
  Divider,
  Paper,
  AppBar,
  Toolbar
} from '@material-ui';

import { UserContext } from '/contexts/UserContext.jsx';

const ProductDetails = ({ item, detailsIsOpen, setDetailsIsOpen, cartBtn, isOnCart, isSale }) => {

  const { balance, purchaseItem } = useContext(UserContext);

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
    navStyle: {
      margin: 0
    },
    backCtn: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 0
    },
    backBtn: {
      color: '#fff',
      display: 'flex',
      justifyContent: 'center'
    },
    itemImageCtn: {
      margin: 0,
      width: '100%',
      height: 300,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottom: '1px solid #ccc',
      background: '#f1f1f1',
      [theme.breakpoints.up('sm')]: {
        width: '40%',
        height: 400,
        border: 'none',
        background: '#fff',
        marginTop: 10
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
        fontSize: '1.1rem'
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
    sale_price,
    quantity_available: available
  } = item;

  return (
    <Dialog classes={{paper : classes.root}} open={detailsIsOpen} onClose={() => setDetailsIsOpen} fullScreen>
      <AppBar position="static" className={classes.navStyle}>
        <Toolbar className={classes.backCtn}>
          <Typography>Your Balance: ${balance.toFixed(2)}</Typography>
          <IconButton className={classes.backBtn} onClick={() => setDetailsIsOpen(false)}><Icon>arrow_backward</Icon></IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.itemImageCtn} >
        <img className={classes.itemImage} src={image} />
      </div>
      <div className={classes.detailsRoot}>
        <Typography variant="h6">{he.decode(name)}</Typography>
        <Typography className={classes.subDetails} variant="subtitle2">Brand:
          <Typography variant="subtitle1">{brand && he.decode(brand)}</Typography>
        </Typography>
        <Typography className={classes.subDetails} variant="subtitle2">Popularity:
          <Typography className={classes.faveStyle} variant="subtitle1"><Icon color="error">favorite</Icon>{popularity}</Typography>
        </Typography>
        <Typography className={classes.subDetails} variant="subtitle2">Keywords:
          {keywords && <ProductKeywords keywords={keywords} />}
        </Typography>
        <div className={classes.priceCtn}>
          <Typography variant="h6">{isSale ? `$${(+sale_price).toFixed(2)}` : `$${(+price).toFixed(2)}`}</Typography>
          <Divider flexItem orientation="vertical" />
          <Typography variant="body2">{available} available</Typography>
          <Divider flexItem orientation="vertical" />
          <Typography variant="body2">{days} days ago</Typography>
        </div>
        <Typography variant="body2">{description && he.decode(description)}</Typography>
      </div>
      <ProductPurchase 
        item={item}
        cartBtn={cartBtn} 
        isOnCart={isOnCart} 
        purchaseItem={purchaseItem} 
      />
    </Dialog>
  )
}

export default ProductDetails;