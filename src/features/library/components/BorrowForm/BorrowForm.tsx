import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {styled} from '@mui/material/styles'
import dayjs from 'dayjs'
import React from 'react'
import { showAlert, ETypeAlert } from '../../../../shared/helpers/alert';
import { useAppSelector } from '../../../../redux/hook';
import { booksInBasketSelector } from '../../services/states/selector';


const BoxStyled = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
})

const ButtonStyled = styled(Button)({
    height:50,
    width: 200,
    borderRadius: 0
})


const BorrowForm:React.FC = () => {

  const [startDate, setStartDate] = React.useState<dayjs.Dayjs | null>(null)
  const [endDate, setEndDate] = React.useState<dayjs.Dayjs | null>(null)

  const booksInBasket = useAppSelector(booksInBasketSelector)

  const handleChangeStartDate = (newValue: dayjs.Dayjs | null) => {
    setStartDate(newValue)
  }

  const handleChangeEndDate = (newValue: dayjs.Dayjs | null) => {
    setEndDate(newValue)
  }

  const handleBorrowButtonClick = () => {
    if(booksInBasket.length > 3) {
        showAlert("Bạn không được mượn nhiều hơn 3 cuốn sách", ETypeAlert.ERROR)
    } else {
        showAlert("Mượn sách thành công", ETypeAlert.SUCCESS)
        //TODO: borrow book
    }
  }

  return (
    <Box elevation={3} component={Paper} padding={2}>
        <Typography variant='h5' fontWeight={500} marginBottom={2}>
            Thời gian
        </Typography>
        <BoxStyled>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    value={startDate} 
                    onChange={handleChangeStartDate}
                    renderInput={(params) => <TextField {...params} />}
                    label='Ngày mượn'
                />
                <DatePicker 
                    value={endDate} 
                    onChange={handleChangeEndDate}
                    renderInput={(params) => <TextField {...params} />}
                    label='Ngày trả'
                />
            </LocalizationProvider>

            <ButtonStyled variant='contained' onClick={handleBorrowButtonClick}>
                <Typography>
                    Mượn
                </Typography>
            </ButtonStyled>
        </BoxStyled>
    </Box>
  )
}

export default BorrowForm