import React, { useContext } from 'react';
import UserHistory from './MainUser/UserHistory.jsx';
import {
  makeStyles,
  Grid,
  Box,
  Avatar,
  Icon,
  Typography
} from '@material-ui';

import { UserContext } from '/contexts/UserContext.jsx';

const MainUser = () => {

  const { balance, history, removeHistory } = useContext(UserContext);

  const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: '100%',
      margin: 0
    },
    avatarStyle: {
      fontSize: '3.5rem',
      width: 180,
      height: 180
    },
    balanceLabel: {
      fontWeight: 500
    }
  }))

  const classes = useStyles();

  const userDetails = {
    username: 'JeeAsistio',
    userid: 805521,
    useremail: 'jeeasistio08@gmail.com'
  }

  const { username, userid, useremail } = userDetails;

  return (
    <Grid 
      className={classes.root}
      container 
      justify="center" 
      spacing={3}
    >
      <Grid item xs={12} sm={6}>
        <Box display="flex" justifyContent="center">
          <Avatar className={classes.avatarStyle} src={<Icon>account_user</Icon>} />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box 
          display="flex" 
          flexDirection="column" 
          justifyContent="space-evenly"
          height={[180, "100%"]}
        >
          <Box>
            <Typography variant="subtitle2">Name:</Typography>
            <Typography> {username}</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2">ID:</Typography>
            <Typography> {userid}</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2">Email:</Typography>
            <Typography> {useremail}</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.balanceLabel}>Balance:</Typography> 
        <Typography variant="h5">${balance.toFixed(2)}</Typography>
      </Grid>
      <Grid item xs={12}>
        <UserHistory history={history} removeHistory={removeHistory} />
      </Grid>
    </Grid>
  )
}

export default MainUser;