import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@mui/material'
import React from 'react'
import Row from './Row'
import { IBorrow } from '../../models/interface'

interface IHistoryTableProps {
    borrows: IBorrow[]
}

const HistoryTable:React.FC<IHistoryTableProps> = (props) => {

  const { borrows } = props

  const columns = ['', 'Mã phiếu', 'Ngày mượn', 'Ngày trả', 'Ngày trả thực tế', 'Trang thái', 'Quá hạn', 'Gia hạn'] 

  return (
    <TableContainer component={Paper} elevation={3}>
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
                {borrows.map(borrow => (
                    <Row 
                        key={borrow.id} 
                        id={borrow.id}
                        startDate={borrow.borrow_date}
                        endDate={borrow.return_date}
                        actualReturnDate={borrow.actual_return_date}
                        status={borrow.status}
                        books={borrow.books}
                        overdue={borrow.overdue}
                    />
                ))}
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default HistoryTable