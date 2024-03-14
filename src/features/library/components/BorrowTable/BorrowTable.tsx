import React from 'react'
import { Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import {styled} from '@mui/material/styles'
import { Delete } from '@mui/icons-material'


const ImageStyled = styled(Box)({
    width:80,
    height: 120
}) as typeof Box


const BorrowTable:React.FC = () => {

  const columns = ['STT', 'Title', 'Author', 'Genre', 'Image', '']
//   const columns = [
//     {
//         text: 'STT',
//         span: 1
//     },
//     {
//         text: 'Title',
//         span: 5
//     },
//     {
//         text: 'Author',
//         span: 2
//     },
//     {
//         text: 'Genre',
//         span: 2
//     },
//     {
//         text: 'Image',
//         span: 2
//     }
//   ]

  interface IRows {
    no: number,
    title: string,
    author: string,
    genre: string,
    image: string
  }

  const rows:IRows[] = [
    {
        no: 1, 
        title: 'Twisted Love', 
        author: 'Hanah Grace', 
        genre: 'Fiction', 
        image: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/364/248/products/71nj8ryhzrl-sl1500.jpg?v=1707149018717'
    },
    {
        no: 1, 
        title: 'Twisted Love', 
        author: 'Hanah Grace', 
        genre: 'Fiction', 
        image: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/364/248/products/71nj8ryhzrl-sl1500.jpg?v=1707149018717'
    },
    {
        no: 1, 
        title: 'Twisted Love', 
        author: 'Hanah Grace', 
        genre: 'Fiction', 
        image: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/364/248/products/71nj8ryhzrl-sl1500.jpg?v=1707149018717'
    },
  ]
    
  return (
    <TableContainer square component={Paper}>
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
                {rows.map(row => (
                    <TableRow>
                        <TableCell>
                            {row.no}
                        </TableCell>
                        <TableCell>
                            {row.title}
                        </TableCell>
                        <TableCell>
                            {row.author}
                        </TableCell>
                        <TableCell>
                            {row.genre}
                        </TableCell>
                        <TableCell>
                            <ImageStyled 
                                component='img'
                                src={row.image}
                            />
                        </TableCell>
                        <TableCell>
                            <IconButton>
                                <Delete/>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                ))}

                <TableRow>
                    <TableCell>
                        <Typography variant='h6' fontWeight={500}>
                            So luong:
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography variant='h6' fontWeight={500}>
                            3
                        </Typography>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default BorrowTable