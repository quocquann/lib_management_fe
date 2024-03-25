import { KeyboardArrowUp, KeyboardArrowDown, Delete } from '@mui/icons-material'
import { TableRow, TableCell, IconButton, Collapse, Box, Typography } from '@mui/material'
import React from 'react'
import BorrowTable from '../BorrowTable/BorrowTable'
import { IBook } from '../../models/interface'

interface IRowProps {
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
  
  const { startDate, endDate, type, status, books} = props
  return (
    <>
        <TableRow>
            <TableCell>
                <IconButton onClick={handleExpandRow}>
                {isOpen ? <KeyboardArrowUp/> : <KeyboardArrowDown />}
                {/* {TODO:} */}
                </IconButton>
            </TableCell>
            <TableCell>
                {startDate}
            </TableCell>
            <TableCell>
                {endDate}
            </TableCell>
            <TableCell>
                {type}
            </TableCell>
            <TableCell>
                {status}
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