import { Box, Button, IconButton, InputAdornment, Paper, TextField, Typography, Divider } from '@mui/material'
import { Visibility, VisibilityOff} from '@mui/icons-material'
import {styled} from '@mui/material/styles'
import React from 'react'
import { Link } from 'react-router-dom'

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

  const handleChangeVisiblePassword = () => {
    setIsShowPassword((prev) => !prev)
  }

  return (
    <Box square component={Paper} padding={3}>
      <Typography align='center' variant='h4' fontWeight={500} marginBottom={3}>
        Login
      </Typography>
      <DivideBox>
        <TextFieldStyled
          size='small'
          label='Username'
        />
      </DivideBox>

      <DivideBox>
        <TextFieldStyled
          size='small'
          label='Password'
          type={isShowPassword ? 'text' : 'password'}
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
        <ButtonStyled variant='contained'>
          Login
        </ButtonStyled>
      </DivideBox>

      <Divider/>

      <Link to="/home">
        <Typography align='center'>
          Create account
        </Typography>
      </Link>
    </Box>
  )
}

export default LoginForm