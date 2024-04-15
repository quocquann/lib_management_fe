import { KeyboardArrowUp, KeyboardArrowDown, AddCircle } from '@mui/icons-material'
import { TableRow, TableCell, IconButton, Collapse, Box, Typography, Chip, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React from 'react'
import BorrowTable from '../BorrowTable/BorrowTable'
import { IBook } from '../../models/interface'
import { useAppDispatch } from '../../../../redux/hook'
import { createRequestThunk } from '../../services/states/action'

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
  const [isDialogOpen, setIsDialogOpen] = React.useState(false)
  const [renewalDate, setRenewalDate] = React.useState("")

  const dispatch = useAppDispatch()

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

  const handleOpenDialog = () => {
    setIsDialogOpen(true)
  }

  const handleClose = () => {
    setIsDialogOpen(false)
  }

  const handleChangeDate = (event : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRenewalDate(event.target.value)
  }

  const handleSubmitRenew =() => {
    const book_ids = books.map(book => book.id)
    dispatch(createRequestThunk({
        start_date: endDate,
        end_date: renewalDate,
        type: 'renew',
        book_ids: book_ids,
        borrow_id: id
    }))

    setIsDialogOpen(false)
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
            <TableCell>
                <IconButton onClick={handleOpenDialog}>
                    <AddCircle/>
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


        <Dialog
            open={isDialogOpen}
            onClose={handleClose}
        >
            <DialogTitle>Gia hạn mượn sách</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Chọn ngày gia hạn:
            </DialogContentText>
            <TextField
                autoFocus
                required
                margin="dense"
                name="renew_date"
                type="date"
                fullWidth
                variant="standard"
                value={renewalDate}
                onChange={handleChangeDate}
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Thoát</Button>
            <Button onClick={handleSubmitRenew}>Gia hạn</Button>
            </DialogActions>
        </Dialog>
    </>
  )
}

export default Row