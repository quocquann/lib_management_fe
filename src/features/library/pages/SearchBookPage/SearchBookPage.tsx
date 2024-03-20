import { Search } from '@mui/icons-material'
import { Box, Container, InputAdornment, Pagination, TextField } from '@mui/material'
import {styled} from '@mui/material/styles'
import React from 'react'
import BookList from '../../components/BookList/BookList'
import ListFilter from '../../components/ListFilter/ListFilter'
import CategoryLabel from '../../components/CategoryLabel/CategoryLabel'
import { getAuthorsThunk, getBooksThunk, getGenresThunk, getPublishersThunk } from '../../services/states/action'
import { useAppDispatch, useAppSelector } from '../../../../redux/hook'
import { authorsSelector, bookListHomePageSelector, genresSelector, publishersSelector } from '../../services/states/selector'

const WrapBox = styled(Box)({
    display: 'flex',
    columnGap: 10
}) as typeof Box

const LeftBox = styled(Box)({
    flex: 3
})


const RightBox = styled(Box)({
    flex: 8
})


const SearchBookPage:React.FC = () => {

  const dispatch = useAppDispatch()  

  const authors = useAppSelector(authorsSelector)
  const genres = useAppSelector(genresSelector)
  const publishers = useAppSelector(publishersSelector)
  const books = useAppSelector(bookListHomePageSelector)

  React.useEffect(() => {
    dispatch(getBooksThunk())
  },[dispatch])

  React.useEffect(() => {
    dispatch(getAuthorsThunk())
  },[dispatch])

  React.useEffect(() => {
    dispatch(getGenresThunk())
  },[dispatch])

  React.useEffect(() => {
    dispatch(getPublishersThunk())
  }, [dispatch])

  return (
    <Box marginTop={20}>
        <Container>
            <WrapBox>
                <LeftBox>
                    <CategoryLabel text='Tìm kiếm'/>
                    <Box marginBottom={4}>
                        <TextField
                            fullWidth
                            size='small'
                            InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Search />
                                </InputAdornment>
                            )
                            }}  
                        />
                    </Box>
                    <CategoryLabel text='Tác giả'/>
                    <Box marginBottom={4}>
                        <ListFilter items={authors}/>
                    </Box>
                    
                    <CategoryLabel text='Thể loại'/>

                    <Box marginBottom={4}>
                        <ListFilter items={genres}/>
                    </Box>

                    <CategoryLabel text='NXB'/>
                    <ListFilter items={publishers}/>
                </LeftBox>
                <RightBox>  
                    <BookList full={false} books={books}/>
                    <Pagination count={10} shape="rounded" />
                </RightBox>
            </WrapBox>
        </Container>
    </Box>
  )
}

export default SearchBookPage