import React, { useState } from 'react';
import {
  makeStyles,
  Button,
  Icon,
  Dialog,
  DialogContent,
  DialogActions,
  Typography
} from '@material-ui';

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
  
  const [purchaseIsOpen, setPurchaseIsOpen] = useState(false);
  const [clearIsOpen, setClearIsOpen] = useState(false);

  const purchaseOnCart = () => {
    cart.map(item => {
      const { name } = item;
      const quantity = onCartQuantities[name];
      purchaseItem(item, quantity)
    })
    setPurchaseIsOpen(false);
    clearCart();
  }
  
  const clearCartBtn = () => {
    setClearIsOpen(false);
    clearCart();
  }

  return (
    <div className={classes.buttonsCtn}>
      <Button 
        fullWidth 
        variant="contained"
        startIcon={<Icon>close</Icon>}
        onClick={() => setClearIsOpen(true)}
      >
        Clear Cart
      </Button>
      <Button 
        onClick={() => setPurchaseIsOpen(true)}
        fullWidth 
        variant="contained"
        startIcon={<Icon>attach_money</Icon>}
      >
        Purchase
      </Button>
      <Dialog open={purchaseIsOpen} onClose={() => setPurchaseIsOpen(false)}>
        <DialogContent>
          Are you sure you want to <Typography display="inline">purchase</Typography> all items on the cart?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPurchaseIsOpen(false)}>No</Button>
          <Button onClick={purchaseOnCart}>Yes</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={clearIsOpen} onClose={() => setClearIsOpen(false)}>
        <DialogContent>
          Are you sure you want to <Typography display="inline">clear</Typography> all Items on the cart?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setClearIsOpen(false)}>No</Button>
          <Button onClick={clearCartBtn}>Yes</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default CartPurchase;