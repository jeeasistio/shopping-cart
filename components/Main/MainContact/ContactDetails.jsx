import React from 'react';
import { Box, Icon, IconButton, Typography } from '@material-ui';

const ContactDetails = () => {

  const details = [
    {
      icon: 'location_on',
      info: '312 P. Zamora St. Caloocan City, Philippines'
    },
    {
      icon: 'call',
      info: '555 - 555 - 5555'
    },
    {
      icon: 'email',
      info: 'jeeasistio08@gmail.com'
    }
  ]

  return (
    <React.Fragment>
      {
        details.map( ({icon, info}) => (
          <Box
            display="flex"
            flexDirection={['column', 'row']}
            justifyContent="space-between"
            alignItems="center"
            m={2}
            textAlign="center"
          >
            <Icon>{icon}</Icon>
            <Typography>{info}</Typography>
          </Box>
        ))
      }
      <hr />
      <Box
        textAlign="center"
      >
        {
          ['facebook', 'google', 'twitter', 'github'].map(brand => (
            <IconButton>
              <Icon className={`fab fa-${brand}`} />
            </IconButton>
          ))
        }
      </Box>
    </React.Fragment>
  )
}

export default ContactDetails;