import {Typography, Box, Paper, Rating, IconButton } from '@mui/material'
import {styled} from '@mui/material/styles'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const PaperStyled = styled(Paper)({
    objectFit: 'fill',
}) as typeof Paper

const TypographyStyled = styled(Typography)(({theme}) => ({
    ":hover": {
        color: theme.palette.primary.main,
        cursor: 'pointer'
    },
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    fontSize: 13
})) as typeof Typography

const ImageBox = styled(Box)({
    position: 'relative',
    ":hover>.MuiIconButton-root":{
        display: 'flex'
    },
    ":hover>.MuiPaper-root": {
        opacity: 0.8,
        cursor: 'pointer'
    }
}) as typeof Box

const ButtonStyled = styled(IconButton)(({theme}) => ({
    position: 'absolute',
    zIndex: 1,
    left:'50%',
    bottom: 20,
    transform: 'translateX(-50%)',
    display: 'none',
    width: 45,
    height: 45,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#111',
    ':hover': {
        backgroundColor: theme.palette.primary.main,
        color: '#fff'
    }
})) as typeof IconButton

const BookItem: React.FC = () => {
  return (
    <Box component='div'>
        <ImageBox component='div'>
            <PaperStyled
                component='img' 
                square 
                width='100%' 
                height='100%' 
                src='https://bizweb.dktcdn.net/thumb/large/100/364/248/products/71nj8ryhzrl-sl1500.jpg?v=1707149018717'
            />
            <ButtonStyled>
                <AddIcon/>
            </ButtonStyled>
        </ImageBox>
        <TypographyStyled variant='h6' component='h6'>Seven Year Slip: Ashley Poston Seven Year Slip: Ashley Poston</TypographyStyled>
        <Typography align='center' variant='subtitle2' component='p'>Fiction</Typography>
        <Rating size='small' readOnly value={4}/>
    </Box>
  )
}

export default BookItem