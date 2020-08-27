import React, { useContext } from 'react';
import { Pagination } from 'react-bootstrap';
import {
  makeStyles,
  IconButton,
  Icon,
  Typography
} from '@material-ui';

import { ProductsContext } from '/contexts/ProductsContext.jsx';

const Pages = () => {

  const { currPage, setCurrPage, totalPages } = useContext(ProductsContext);

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      padding: 0,
      maxWidth: 250,
      justifyContent: 'center',
      alignItems: 'center',
      margin: '10px auto 20px auto'
    },
    pageStyle: {
      margin: 5
    }
  }))

  const classes = useStyles()

  const items = [];
  const pageNumber = totalPages >= 10 ? 10 : totalPages

  for (let number = 1; number <= pageNumber; number++) {
    const active = currPage === number;
    items.push(
      <IconButton 
        className={classes.pageStyle} 
        size="small"
        onClick={() => setCurrPage(number)}
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
  
  const prevPage = () => {
    setCurrPage(currPage - 1);
  }
  
  const nextPage = () => {
    setCurrPage(currPage + 1);
  }

  return (
    <Pagination className={classes.root}>
      <IconButton 
        disabled={currPage === 1} 
        onClick={prevPage} 
        color="primary" 
        size="small"
        className={classes.arrowIcon}
      >
        <Icon>arrow_back_ios</Icon>
      </IconButton>
      {items}
      <IconButton 
        disabled={currPage === pageNumber}
        onClick={nextPage}
        color="primary"
        size="small"
        className={classes.arrowIcon}
      >
        <Icon>arrow_forward_ios</Icon>
      </IconButton>
    </Pagination>
  )
}

export default Pages;