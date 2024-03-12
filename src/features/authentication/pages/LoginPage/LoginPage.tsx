import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import { Box } from '@mui/material'

const LoginPage:React.FC = () => {
  return (
    <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    }}>
       <LoginForm/>
    </Box>
  )
}

export default LoginPage