import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material'
import { TableRow, TableCell, IconButton, Collapse, Box, Typography } from '@mui/material'
import React from 'react'
import BorrowTable from '../BorrowTable/BorrowTable'
import { borrowBooks } from '../../../../shared/mocks/borrowBooks'

interface IRowProps {
    billNo: number,
    startDate: string,
    endDate: string,
    status: string
}

const Row:React.FC<IRowProps> = (props) => {

  const [isOpen, setIsOpen] = React.useState(false)

  const handleExpandRow = () => {
    setIsOpen(prev => !prev)
  }
  
  const {billNo, startDate, endDate, status} = props
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
                {billNo}
            </TableCell>
            <TableCell>
                {startDate}
            </TableCell>
            <TableCell>
                {endDate}
            </TableCell>
            <TableCell>
                {status}
            </TableCell>
        </TableRow>

        <TableRow>
            <TableCell colSpan={12}>
                <Collapse in={isOpen} unmountOnExit>
                    <Box marginBottom={2}>
                        <Typography>
                            Chi tiết
                        </Typography>
                    </Box>

                    <BorrowTable readOnly books={borrowBooks}/>
                </Collapse>
            </TableCell>
        </TableRow>
    </>
  )
}

export default Row