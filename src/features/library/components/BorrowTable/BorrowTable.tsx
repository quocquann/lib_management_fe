import React from 'react'
import { Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import {styled} from '@mui/material/styles'
import { Delete } from '@mui/icons-material'
import { IBook } from '../../models/interface'
import { useAppDispatch } from '../../../../redux/hook'
import { librarySlice } from '../../services/states/librarySlice'


const ImageStyled = styled(Box)({
    width:80,
    height: 120
}) as typeof Box

interface IBorrowTable {
    readOnly?: boolean,
    books: IBook[]
}


const BorrowTable:React.FC<IBorrowTable> = ({readOnly=false, books}) => {

  const columns = ['STT', 'Tiêu đề', 'Tác giả', 'Thể loại', 'Ảnh', '']

  const dispatch = useAppDispatch()

  const handleDeleteButtonClick = (id: number) => {
    dispatch(librarySlice.actions.removeBookToBasket(id))
  }

  return (
    <TableContainer square component={Paper} elevation={3}>
        <Table>
            <TableHead>
                <TableRow>
                    {columns.map(column => (
                        <TableCell key={column}>
                            <Typography>
                                {column}
                            </Typography>
                        </TableCell>
                    ))}               
                </TableRow>
            </TableHead>
            <TableBody>
                {books.map((book, index) => (
                    <TableRow key={book.id}>
                        <TableCell>
                            {index+1}
                        </TableCell>
                        <TableCell>
                            {book.title}
                        </TableCell>
                        <TableCell>
                            {book.author}
                        </TableCell>
                        <TableCell>
                            {book.genre}
                        </TableCell>
                        <TableCell>
                            <ImageStyled 
                                component='img'
                                src={`${process.env.REACT_APP_BASE_URL}media/${book.image}`}
                            />
                        </TableCell>
                        <TableCell>
                            {readOnly ? '' :(<IconButton onClick={() => handleDeleteButtonClick(book.id)}>
                                    <Delete/>
                                </IconButton>)}
                        </TableCell>
                    </TableRow>
                ))}

                <TableRow>
                    <TableCell>
                        <Typography variant='h6' fontSize={16} fontWeight={500}>
                            Số lượng:
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography variant='h6' fontSize={16} fontWeight={500}>
                            {books.length}
                        </Typography>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default BorrowTable