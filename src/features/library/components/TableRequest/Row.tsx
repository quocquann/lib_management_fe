import { KeyboardArrowUp, KeyboardArrowDown, Delete } from '@mui/icons-material'
import { TableRow, TableCell, IconButton, Collapse, Box, Typography, Chip } from '@mui/material'
import React from 'react'
import BorrowTable from '../BorrowTable/BorrowTable'
import { IBook } from '../../models/interface'

interface IRowProps {
    id: number
    startDate: string,
    endDate: string,
    type: string,
    status: string,
    books: IBook[]
}

const Row:React.FC<IRowProps> = (props) => {

  const [isOpen, setIsOpen] = React.useState(false)

  const handleExpandRow = () => {
    setIsOpen(prev => !prev)
  }
  
  const { id, startDate, endDate, type, status, books} = props

  let chipStatusColor: "success" | "error" | "warning" | "primary" | "secondary" | "info" | "default"
  if(status === 'pending'){
    chipStatusColor = 'warning'
  }
  else if (status === 'approved'){
    chipStatusColor = 'success'
  } else {
    chipStatusColor = 'error'
  }

  let chipTypeColor: "success" | "error" | "warning" | "primary" | "secondary" | "info" | "default"
  if(type === 'borrow'){
    chipTypeColor = 'primary'
  } else {
    chipTypeColor = 'secondary'
  }

  return (
    <>
        <TableRow>
            <TableCell>
                <IconButton onClick={handleExpandRow}>
                {isOpen ? <KeyboardArrowUp/> : <KeyboardArrowDown />}
                </IconButton>
            </TableCell>
            <TableCell>
                {id}
            </TableCell>
            <TableCell>
                {startDate}
            </TableCell>
            <TableCell>
                {endDate}
            </TableCell>
            <TableCell>
                <Chip variant='outlined' color={chipTypeColor} label={type} size='small'/>
            </TableCell>
            <TableCell>
                <Chip variant='outlined' color={chipStatusColor} label={status} size='small'/>
            </TableCell>
            <TableCell>
                <IconButton>
                    <Delete/>
                </IconButton>
            </TableCell>
        </TableRow>

        <TableRow>
            <TableCell colSpan={12}>
                <Collapse in={isOpen}>
                    <Box marginBottom={2}>
                        <Typography>
                            Chi tiết
                        </Typography>
                    </Box>

                    <BorrowTable readOnly books={books}/>
                </Collapse>
            </TableCell>
        </TableRow>
    </>
  )
}

export default Row