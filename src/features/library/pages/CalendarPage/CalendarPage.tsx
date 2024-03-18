import { Box, Container } from '@mui/material'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import React from 'react'
import { EventClickArg } from '@fullcalendar/core'
import { useNavigate } from 'react-router-dom'

const CalendarPage: React.FC = () => {

  const navigate = useNavigate()

  const events = [
    { title: 'MP-01', start: new Date(), end: new Date('2024-04-30')},
    { title: 'MP-02', start: new Date(), end: new Date('2024-04-20')}
  ]
  //TODO: fix events

  const handleEventClick = (arg:EventClickArg) => {
    navigate('/home/history', {
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