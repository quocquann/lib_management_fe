import { Card, CardContent, CardMedia, Typography, Link } from '@mui/material'
import React from 'react'

const BookItem: React.FC = () => {
  return (
    <Card elevation={2}>
        <CardMedia 
            sx={{ height: 140 }}
            image="https://bizweb.dktcdn.net/thumb/large/100/364/248/products/816ehric-plus-7l-sl1500.jpg?v=1709723601400"
            title="green iguana"
        />
        <CardContent>
            <Link href="#" underline="hover" color='black'>
                Lizard
            </Link>
            <Typography variant="body1" component="div">
                Fiction
            </Typography>
        </CardContent>
    </Card>
  )
}

export default BookItem