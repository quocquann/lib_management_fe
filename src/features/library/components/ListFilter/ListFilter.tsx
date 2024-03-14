import { Box, List, ListItem, ListItemButton, ListItemText, Paper } from '@mui/material';
import React from 'react'
import {styled} from '@mui/material/styles'

const WraperBox = styled(Box)(({theme}) => ({
  border: '1px solid',
   borderColor: theme.palette.primary.main,
   width: 280
})) as typeof Box


const ListFilter: React.FC = () => {
  const data = [1,2,3,4,5,6,7,8,9,10]
  //TODO: add props

  return (
    <WraperBox>
      <Paper style={{maxHeight: 200, overflow: 'auto'}}>
        {data.map(item => (
          <List key={item} disablePadding>
            <ListItem component="div" disablePadding>
              <ListItemButton>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </List>
        ))}
      </Paper>
    </WraperBox>
)
}

export default ListFilter