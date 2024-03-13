import React from 'react'
import Header from '../../../features/library/components/Header/Header'
import { Outlet } from 'react-router-dom'

const HomeLayout: React.FC = () => {
  return (
    <>
        <Header/>
        <Outlet/>
    </>
  )
}

export default HomeLayout