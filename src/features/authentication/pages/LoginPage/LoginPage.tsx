import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const BoxStyled = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh'
}) as typeof Box

const LoginPage:React.FC = () => {
  return (
    <BoxStyled>
       <LoginForm/>
    </BoxStyled>
  )
}

export default LoginPage