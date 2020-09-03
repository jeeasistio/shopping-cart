import React from 'react';
import {
  makeStyles,
  Box,
  Typography,
  Icon,
  IconButton
} from '@material-ui';

const PrivacyAndTerms = () => {
  
  const useStyles = makeStyles(theme => ({
    backIcon: {
      color: '#000'
    },
    subHeading: {
      fontWeight: 500
    }
  }))
  
  const classes = useStyles();

  return (
    <section id="privacy-and-terms">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={2}
      >
        <Typography variant="h6">Privacy and Terms</Typography>
        <IconButton onClick={() => history.back()} className={classes.backIcon}><Icon>arrow_back</Icon></IconButton>
      </Box>
      <Box
        p={2}
      >
        <Typography className={classes.subHeading} paragraph>Privacy and Policies</Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur a tempus lectus.Sed sed tempor sapien, ut mattis mi.Nam sed neque lorem.Duis et enim a magna vehicula laoreet sit amet a nunc.Nullam ipsum ante, aliquet ut egestas ut, facilisis fringilla velit.Nam orci libero, fringilla quis commodo sit amet, scelerisque ac justo.Cras varius, metus nec accumsan porta, justo lacus vestibulum ante, at egestas nisi lectus non sem.Sed venenatis nisi eu suscipit volutpat.Aliquam ligula risus, tristique in laoreet eu, tristique at ante.
          Nam sollicitudin posuere diam pellentesque pellentesque.Aliquam lacus sapien, euismod id vehicula eget, commodo in diam.Nam quis facilisis neque, non vulputate dolor.Pellentesque mattis scelerisque lectus, eget mollis augue eleifend in .Integer nec diam elementum, rhoncus tellus eget, imperdiet metus.Suspendisse nec ex vel quam tincidunt porttitor.Fusce eleifend dignissim magna imperdiet ultrices.Aenean dignissim arcu sed tempus euismod.
          Donec enim metus, rhoncus sit amet lacus vel, venenatis cursus erat.Mauris sodales suscipit lacus, vel sodales neque tincidunt nec.Cras at nunc finibus quam imperdiet varius.Fusce non congue turpis.Proin fringilla nisl sapien, eget lacinia metus bibendum sed.Aenean nunc ligula, fermentum vitae nisi a, auctor rutrum elit.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </Typography>
      </Box>
      <Box
        py={1}
        px={2}
      >
        <Typography className={classes.subHeading} paragraph>Terms and Condition</Typography>
        <Typography variant="body2">
          Etiam nec ante eget orci gravida tempor nec in metus.Proin interdum fermentum nibh, eu porttitor nibh suscipit sed.Maecenas augue lacus, lacinia fringilla arcu eu, imperdiet pretium ipsum.Nam mollis, ipsum ac vehicula feugiat, purus massa ultrices augue, ac faucibus felis ipsum non arcu.Suspendisse potenti.Suspendisse potenti.Phasellus auctor, tortor et aliquet dictum, nisl ligula rutrum purus, sed rhoncus nulla massa non nunc.
          Sed ut libero ligula.Duis vitae odio vitae sem dapibus ultricies.Praesent bibendum massa non mollis accumsan.In gravida elit ut fermentum mattis.Proin vel diam sit amet tellus euismod malesuada.Vestibulum consectetur nibh non dolor egestas pulvinar vel ut ante.Donec quis sapien commodo, pellentesque ex non, scelerisque felis.Nullam tempus quis orci non scelerisque.Morbi tincidunt malesuada dui.Donec accumsan posuere ante in faucibus.In in nisi orci.Morbi eget tempus lectus, vel eleifend ante.Nulla porta nulla et finibus blandit.
        </Typography>
      </Box>
      <Box 
        display="flex"
        justifyContent="center"
      >
        <Typography variant="caption">By using the app you agreed to Terms and Condition.</Typography>
      </Box>
    </section>
  )
}

export default PrivacyAndTerms;