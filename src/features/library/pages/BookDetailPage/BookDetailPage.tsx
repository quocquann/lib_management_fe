import React from 'react'
import {styled} from '@mui/material/styles'
import { Box, Collapse, Container, List, ListItemButton, ListItemIcon, ListItemText, Paper, Rating, Typography } from '@mui/material'
import { Add, Remove } from '@mui/icons-material'
import BookList from '../../components/BookList/BookList'

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
    marginBottom: 30
})) as typeof ListItemButton

const BookDetailPage: React.FC = () => {

  const [isDescribeTabOpen, setIsDescribeTabOpen] = React.useState<boolean>(false)
  const [isReviewTabOpen, setIsReviewTabOpen] = React.useState<boolean>(false)

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
                            Author: Hanah Grace
                        </Typography>
                        <Typography>
                            Genre: Fiction
                        </Typography>
                    </FlexBox>
                    <Rating value={4} size='small' readOnly/>
                    <Box component='ul'>
                        <Box component='li'>
                            <Typography fontSize={14}>Publisher : Simon & Schuster (November 16, 2021) </Typography>
                        </Box>
                        <Box component='li'>
                            <Typography fontSize={14}>ISBN-10 : 1501153641</Typography>
                        </Box>
                        <Box component='li'>
                            <Typography fontSize={14}>Soluong: 20</Typography>
                        </Box>
                    </Box>
                </BoxInfo>
                <Box flex={1}>
                    <List component='div'>
                        <ListItemButtonStyled onClick={handleDescribeChange}>
                            <ListItemIcon>
                                {isDescribeTabOpen ? <Remove/> : <Add/>}
                            </ListItemIcon>
                            <ListItemText>
                                Describe
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
                                Review
                            </ListItemText>
                        </ListItemButtonStyled>

                        <Collapse in={isReviewTabOpen} timeout='auto' unmountOnExit>
                            <Typography>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque aliquam ut omnis eaque officia dicta, rem quam alias ipsum fuga, porro inventore nisi sed fugit? Quos iusto et adipisci libero?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsum ea quae ut reprehenderit labore, in temporibus facilis autem animi. Totam eveniet consequuntur aspernatur sed repellendus incidunt quam cumque atque.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid optio laudantium perferendis magnam non cumque, temporibus nulla eaque impedit inventore tempore ab animi, corrupti eum voluptatem laborum, provident id quae.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque aliquam ut omnis eaque officia dicta, rem quam alias ipsum fuga, porro inventore nisi sed fugit? Quos iusto et adipisci libero?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsum ea quae ut reprehenderit labore, in temporibus facilis autem animi. Totam eveniet consequuntur aspernatur sed repellendus incidunt quam cumque atque.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid optio laudantium perferendis magnam non cumque, temporibus nulla eaque impedit inventore tempore ab animi, corrupti eum voluptatem laborum, provident id quae.                           
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque aliquam ut omnis eaque officia dicta, rem quam alias ipsum fuga, porro inventore nisi sed fugit? Quos iusto et adipisci libero?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsum ea quae ut reprehenderit labore, in temporibus facilis autem animi. Totam eveniet consequuntur aspernatur sed repellendus incidunt quam cumque atque.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid optio laudantium perferendis magnam non cumque, temporibus nulla eaque impedit inventore tempore ab animi, corrupti eum voluptatem laborum, provident id quae.
                            
                            </Typography>
                        </Collapse>
                    </List>
                </Box>
            </WrapBox>

            <BookList/>
        </ContainerStyled>
    </Box>
  )
}

export default BookDetailPage