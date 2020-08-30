import React from 'react';
import { makeStyles, Backdrop } from '@material-ui';

const ProductImage = ({ image, imageIsOpen, setImageIsOpen }) => {

  const useStyles = makeStyles(theme => ({
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

  return (
    <Backdrop
      className={classes.backdropStyle} 
      open={imageIsOpen} 
      onClose={() => setImageIsOpen(false)}
      onClick={() => setImageIsOpen(false)}
    >
      <img className={classes.backdropImage} src={image} />
    </Backdrop>
  )
}

export default ProductImage;