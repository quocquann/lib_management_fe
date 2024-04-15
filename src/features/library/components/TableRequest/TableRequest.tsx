import { Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import Row from './Row'
import { IRequest } from '../../models/interface'

interface ITableRequestProps {
    requests: IRequest[]
}

const TableRequest:React.FC<ITableRequestProps> = (props) => {
  
  const { requests } = props
  const columns = ['', 'Mã', 'Ngày bắt đầu', 'Ngày kết thúc', 'Loại', 'Trạng thái', 'Phiếu mượn', '']

  return (
    <Paper component={Table} elevation={2}>
        <TableHead>
            <TableRow>
                {columns.map((column, index) => (
                    <TableCell key={index}>
                        <Typography>
                            {column}    
                        </Typography>
                </TableCell>
                ))}
            </TableRow>
        </TableHead>
        <TableBody>                        
            {requests.map(request => (
                <Row 
                    key={request.id}
                    id={request.id}
                    startDate={request.start_date} 
                    endDate={request.end_date}
                    type={request.type}
                    status={request.status}
                    books={request.books}
                    borrow={request.borrow}
                />
            ))}
        </TableBody>
    </Paper>
  )
}

export default TableRequest