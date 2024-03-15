import { Box, List, ListItem, ListItemButton, ListItemText, Paper } from '@mui/material';
import React from 'react'
import {styled} from '@mui/material/styles'

const WraperBox = styled(Box)(({theme}) => ({
  border: '1px solid',
   borderColor: theme.palette.primary.main,
   width: '100%'
})) as typeof Box

const PaperStyled = styled(Paper)({
  maxHeight:200,
  overflow: 'auto',
  '::-webkit-scrollbar': {
    width: '7px'
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgba(0,0,0,.1)',
  }
}) as typeof Paper


const ListFilter: React.FC = () => {
  const data = [1,2,3,4,5,6,7,8,9,10]
  //TODO: add props

  return (
    <WraperBox>
      <PaperStyled>
        {data.map(item => (
          <List key={item} disablePadding>
            <ListItem component="div" disablePadding>
              <ListItemButton>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </List>
        ))}
      </PaperStyled>
    </WraperBox>
)
}

export default ListFilter