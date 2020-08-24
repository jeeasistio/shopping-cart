import React, { useContext, useState, useEffect } from 'react';
import ProductItem from './ProductItem.jsx';
import {
  makeStyles,
  Button,
  TextField,
  Grid,
  CircularProgress,
  Typography
} from '@material-ui';

import { ProductsContext } from '/contexts/ProductsContext.jsx';

const MainShop = () => {

  const useStyles = makeStyles(theme => ({
    searchStyle: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '20px auto',
      width: '75%',
      '& > *': {
        margin: '0px 8px'
      }
    },
    itemsStyle: {
      width: '100%',
      margin: 0,
      padding: 15
    }
  }))

  const classes = useStyles();

  const { products, searchProducts, searchQuery, setSearchQuery, fetching } = useContext(ProductsContext);

  const [inputText, setInputText] = useState('');

  const changeQuery = (e) => {
    e.preventDefault();
    setSearchQuery(inputText);
  }
  
  useEffect(() => {
    searchProducts();
  }, [searchQuery])

  return (
    <section id="shop">
      <form className={classes.searchStyle} onSubmit={changeQuery}>
        <TextField
          size="small" 
          fullWidth
          onChange={(e) => setInputText(e.target.value)} 
          variant="outlined" 
          label="Search Items..."
        />
        <Button type="submit" variant="contained">Search</Button>
      </form>
      <Grid
        className={classes.itemsStyle}
        container spacing="2"
        justify="center" 
        alignItems="center"
      >
        {
          fetching ? 
            <CircularProgress />
            :
            !products.length ?
              <Typography variant="h5" color="textSecondary">No Results Found</Typography>
              :
              products.map(item => (
                <ProductItem item={item} />
              ))
        }
      </Grid>
    </section>
  )
}

export default MainShop;