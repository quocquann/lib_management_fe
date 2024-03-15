import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'

const HomeLayout: React.FC = () => {
  return (
    <>
        <Header/>
        <Outlet/>
    </>
  )
}

export default HomeLayout