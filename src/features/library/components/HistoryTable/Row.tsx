import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material'
import { TableRow, TableCell, IconButton, Collapse, Box, Typography, Chip } from '@mui/material'
import React from 'react'
import BorrowTable from '../BorrowTable/BorrowTable'
import { IBook } from '../../models/interface'

interface IRowProps {
    id: number
    startDate: string,
    endDate: string,
    actualReturnDate: string
    status: string,
    books: IBook[]
    overdue: boolean
}

const Row:React.FC<IRowProps> = (props) => {

  const [isOpen, setIsOpen] = React.useState(false)

  const handleExpandRow = () => {
    setIsOpen(prev => !prev)
  }
  
  const {id, startDate, endDate,actualReturnDate, status, books, overdue} = props

  let statusChipColor: "error" | "success" | "default" | "primary" | "secondary" | "info" | "warning"
  if(status === 'borrowed'){
    statusChipColor = 'error'
  }else {
    statusChipColor = 'success'
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
                {actualReturnDate}
            </TableCell>
            <TableCell>
                <Chip variant='outlined' label={status} color={statusChipColor} size='small'/>
            </TableCell>
            <TableCell>
                {overdue && <Chip variant='outlined' label='Quá hạn' color='error' size='small'/>}
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