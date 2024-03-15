import { Search } from '@mui/icons-material'
import { Box, Container, InputAdornment, Pagination, TextField } from '@mui/material'
import {styled} from '@mui/material/styles'
import React from 'react'
import BookList from '../../components/BookList/BookList'
import ListFilter from '../../components/ListFilter/ListFilter'
import CategoryLabel from '../../components/CategoryLabel/CategoryLabel'
import { bookList } from '../../../../shared/mocks/bookList'

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
                    <CategoryLabel text='Author'/>
                    <Box marginBottom={4}>
                        <ListFilter/>
                    </Box>
                    
                    <CategoryLabel text='Genre'/>

                    <Box marginBottom={4}>
                        <ListFilter/>
                    </Box>

                    <CategoryLabel text='Publisher'/>
                    <ListFilter/>
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