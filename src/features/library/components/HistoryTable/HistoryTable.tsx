import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@mui/material'
import React from 'react'
import Row from './Row'

const HistoryTable:React.FC = () => {


  const columns = ['', 'Mã phiếu', 'Ngày mượn', 'Ngày trả', 'Trang thái'] 

  interface IRows {
    billNo: number,
    startDate: string,
    endDate: string,
    status: string
  }

  const rows:IRows[] = [
    {
        billNo: 1, 
        endDate: 'Hanah Grace', 
        startDate: 'Fiction', 
        status: 'loan'
    },
    {
        billNo: 1, 
        endDate: 'Hanah Grace', 
        startDate: 'Fiction', 
        status: 'loan'
    },{
        billNo: 1, 
        endDate: 'Hanah Grace', 
        startDate: 'Fiction', 
        status: 'loan'
    },
  ]

  //TODO: fix data

  return (
    <TableContainer component={Paper} elevation={3}>
        <Table>
            <TableHead>
                <TableRow>
                    {columns.map(column => (
                        <TableCell>
                            <Typography>
                                {column}
                            </Typography>
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>                        
                {rows.map(row => (
                    <Row {...row}/>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default HistoryTable