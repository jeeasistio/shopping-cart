import React from 'react';
import { makeStyles, Button, Icon } from '@material-ui';

const CartPurchase = ({ cart, clearCart, purchaseItem, onCartQuantities, setOnCartQuantities }) => {

  const useStyles = makeStyles(theme => ({
    buttonsCtn: {
      padding: '5px 15px',
      '& > *': {
        margin: '5px auto'
      }
    }
  }))

  const classes = useStyles();

  const purchaseOnCart = () => {
    cart.map(item => {
      const { name } = item;
      const quantity = onCartQuantities[name];
      purchaseItem(item, quantity)
    })
    clearCart();
  }

  return (
    <div className={classes.buttonsCtn}>
      <Button 
        fullWidth 
        variant="contained"
        startIcon={<Icon>close</Icon>}
        onClick={clearCart}
      >
        Clear Cart
      </Button>
      <Button 
        onClick={purchaseOnCart}
        fullWidth 
        variant="contained"
        startIcon={<Icon>attach_money</Icon>}
      >
        Purchase
      </Button>
    </div>
  )
}

export default CartPurchase;