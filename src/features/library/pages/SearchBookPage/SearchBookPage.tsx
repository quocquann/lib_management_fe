import { Search } from '@mui/icons-material'
import { Box, Container, InputAdornment, Pagination, TextField } from '@mui/material'
import {styled} from '@mui/material/styles'
import React from 'react'
import BookList from '../../components/BookList/BookList'
import ListFilter from '../../components/ListFilter/ListFilter'
import CategoryLabel from '../../components/CategoryLabel/CategoryLabel'
import { bookList } from '../../../../shared/mocks/bookList'
import authors from '../../../../shared/mocks/author'
import genres from '../../../../shared/mocks/genre'
import publishers from '../../../../shared/mocks/publisher'

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
                        {/* TODO: change item */}
                    </Box>
                    
                    <CategoryLabel text='Thể loại'/>

                    <Box marginBottom={4}>
                        <ListFilter items={genres}/>
                        {/* TODO: change item */}
                    </Box>

                    <CategoryLabel text='NXB'/>
                    <ListFilter items={publishers}/>
                    {/* TODO: change item */}
                </LeftBox>
                <RightBox>  
                    <BookList full={false} books={bookList}/>
                    <Pagination count={10} shape="rounded" />
                </RightBox>
            </WrapBox>
        </Container>
    </Box>
  )
}

export default SearchBookPage