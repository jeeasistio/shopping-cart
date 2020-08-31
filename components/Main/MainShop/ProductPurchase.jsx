import React, { useState } from 'react';
import {
  makeStyles,
  Button,
  Icon,
  Dialog,
  DialogContent,
  DialogActions
} from '@material-ui';

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
  
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  
  const confirmPurchase = () => {
    purchaseItem(item);
    setDialogIsOpen(false);
  }

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
        onClick={() => setDialogIsOpen(true)}
        fullWidth 
        variant="contained"
        startIcon={<Icon>attach_money</Icon>}
      >
        Purchase
      </Button>
      <Dialog open={dialogIsOpen} onClose={() => setDialogIsOpen(false)}>
        <DialogContent>
          Are you sure you want to purchase this item?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogIsOpen(false)}>No</Button>
          <Button onClick={confirmPurchase}>Yes</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ProductPurchase;