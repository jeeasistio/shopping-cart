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

const ProductPurchase = ({ item, isOnCart, cartBtn, purchaseItem }) => {

  const useStyles = makeStyles(theme => ({
    buttonsCtn: {
      margin: 0,
      width: '100%',
      padding: '5px 15px',
      '& > *': {
        margin: '5px auto'
      }
    },
    shoppingCartBtn: {
      background: `linear-gradient(${!isOnCart ? '#f93, #f93' : '#f55, #f55'})`,
      color: '#fff'
    },
    purchaseBtn: {
      background: 'linear-gradient(#3c3, #3c3)',
      color: '#fff'
    },
    purchaseContent: {
      color: '#36f'
    },
    noBtn: {
      color: '#f55'
    },
    yesBtn: {
      color: '#36f'
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
        className={classes.shoppingCartBtn}
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
          Are you sure you want to <Typography variant="subtitle2" display="inline">purchase</Typography> this item?
        </DialogContent>
        <DialogActions>
          <Button className={classes.noBtn} onClick={() => setDialogIsOpen(false)}>No</Button>
          <Button onClick={confirmPurchase}>Yes</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ProductPurchase;