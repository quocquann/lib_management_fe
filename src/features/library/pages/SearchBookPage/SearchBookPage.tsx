import { Search } from '@mui/icons-material'
import { Box, Container, InputAdornment, Pagination, TextField } from '@mui/material'
import {styled} from '@mui/material/styles'
import React from 'react'
import BookList from '../../components/BookList/BookList'
import ListFilter from '../../components/ListFilter/ListFilter'

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
                    <TextField
                        size='small'
                        InputProps={{
                           endAdornment: (
                            <InputAdornment position="end">
                                <Search />
                            </InputAdornment>
                           )
                        }}  
                    />

                    <ListFilter/>
                </LeftBox>
                <RightBox>  
                    <BookList/>
                    <Pagination count={10} shape="rounded" />
                </RightBox>
            </WrapBox>
        </Container>
    </Box>
  )
}

export default SearchBookPage