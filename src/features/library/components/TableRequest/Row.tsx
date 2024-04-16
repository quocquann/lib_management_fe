import { KeyboardArrowUp, KeyboardArrowDown, Delete } from '@mui/icons-material'
import { TableRow, TableCell, IconButton, Collapse, Box, Typography, Chip, Button, Dialog, DialogActions, DialogTitle } from '@mui/material'
import React from 'react'
import BorrowTable from '../BorrowTable/BorrowTable'
import { IBook } from '../../models/interface'
import { useAppDispatch } from '../../../../redux/hook'
import { deleteRequestThunk } from '../../services/states/action'
import { ETypeAlert, showAlert } from '../../../../shared/helpers/alert'

interface IRowProps {
    id: number
    startDate: string,
    endDate: string,
    type: string,
    status: string,
    books: IBook[],
    borrow: number
}

const Row:React.FC<IRowProps> = (props) => {

  const [isOpen, setIsOpen] = React.useState(false)
  const [isDialogOpen, setIsDialogOpen] = React.useState(false)
  const dispatch = useAppDispatch()

  const handleExpandRow = () => {
    setIsOpen(prev => !prev)
  }
  
  const { id, startDate, endDate, type, status, books, borrow} = props

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

  const handleClickDelete = () => {
    setIsDialogOpen(true)
  }

  const handleClose = () => {
    setIsDialogOpen(false)
  }

  const handleDelete = async () => {
    try {
      await dispatch(deleteRequestThunk(id)).unwrap()
    } catch (e) {
      showAlert("Xóa yêu cầu mượn sách thất bại", ETypeAlert.ERROR)
      setIsDialogOpen(false)
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
    case "renew":
      return "gia hạn"
    case "borrow":
      return "mượn"
    default:
      throw new Error("invalid case")
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
    case "pending":
      return "chờ"
    case "rejected":
      return "từ chối"
    case "approved":
      return "chấp nhận"
    default: 
      throw new Error("Invalid case")
    }
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
                <Chip variant='outlined' color={chipTypeColor} label={getTypeLabel(type)} size='small'/>
            </TableCell>
            <TableCell>
                <Chip variant='outlined' color={chipStatusColor} label={getStatusLabel(status)} size='small'/>
            </TableCell>
            <TableCell>
              {borrow ? borrow : "-"}
            </TableCell>
            <TableCell>
              {status === 'pending' ? (<IconButton onClick={handleClickDelete}>
                    <Delete/>
                </IconButton>) : (<></>)}
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
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {`Bạn có chắc chắn muốn xóa yêu cầu mượn sách số ${id}?`}
          </DialogTitle>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>Không</Button>
            <Button onClick={handleDelete} color="error">
              Có
            </Button>
          </DialogActions>
        </Dialog>
    </>
  )
}

export default Row