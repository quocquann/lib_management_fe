import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const Header = () => {

  return (
    <AppBar>
      <Container>
      <Toolbar>
        <Typography variant='h6' fontWeight='bold'>
          LOGO
        </Typography>
      </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;