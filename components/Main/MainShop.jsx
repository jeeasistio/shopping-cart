import React, { useContext, useState, useEffect } from 'react';
import ProductItem from './MainShop/ProductItem.jsx';
import Pages from './MainShop/Pages.jsx';
import {
  makeStyles,
  Button,
  TextField,
  Grid,
  CircularProgress,
  Typography,
  Select,
  MenuItem
} from '@material-ui';

import { ProductsContext } from '/contexts/ProductsContext.jsx';

const MainShop = () => {

  const {
    products,
    searchProducts,
    searchQuery,
    setSearchQuery,
    fetching,
    field,
    setField,
    direction,
    setDirection,
    currPage,
    setCurrPage,
    inputText,
    setInputText
  } = useContext(ProductsContext);

  const useStyles = makeStyles(theme => ({
    shopTitle: {
      margin: '10px auto',
      textAlign: 'center'
    },
    searchStyle: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '10px auto',
      width: '80%',
      '& > *': {
        margin: '0px 8px'
      }
    },
    itemsStyle: {
      width: '100%',
      margin: 0,
      padding: 15
    },
    sortCtn: {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      margin: 'auto',
      [theme.breakpoints.up('sm')]: {
        width: '50%'
      }
    },
    searchBtn: {
      background: 'linear-gradient(#c0f, #c0f)',
      color: '#fff'
    }
  }))

  const classes = useStyles();

  const changeQuery = (e) => {
    e.preventDefault();
    setSearchQuery(inputText);
    setCurrPage(1)
  }

  useEffect(() => {
    searchProducts();
  }, [searchQuery, field, direction, currPage])

  return (
    <section id="shop">
      <Typography className={classes.shopTitle} variant="h5">Shop</Typography>
      <form className={classes.searchStyle} onSubmit={changeQuery}>
        <TextField
          size="small" 
          fullWidth
          onChange={(e) => setInputText(e.target.value)} 
          variant="outlined" 
          label="Search Items..."
          value={inputText}
        />
        <Button className={classes.searchBtn} type="submit" variant="contained">Search</Button>
      </form>
      <div className={classes.sortCtn}>
        <Typography variant="subtitle2">Sort by:</Typography>
        <Select value={field} onChange={(e) => setField(e.target.value)}>
          <MenuItem value="relevance">Best Match</MenuItem>
          <MenuItem value="sales_rank">Most Popular</MenuItem>
          <MenuItem value="price">Price</MenuItem>
          <MenuItem value="title">Name</MenuItem>
        </Select>
        <Select disabled={field === 'relevance'} value={direction} onChange={(e) => setDirection(e.target.value)}>
          <MenuItem value="desc" selected>Descending</MenuItem> 
          <MenuItem value="asc">Ascending</MenuItem>
        </Select>
      </div>
      <Grid
        className={classes.itemsStyle}
        container 
        spacing={1}
        justify="space-evenly" 
        alignItems="center"
      >
        {fetching ? 
          <CircularProgress className={classes.shopTitle}  />
        : !products.length ?
          <Typography className={classes.shopTitle} variant="h5" color="textSecondary">No Results Found</Typography>
        : products.map(item => (
          <ProductItem item={item} />
            ))}
      </Grid>
      {!fetching && <Pages />}
    </section>
  )
}

export default MainShop;