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
    },
    clearBtnStyle: {
      background: 'linear-gradient(#f55, #f55)',
      color: '#fff'
    },
    purchaseBtnStyle: {
      background: 'linear-gradient(#3c3, #3c3)',
      color: '#fff'
    },
    noBtn: {
      color: '#f55'
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
        className={classes.clearBtnStyle}
        fullWidth 
        variant="contained"
        startIcon={<Icon>close</Icon>}
        onClick={() => setClearIsOpen(true)}
      >
        Clear Cart
      </Button>
      <Button 
        className={classes.purchaseBtnStyle}
        onClick={() => setPurchaseIsOpen(true)}
        fullWidth 
        variant="contained"
        startIcon={<Icon>attach_money</Icon>}
      >
        Purchase
      </Button>
      <Dialog open={purchaseIsOpen} onClose={() => setPurchaseIsOpen(false)}>
        <DialogContent>
          Are you sure you want to <Typography variant="subtitle2" display="inline">purchase</Typography> all items on the cart?
        </DialogContent>
        <DialogActions>
          <Button className={classes.noBtn} onClick={() => setPurchaseIsOpen(false)}>No</Button>
          <Button onClick={purchaseOnCart}>Yes</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={clearIsOpen} onClose={() => setClearIsOpen(false)}>
        <DialogContent>
          Are you sure you want to <Typography variant="subtitle2" display="inline">clear</Typography> all Items on the cart?
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