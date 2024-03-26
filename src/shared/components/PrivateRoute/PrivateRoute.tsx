import React from 'react'
import { useAppSelector } from '../../../redux/hook'
import { isLoggedSelector } from '../../../features/authentication/services/states/selectors'
import { Navigate } from 'react-router-dom'

interface IPrivateRouteProps {
    children: React.ReactElement
}

const PrivateRoute:React.FC<IPrivateRouteProps> = ({children}) => {

  const isLogged = useAppSelector(isLoggedSelector)  

  return (
    isLogged ? children : (<Navigate to="/login"/>)
  )
}

export default PrivateRoute