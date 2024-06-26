import {Typography, Box, Paper, Rating, IconButton, Link } from '@mui/material'
import {styled} from '@mui/material/styles'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { IBook } from '../../models/interface';
import { useAppDispatch } from '../../../../redux/hook';
import { librarySlice } from '../../services/states/librarySlice';
import {Link as RouterLink} from 'react-router-dom'
import { ETypeAlert, showAlert } from '../../../../shared/helpers/alert';

const PaperStyled = styled(Paper)({
    objectFit: 'fill',
    minHeight: 318,
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

const WrapperBox = styled(Box)({
    maxWidth: 178
}) as typeof Box

const FlexBox = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}) as typeof Box

interface IBookItemProps {
    book: IBook
}

const BookItem: React.FC<IBookItemProps> = ({book}) => {

  const dispatch = useAppDispatch()  

  const handleAddButtonClick = () => {
    if(book.available <= 0) {
        showAlert("Số lượng sách trong kho không đủ", ETypeAlert.ERROR)
        return 
    }
    dispatch(librarySlice.actions.addBookToBasket(book))
  }  

  return (
    <WrapperBox component='div'>
        <ImageBox component='div'>
            <PaperStyled
                component='img' 
                square 
                width='100%' 
                height='100%' 
                src={`${process.env.REACT_APP_BASE_URL}media/${book.image}`}
            />
            <ButtonStyled onClick={handleAddButtonClick}>
                <AddIcon/>
            </ButtonStyled>
        </ImageBox>
        <Link component={RouterLink} to={`/detail/${book.id}`}>
            <TypographyStyled variant='h6' component='h6'>{book.title}</TypographyStyled>
        </Link>
        <FlexBox>
            <Typography variant='subtitle2' component='p'>{book.genre}</Typography>
            <Typography variant='subtitle2' component='p'>SL: {book.available}</Typography>
        </FlexBox>
        <Rating size='small' readOnly value={book.rating}/>
    </WrapperBox>
  )
}

export default BookItem