import { Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import Row from './Row'
import { IRequest } from '../../models/interface'

interface ITableRequestProps {
    requests: IRequest[]
}

const TableRequest:React.FC<ITableRequestProps> = (props) => {
  
  const { requests } = props
  const columns = ['STT', 'Ngay bat dau', 'Ngay ket thuc', 'Loai', 'Trang thai', '']

  return (
    <Paper component={Table}>
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
            {requests.map(request => (
                <Row 
                    startDate={request.start_date} 
                    endDate={request.end_date}
                    type={request.type}
                    status={request.status}
                    books={request.books}
                />
            ))}
        </TableBody>
    </Paper>
  )
}

export default TableRequest