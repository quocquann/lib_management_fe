import React from 'react'
import { Box, Button, Container, InputAdornment, Link, List, ListItem, TextField, Typography } from '@mui/material'
import CategoryLabel from '../../components/CategoryLabel/CategoryLabel'
import { useAppDispatch, useAppSelector } from '../../../../redux/hook'
import { allBooksSelector } from '../../services/states/selector'
import { getBooksThunk } from '../../services/states/action'
import {Link as RouterLink} from 'react-router-dom'
import { Search } from '@mui/icons-material'
import {styled} from '@mui/material/styles'

const FlexBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap:5
}) as typeof Box

const HomePage: React.FC = () => {

  const [searchString, setSearchString] = React.useState("")

  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(getBooksThunk({}))
  },[dispatch])

  const bookList = useAppSelector(allBooksSelector)

  const handleInputChange = (event : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearchString(event.target.value)
  }

  const handleSearchButtonClick = () => {
    dispatch(getBooksThunk({search: searchString}))
  }

  return (
    <Box marginTop={15}>
      <Container>
        <Typography variant='h4' textAlign='center' color='primary' fontWeight='500'>
          Chào mừng bạn đọc tới thư viện
        </Typography>
        <Typography fontSize={16} marginBottom={3}>
          {'>'} Để tạo các yêu cầu mượn sách của thư viện các bạn phải có một tài khoản để đăng nhập.
        </Typography>

        <Typography>
          Tra cứu nhanh (theo tiêu đề, tác giả, thể loại, nhà xuất bản):
        </Typography>
        <FlexBox marginY={2}>
          <TextField
            sx={{
              flex: 1
            }}
            size='small'
            InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                    <Search />
                </InputAdornment>
            )
            }}  
            value={searchString}
            onChange={handleInputChange}
          />
          <Button variant='contained' onClick={handleSearchButtonClick}>Tìm kiếm</Button>
        </FlexBox>
        <CategoryLabel text="Tài liệu"/>
        <List component={"ol"}>
          {bookList.length ? bookList.map((book, index) => (
            <ListItem component={"li"} key={book.id} alignItems='flex-start'> 
              {index + 1}.  
              <Link component={RouterLink} to={`/detail/${book.id}`}>
                {book.title} - Tác giả: {book.author} - Thể loại: {book.genre} - NXB: {book.publisher}
              </Link>
            </ListItem>
          )) : <Typography textAlign='center'>Không có tài liệu nào thỏa mãn</Typography>}
        </List>
      </Container>
    </Box>
  )
}

export default HomePage