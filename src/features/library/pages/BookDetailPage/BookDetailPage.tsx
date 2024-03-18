import React from 'react'
import {styled} from '@mui/material/styles'
import { Box, Button, Collapse, Container, List, ListItemButton, ListItemIcon, ListItemText, Pagination, Paper, Rating, Typography } from '@mui/material'
import { Add, Remove } from '@mui/icons-material'
import BookList from '../../components/BookList/BookList'
import { bookList } from '../../../../shared/mocks/bookList'
import CategoryLabel from '../../components/CategoryLabel/CategoryLabel'
import { useAppDispatch } from '../../../../redux/hook'
import ReviewList from '../../components/ReviewList/ReviewList'

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
    height: 450,
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

const BookDetailPage: React.FC = () => {

  const [isDescribeTabOpen, setIsDescribeTabOpen] = React.useState<boolean>(false)
  const [isReviewTabOpen, setIsReviewTabOpen] = React.useState<boolean>(false)

  const dispatch = useAppDispatch()  

  const handleAddButtonClick = () => {
    //TODO:
    console.log(1)
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
                <PaperStyled 
                    component='img'
                    square
                    src='https://bizweb.dktcdn.net/thumb/1024x1024/100/364/248/products/71nj8ryhzrl-sl1500.jpg?v=1707149018717'
                />
                
                <BoxInfo>
                    <Typography 
                        fontSize={30} 
                        fontWeight={400} 
                        variant='h1' 
                        component='h1'
                        marginBottom={2}
                    >
                        Wildfire (Maple Hills #2)
                    </Typography>
                    <FlexBox>
                        <Typography>
                            Tác giả: Hanah Grace
                        </Typography>
                        <Typography>
                            Thể loại: Fiction
                        </Typography>
                    </FlexBox>
                    <Rating value={4} size='small' readOnly/>
                    <Box component='ul'>
                        <Box component='li'>
                            <Typography fontSize={14}>Nhà xuất bản : Simon & Schuster (November 16, 2021) </Typography>
                        </Box>
                        <Box component='li'>
                            <Typography fontSize={14}>ISBN-10 : 1501153641</Typography>
                        </Box>
                        <Box component='li'>
                            <Typography fontSize={14}>Số lượng: 20</Typography>
                        </Box>
                    </Box>

                    <Box marginTop={10}>
                        <ButtonStyled variant='contained' onClick={handleAddButtonClick}>
                            Mượn
                        </ButtonStyled>
                    </Box>
                </BoxInfo>
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
                            They are from opposites sides of the track - but when their two worlds collide, nothing will ever be the same again.
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