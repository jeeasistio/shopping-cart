import React from 'react';
import { makeStyles, Button, Icon } from '@material-ui';

const CartPurchase = ({ cart, clearCart }) => {
  
  const useStyles = makeStyles(theme => ({
    buttonsCtn: {
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
        fullWidth 
        variant="contained"
        startIcon={<Icon>close</Icon>}
        onClick={clearCart}
      >
        Clear Cart
      </Button>
      <Button 
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