import React from 'react'
import {styled} from '@mui/material/styles'
import { Box, Button, Collapse, Container, List, ListItemButton, ListItemIcon, ListItemText, Pagination, Paper, Rating, Skeleton, Typography } from '@mui/material'
import { Add, Remove } from '@mui/icons-material'
import BookList from '../../components/BookList/BookList'
import { bookList } from '../../../../shared/mocks/bookList'
import CategoryLabel from '../../components/CategoryLabel/CategoryLabel'
import { useAppDispatch, useAppSelector } from '../../../../redux/hook'
import ReviewList from '../../components/ReviewList/ReviewList'
import { getBookByIdThunk } from '../../services/states/action'
import { useParams } from 'react-router-dom'
import { bookDetailSelector, isDetailLoadingSelector } from '../../services/states/selector'
import { librarySlice } from '../../services/states/librarySlice'

const ContainerStyled = styled(Container)({
    marginTop: 20,
}) as typeof Container

const PaperStyled = styled(Paper)({
    objectFit: 'fill',
    width: 290,
    height: 450
}) as typeof Paper

const BoxInfo = styled(Box)({
    background: '#f3f3f3',
    minHeight: 450,
    flex: 1,
    padding: '15px 20px'
}) as typeof Box

const WrapBox = styled(Box)({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    columnGap: 20,
    marginBottom: 30
}) as typeof Box

const FlexBox = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 10
}) as typeof Box

const ListItemButtonStyled = styled(ListItemButton)(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    marginBottom: 30,
})) as typeof ListItemButton

const ButtonStyled = styled(Button)({
    width: '100%',
    height:50
}) as typeof Button

const SkeletonStyled = styled(Skeleton)({
    height: 450,
    minWidth: 431
}) as typeof Skeleton

const BookDetailPage: React.FC = () => {

  const [isDescribeTabOpen, setIsDescribeTabOpen] = React.useState<boolean>(false)
  const [isReviewTabOpen, setIsReviewTabOpen] = React.useState<boolean>(false)

  const dispatch = useAppDispatch()
  const {id} = useParams()

  const book = useAppSelector(bookDetailSelector)
  const isDetailLoading = useAppSelector(isDetailLoadingSelector)
  
  React.useEffect(() => {
    dispatch(getBookByIdThunk(id as string))  
  },[dispatch, id])

  const handleAddButtonClick = () => {
    dispatch(librarySlice.actions.addBookToBasket(book))
  }  


  const handleDescribeChange = () => {
    setIsDescribeTabOpen((prev) => !prev)
  }

  const handleReviewChange = () => {
    setIsReviewTabOpen((prev) => !prev)
  }

  return (
    <Box marginTop={20}>
        <ContainerStyled>
            <WrapBox>
                {isDetailLoading ? (<Skeleton variant="rectangular" width={290} height={450} />) : (
                    <PaperStyled 
                        component='img'
                        square
                        src={`${process.env.REACT_APP_BASE_URL}static/images${book.image}`}
                    />
                )}
                {isDetailLoading ? (<SkeletonStyled variant="rectangular" />): (
                    <BoxInfo>
                        <Typography 
                            fontSize={30} 
                            fontWeight={400} 
                            variant='h1' 
                            component='h1'
                            marginBottom={2}
                        >
                            {book.title}
                        </Typography>
                        <FlexBox>
                            <Typography>
                                Tác giả: {book.author}
                            </Typography>
                            <Typography>
                                Thể loại: {book.genre}
                            </Typography>
                        </FlexBox>
                        <Rating value={4} size='small' readOnly/>
                        <Box component='ul'>
                            <Box component='li'>
                                <Typography fontSize={14}>Nhà xuất bản : {book.publisher} </Typography>
                            </Box>
                            <Box component='li'>
                                <Typography fontSize={14}>ISBN-10 : {book.isbn}</Typography>
                            </Box>
                            <Box component='li'>
                                <Typography fontSize={14}>Số lượng: 20</Typography>
                            </Box>
                        </Box>

                        <ButtonStyled variant='contained' onClick={handleAddButtonClick}>
                                Mượn
                            </ButtonStyled>
                    </BoxInfo>
                )}
                
                <Box flex={1}>
                    <List component='div'>
                        <ListItemButtonStyled onClick={handleDescribeChange}>
                            <ListItemIcon>
                                {isDescribeTabOpen ? <Remove/> : <Add/>}
                            </ListItemIcon>
                            <ListItemText>
                                Mô tả
                            </ListItemText>
                        </ListItemButtonStyled>

                        <Collapse in={isDescribeTabOpen} timeout='auto' unmountOnExit>
                            <Typography>
                            {book.describe}
                            </Typography>
                        </Collapse>

                        <ListItemButtonStyled onClick={handleReviewChange}>
                            <ListItemIcon>
                            {isReviewTabOpen ? <Remove/> : <Add/>}
                            </ListItemIcon>
                            <ListItemText>
                                Đánh giá
                            </ListItemText>
                        </ListItemButtonStyled>

                        <Collapse in={isReviewTabOpen} timeout='auto'>
                            <ReviewList/>
                            <Pagination count={10} shape="rounded" />
                        </Collapse>
                    </List>
                </Box>
            </WrapBox>

            <CategoryLabel text='Có thể bạn thích'/>
            <BookList books={bookList}/>
        </ContainerStyled>
    </Box>
  )
}

export default BookDetailPage