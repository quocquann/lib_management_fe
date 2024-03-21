import { Search } from '@mui/icons-material'
import { Box, Button, Container, InputAdornment, Pagination, TextField } from '@mui/material'
import {styled} from '@mui/material/styles'
import React from 'react'
import BookList from '../../components/BookList/BookList'
import ListFilter from '../../components/ListFilter/ListFilter'
import CategoryLabel from '../../components/CategoryLabel/CategoryLabel'
import { getAuthorsThunk, getBooksThunk, getGenresThunk, getPublishersThunk } from '../../services/states/action'
import { useAppDispatch, useAppSelector } from '../../../../redux/hook'
import { authorsSelector, bookListHomePageSelector, genresSelector, listTitleSelector, publishersSelector, searchStringSelector } from '../../services/states/selector'
import { librarySlice } from '../../services/states/librarySlice'

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

  const [page, setPage] = React.useState(1)


  const authors = useAppSelector(authorsSelector)
  const genres = useAppSelector(genresSelector)
  const publishers = useAppSelector(publishersSelector)
  const books = useAppSelector(bookListHomePageSelector)
  const searchString = useAppSelector(searchStringSelector)
  const listTitle = useAppSelector(listTitleSelector)


  React.useEffect(() => {
    dispatch(librarySlice.actions.setListTitle("Tất cả"))
    dispatch(getBooksThunk({
        page
    }))
  },[dispatch, page])

  React.useEffect(() => {
    dispatch(getAuthorsThunk())
  },[dispatch])

  React.useEffect(() => {
    dispatch(getGenresThunk())
  },[dispatch])

  React.useEffect(() => {
    dispatch(getPublishersThunk())
  }, [dispatch])

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page)
  }

  const handleSearchInputChange = (event : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newSearchString = event.target.value
    dispatch(librarySlice.actions.setSearchString(newSearchString))
    dispatch(librarySlice.actions.setListTitle("Tất cả"))
    dispatch(getBooksThunk({
        search: newSearchString
    }))
  }

  const handleAllBookButtonClick = () => {
    dispatch(getBooksThunk({})).then(() => {
        dispatch(librarySlice.actions.setListTitle("Tất cả"))
    })
  }

  return (
    <Box marginTop={20}>
        <Container>
            <WrapBox>
                <LeftBox>
                    <CategoryLabel text='Tìm kiếm'/>
                    <Box marginBottom={2}>
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
                            value={searchString}
                            onChange={handleSearchInputChange}
                        />
                    </Box>
                    <Box marginBottom={2}>
                        <Button onClick={handleAllBookButtonClick} fullWidth variant='contained'>
                            Tất cả sách
                        </Button>
                    </Box>
                    <CategoryLabel text='Tác giả'/>
                    <Box marginBottom={4}>
                        <ListFilter type='author' items={authors}/>
                    </Box>
                    
                    <CategoryLabel text='Thể loại'/>

                    <Box marginBottom={4}>
                        <ListFilter type="genre" items={genres}/>
                    </Box>

                    <CategoryLabel text='NXB'/>
                    <ListFilter type="publisher" items={publishers}/>
                </LeftBox>
                <RightBox>  
                    <CategoryLabel text={listTitle}/>
                    <BookList full={false} books={books}/>
                    <Pagination onChange={handlePageChange} page={page} count={10} shape="rounded" />
                </RightBox>
            </WrapBox>
        </Container>
    </Box>
  )
}

export default SearchBookPage