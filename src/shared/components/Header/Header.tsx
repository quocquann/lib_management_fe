import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Badge, IconButton } from '@mui/material';
import { ShoppingBag } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../redux/hook';
import { booksInBasketSelector } from '../../../features/library/services/states/selector';


const Header: React.FC = () => {

  const booksInBasket = useAppSelector(booksInBasketSelector)

  return (
    <AppBar>
      <Container>
      <Toolbar>
        <Typography variant='h6' fontWeight='bold'>
          LOGO
        </Typography>
        <Link to={"borrow"}>
          <IconButton>
            <Badge badgeContent={booksInBasket.length} color='secondary'>
              <ShoppingBag/>
            </Badge>
          </IconButton>
        </Link>
      </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;