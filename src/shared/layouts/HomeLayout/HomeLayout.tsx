import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';
import {styled} from '@mui/material';

const ContentBox = styled(Box)({
  minHeight: '100vh'
}) as typeof Box


const HomeLayout: React.FC = () => {
  return (
    <>
      <Header/>
      <ContentBox marginBottom={8} minHeight={'100vh'}>
        <Outlet/>
      </ContentBox>
      <Divider variant="middle"/>
      <Footer/>
    </>
  )
}

export default HomeLayout