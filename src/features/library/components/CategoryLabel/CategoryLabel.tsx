import {styled} from '@mui/material/styles'
import { Box, Typography } from '@mui/material'
import React from 'react'


const CategoryBox = styled(Box)(({theme}) => ({
    width:'30%',
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    padding: '5px 5px'
})) as typeof Box

const BottomLineBox = styled(Box)({
    borderBottom: '1px solid gray',
    marginBottom: 30
}) as typeof Box

interface ICategoryProps {
    text: string
}


const CategoryLabel:React.FC<ICategoryProps> = ({text}) => {
  return (
    <BottomLineBox component='div'>
            <CategoryBox>
                <Typography align='center'>
                    {text}
                </Typography>
            </CategoryBox>
        </BottomLineBox>
  )
}

export default CategoryLabel