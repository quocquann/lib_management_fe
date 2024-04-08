import React from 'react'
import {styled} from '@mui/material/styles'
import { Box, Button, Collapse, Container, List, ListItemButton, ListItemIcon, ListItemText, Pagination, Paper, Rating, Skeleton, TextField, Typography } from '@mui/material'
import { Add, Remove } from '@mui/icons-material'
import CategoryLabel from '../../components/CategoryLabel/CategoryLabel'
import { useAppDispatch, useAppSelector } from '../../../../redux/hook'
import ReviewList from '../../components/ReviewList/ReviewList'
import { createReviewThunk, getBookByIdThunk, getReviewsThunk } from '../../services/states/action'
import { useParams } from 'react-router-dom'
import { bookDetailSelector, isDetailLoadingSelector, reviewsSelector } from '../../services/states/selector'
import { librarySlice } from '../../services/states/librarySlice'
import { isLoggedSelector } from '../../../authentication/services/states/selectors'
import { ETypeAlert, showAlert } from '../../../../shared/helpers/alert'

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

  const reviewPageSize = 20

  const [isDescribeTabOpen, setIsDescribeTabOpen] = React.useState<boolean>(false)
  const [isReviewTabOpen, setIsReviewTabOpen] = React.useState<boolean>(false)
  const [comment, setComment] = React.useState("")
  const [rating, setRating] = React.useState(0)

  const dispatch = useAppDispatch()
  const {id} = useParams()

  const book = useAppSelector(bookDetailSelector)
  const isDetailLoading = useAppSelector(isDetailLoadingSelector)
  const reviews = useAppSelector(reviewsSelector)
  const isLogged = useAppSelector(isLoggedSelector)
  
  React.useEffect(() => {
    dispatch(getBookByIdThunk(id as string))  
  },[dispatch, id])

  React.useEffect(() => {
    dispatch(getReviewsThunk(id as string))
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

  const handleReviewButtonClick = async () => {
    if(!isLogged){
        showAlert("Bạn phải đăng nhập để viết đánh giá", ETypeAlert.INFOR)
        return
    }
    try {
        await dispatch(createReviewThunk({id: id as string, rating: rating, comment_text: comment})).unwrap()
        dispatch(getReviewsThunk(id as string))
        setRating(0)
        setComment("")
    }catch(e) {
        console.error(e)
    }
    
  }

  const handleChangeRating = (_event: React.SyntheticEvent, value: number | null) => {
    setRating(value as number)
  }

  const handleCommentTextFieldChange = (event : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setComment(event.target.value)
  }

  return (
    <Box marginTop={20}>
        <ContainerStyled>
            <WrapBox>
                {isDetailLoading ? (<Skeleton variant="rectangular" width={290} height={450} />) : (
                    <PaperStyled 
                        component='img'
                        square
                        src={`${process.env.REACT_APP_BASE_URL}media/${book.image}`}
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
                        <Rating value={book.rating} size='small' readOnly/>
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
                                Đánh giá ({reviews.length})
                            </ListItemText>
                        </ListItemButtonStyled>

                        <Collapse in={isReviewTabOpen} timeout='auto'>
                            <ReviewList reviews={reviews}/>
                            {Math.ceil(reviews.length/reviewPageSize) <= 1 ? "" : (<Pagination count={Math.ceil(reviews.length/reviewPageSize)} shape="rounded" />)}
                            <Box marginTop={5}>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={5}
                                    label='Viết gì đó'
                                    value={comment}
                                    onChange={handleCommentTextFieldChange}
                                />
                                <Box marginTop={1}>
                                    <Rating value={rating} onChange={handleChangeRating}/>
                                </Box>
                                <Box marginTop={3} display={'flex'} justifyContent={'flex-end'}>
                                    <Button variant='contained' onClick={handleReviewButtonClick}>
                                        Đánh giá
                                    </Button>
                                </Box>
                            </Box>
                        </Collapse>
                    </List>
                </Box>
            </WrapBox>

            <CategoryLabel text='Có thể bạn thích'/>
            {/* <BookList books={bookList}/> */}
            {/* TODO: */}
        </ContainerStyled>

    </Box>
  )
}

export default BookDetailPage