import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link'
import { Badge, Box, IconButton, ListItemIcon, Menu, MenuItem} from '@mui/material';
import { Logout, ShoppingBag } from '@mui/icons-material';
import { useAppSelector } from '../../../redux/hook';
import { booksInBasketSelector } from '../../../features/library/services/states/selector';
import {Link as RouterLink} from 'react-router-dom'
import {styled} from '@mui/material/styles'
import {Person, LocalLibrary} from "@mui/icons-material"


const LinkStyled = styled(Link)({
  color: '#fff',
  marginLeft: 20
}) as typeof Link

const BoxStyled = styled(Box)({
  flex: 1
}) as typeof Box

const IconButtonStyled = styled(IconButton)({
  color: '#fff'
}) as typeof IconButton


const Header: React.FC = () => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const booksInBasket = useAppSelector(booksInBasketSelector)

  const handleAvatarClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar>
      <Container>
        <Toolbar>
          <LinkStyled component={RouterLink} to={"/home"}>
            <LocalLibrary fontSize='large'/>
          </LinkStyled>
          <LinkStyled component={RouterLink} to={"search"}>
            <Typography>
              Tất cả sách
            </Typography>
          </LinkStyled>
          <LinkStyled component={RouterLink} to={"history"}>
            <Typography>
              Lịch sử
            </Typography>
          </LinkStyled>

          <BoxStyled/>

          <LinkStyled component={RouterLink} to={"borrow"}>
            <IconButtonStyled>
              <Badge badgeContent={booksInBasket.length} color='error'>
                <ShoppingBag/>
              </Badge>
            </IconButtonStyled>
          </LinkStyled>

          <Menu 
            open={open}
            anchorEl={anchorEl}
            onClose={handleCloseMenu}
          >
            <MenuItem onClick={handleCloseMenu}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Đăng xuất
            </MenuItem>
          </Menu>
          <IconButtonStyled onClick={handleAvatarClick}>
            <Person/>
          </IconButtonStyled>
          <Typography marginLeft={1}>
            Quoc Quan
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;