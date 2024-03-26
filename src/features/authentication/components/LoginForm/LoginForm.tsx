import { Box, Button, IconButton, InputAdornment, Paper, TextField, Typography, Divider } from '@mui/material'
import { Visibility, VisibilityOff} from '@mui/icons-material'
import {styled} from '@mui/material/styles'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../../redux/hook'
import { loginThunk } from '../../services/states/action'

const DivideBox = styled(Box)({
  marginBottom: 30
}) as typeof Box

const TextFieldStyled = styled(TextField)({
  width: 300
}) as typeof TextField

const ButtonStyled = styled(Button)({
  width: 300
}) as typeof Button

const LoginForm:React.FC = () => {

  const [isShowPassword, setIsShowPassword] = React.useState(false)
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleChangeVisiblePassword = () => {
    setIsShowPassword((prev) => !prev)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleLoginButtonClick = async () => {
    try {
      await dispatch(loginThunk({email: email.trim(), password: password.trim()})).unwrap()
      navigate(-1)
    } catch(e) {
      console.error(e)
    }
  }

  return (
    <Box square elevation={3} component={Paper} padding={3}>
      <Typography align='center' variant='h4' fontWeight={500} marginBottom={3}>
        Đăng nhập
      </Typography>
      <DivideBox>
        <TextFieldStyled
          size='small'
          label='Email'
          value={email}
          onChange={handleEmailChange}
          required
        />
      </DivideBox>

      <DivideBox>
        <TextFieldStyled
          size='small'
          label='Mật khẩu'
          type={isShowPassword ? 'text' : 'password'}
          value={password}
          onChange={handlePasswordChange}
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                  <IconButton onClick={handleChangeVisiblePassword}>
                    {isShowPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
              </InputAdornment>
            )
          }}
        />
      </DivideBox>

      <DivideBox>
        <ButtonStyled onClick={handleLoginButtonClick} variant='contained'>
          Đăng nhập
        </ButtonStyled>
      </DivideBox>

      <Divider/>

      <Link to="/home">
        <Typography align='center'>
          Tạo tài khoản mới
        </Typography>
      </Link>
    </Box>
  )
}

export default LoginForm