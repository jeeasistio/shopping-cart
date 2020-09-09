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
      margin: 4
    },
    arrowIcon: {
      fontSize: '1rem'
    }
  }))

  const classes = useStyles()

  return (
    <Pagination className={classes.root}>
      <IconButton 
        disabled={currPage === 1} 
        onClick={() => setCurrPage(currPage - 1)}
        color="primary" 
        size="small"
      >
        <Icon className={classes.arrowIcon}>arrow_back_ios</Icon>
      </IconButton>
      
      {currPage > 2 &&
          <IconButton className={classes.pageStyle} onClick={() => setCurrPage(1)} size="small">
            <Typography variant="body1" color="textSecondary">
              1
            </Typography>
          </IconButton>
      }
      
      {currPage > 4 &&
        <IconButton className={classes.pageStyle} size="small" disabled>
          <Typography variant="body1" color="textSecondary">
            ...
          </Typography>
        </IconButton>
      }
      
      {currPage > 3 && 
          <IconButton className={classes.pageStyle} onClick={() => setCurrPage(currPage - 2)} size="small">
            <Typography variant="body1" color="textSecondary">
              {currPage - 2}
            </Typography>
          </IconButton>
      }
      
      {currPage > 1 && 
        <IconButton className={classes.pageStyle} onClick={() => setCurrPage(currPage - 1)} size="small">
          <Typography variant="body1" color="textSecondary">
            {currPage - 1}
          </Typography>
        </IconButton>
      }
      
      <IconButton className={classes.pageStyle} size="small">
        <Typography variant="h6" color="primary">
          {currPage}
        </Typography>
      </IconButton>
      
      {currPage < (totalPages - 1) &&
          <IconButton className={classes.pageStyle} onClick={() => setCurrPage(currPage + 1)} size="small">
            <Typography variant="body1" color="textSecondary">
              {currPage + 1}
            </Typography>
          </IconButton>
      }
      
      {currPage < (totalPages - 2) && 
        <IconButton className={classes.pageStyle} onClick={() => setCurrPage(currPage + 2)} size="small">
          <Typography variant="body1" color="textSecondary">
            {currPage + 2}
          </Typography>
        </IconButton>
      }
      
      {currPage < (totalPages - 3) && 
        <IconButton className={classes.pageStyle} size="small" disabled>
          <Typography variant="body1" color="textSecondary">
            ...
          </Typography>
        </IconButton>
      } 
      
      {currPage < totalPages && 
        <IconButton className={classes.pageStyle} onClick={() => setCurrPage(totalPages)} size="small">
          <Typography variant="body1" color="textSecondary">
            {totalPages}
          </Typography>
        </IconButton>
      }
      
      <IconButton
        disabled={currPage === totalPages}
        onClick={() => setCurrPage(currPage + 1)}
        color="primary"
        size="small"
      >
        <Icon className={classes.arrowIcon}>arrow_forward_ios</Icon>
      </IconButton>
    </Pagination>
  )
}

export default Pages;