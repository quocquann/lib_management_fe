import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link'
import { Badge, Box, IconButton, ListItemIcon, Menu, MenuItem} from '@mui/material';
import { Logout, ShoppingBag } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { booksInBasketSelector } from '../../../features/library/services/states/selector';
import {Link as RouterLink} from 'react-router-dom'
import {styled} from '@mui/material/styles'
import {Person, LocalLibrary} from "@mui/icons-material"
import { currentUserSelector, isLoggedSelector } from '../../../features/authentication/services/states/selectors';
import { getCurrentUserThunk } from '../../../features/authentication/services/states/action';
import { authenticationSlice } from '../../../features/authentication/services/states/authenticationSlice';


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

  const dispatch = useAppDispatch()

  const booksInBasket = useAppSelector(booksInBasketSelector)
  const currentUser = useAppSelector(currentUserSelector)
  const isLogged = useAppSelector(isLoggedSelector)

  React.useEffect(() => {
    dispatch(getCurrentUserThunk())
  }, [dispatch])

  const handleAvatarClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  const handleLogoutButtonClick = () => {
    dispatch(authenticationSlice.actions.logout())
  }

  return (
    <AppBar>
      <Container>
        <Toolbar>
          <LinkStyled component={RouterLink} to={"/home"}>
            <LocalLibrary fontSize='large'/>
          </LinkStyled>
          <LinkStyled component={RouterLink} to={"/all-book"}>
            <Typography>
              Tất cả sách
            </Typography>
          </LinkStyled>
          <LinkStyled component={RouterLink} to={"/history"}>
            <Typography>
              Lịch sử
            </Typography>
          </LinkStyled>
          <LinkStyled component={RouterLink} to={"/request"}>
            <Typography>
              Yêu cầu 
            </Typography>
          </LinkStyled>

          <BoxStyled/>

          <LinkStyled component={RouterLink} to={"/borrow"}>
            <IconButtonStyled>
              <Badge badgeContent={booksInBasket.length} color='error'>
                <ShoppingBag/>
              </Badge>
            </IconButtonStyled>
          </LinkStyled>
          { isLogged ? (
            <>
              <Menu 
                open={open}
                anchorEl={anchorEl}
                onClose={handleCloseMenu}
              >
                <MenuItem onClick={handleLogoutButtonClick}>
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
                {currentUser.username || currentUser.email}
              </Typography>
            </>
          ) : (
            <LinkStyled component={RouterLink} to={"/login"}>Đăng nhập</LinkStyled>
          )}
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;