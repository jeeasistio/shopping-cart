import React, { useContext } from 'react';
import { Pagination } from 'react-bootstrap';
import { makeStyles, IconButton, Typography } from '@material-ui';

import { ProductsContext } from '/contexts/ProductsContext.jsx';

const Pages = () => {
  
  const { currPage, setCurrPage } = useContext(ProductsContext);
  
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      padding: 0,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: 250
    },
    pageStyle: {
      margin: 5
    }
  }))
  
  const classes = useStyles()
  
  const items = [];
  for (let number = 1; number <= 10; number++) {
    const active = currPage === number;
    items.push(
      <IconButton 
        className={classes.pageStyle} 
        onClick={() => setCurrPage(number)}
        size="small"
      >
        <Typography 
          variant={active ? "h5" : "body1"}
          color={active ? "primary" : "textSecondary"}
        >
          {number}
        </Typography>
      </IconButton>
    );
  }

  return (
    <Pagination className={classes.root}>{items}</Pagination>
  )
}

export default Pages;