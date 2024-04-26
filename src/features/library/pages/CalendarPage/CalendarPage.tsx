import { Box, Container } from '@mui/material'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import React from 'react'
import { EventClickArg } from '@fullcalendar/core'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../redux/hook'
import { borrowsSelector } from '../../services/states/selector'
import { getBorrowsThunk } from '../../services/states/action'

interface IEvent {
  title: string
  start: Date
  end: Date
}

const CalendarPage: React.FC = () => {

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const borrows = useAppSelector(borrowsSelector)

  React.useEffect(() => {
    dispatch(getBorrowsThunk())
  }, [dispatch])

  const events = borrows.map((borrow) => {
    const event:IEvent = {
      title: `MP: ${borrow.id}`,
      start: new Date(borrow.borrow_date),
      end: new Date(borrow.return_date)
    }

    return event
  })

  const handleEventClick = (arg:EventClickArg) => {
    navigate('/history', {
        state: arg.event._def.title
    })
  }

  return (
    <Box marginTop={20}>
        <Container>
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView='dayGridMonth'
            events={events}
            eventClick={handleEventClick}
        />
        </Container>
    </Box>
  )
}

export default CalendarPage