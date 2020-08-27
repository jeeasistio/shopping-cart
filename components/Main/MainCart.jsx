import React, { useContext } from 'react';
import CartItem from './MainCart/CartItem.jsx';
import {
  makeStyles,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination
} from '@material-ui';

import { CartContext } from '/contexts/CartContext.jsx';

const MainCart = () => {
  
  const { cart, removeFromCart } = useContext(CartContext);
  
  const useStyles = makeStyles(theme => ({
    cartTitle: {
      margin: '10px auto',
      textAlign: 'center'
    },
    tableStyle: {
      margin: '10px auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    toolbarStyle: {
      padding: 0,
      textAlign: 'center'
    },
    spacerStyle: {
      maxWidth: 300
    }
  }))
  
  const classes = useStyles();
  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
  const handleChangePage = (event, newPage) => { setPage(newPage); };
  
  const handleChangeRowsPerPage = (event) => { setRowsPerPage(parseInt(event.target.value, 10)); setPage(0); };
  
  return (
    <section id="cart">
      <Typography className={classes.cartTitle} variant="h5">Cart</Typography>
      <TableContainer className={classes.tableStyle} component="div">
        <Table>
          <TableHead>
            <TableRow> 
              <TableCell align="center">Name</TableCell> 
              <TableCell align="center">Quantity</TableCell> 
              <TableCell align="center">Unit</TableCell>
              <TableCell align="center">Sum</TableCell> 
            </TableRow> 
          </TableHead> 
          <TableBody> 
            {cart
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(item => (
              <CartItem 
                item={item}
                removeFromCart={removeFromCart}
              />
            ) )}
          </TableBody> 
        </Table> 
        <TablePagination 
          classes={{toolbar: classes.toolbarStyle, spacer: classes.spacerStyle}}
          rowsPerPageOptions={[5, 10, 25]}
          component="div" 
          count={cart.length} 
          rowsPerPage={rowsPerPage} 
          page={page}
          onChangePage={handleChangePage} 
          onChangeRowsPerPage={handleChangeRowsPerPage} 
        />
      </TableContainer>
    </section>
  )
}

export default MainCart;