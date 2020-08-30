import React, { useContext } from 'react';
import { makeStyles, Button, Icon } from '@material-ui';

const ProductPurchase = ({ item, isOnCart, cartBtn, purchaseItem }) => {

  const useStyles = makeStyles(theme => ({
    buttonsCtn: {
      margin: 0,
      width: '100%',
      padding: '5px 15px',
      '& > *': {
        margin: '5px auto'
      }
    }
  }))

  const classes = useStyles();

  return (
    <div className={classes.buttonsCtn}>
      <Button 
        onClick={cartBtn}
        fullWidth variant="contained"
        startIcon={<Icon>{isOnCart ? 'remove_shopping_cart' : 'add_shopping_cart'}</Icon>}
      >
        {isOnCart ? 'Remove from cart' : 'Add to cart'}
      </Button>
      <Button 
        className={classes.purchaseBtn} 
        onClick={() => purchaseItem(item)}
        fullWidth 
        variant="contained"
        startIcon={<Icon>attach_money</Icon>}
      >
        Purchase
      </Button>
    </div>
  )
}

export default ProductPurchase;