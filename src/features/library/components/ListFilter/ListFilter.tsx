import { Box, List, ListItem, ListItemButton, ListItemText, Paper } from '@mui/material';
import React from 'react'
import {styled} from '@mui/material/styles'
import { IAuthor, IGenre, IPublisher } from '../../models/interface';

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

interface IListFilterProps {
  items: IAuthor[] | IGenre[] | IPublisher[]
}


const ListFilter: React.FC<IListFilterProps> = (props) => {
  const {items} = props

  return (
    <WraperBox>
      <PaperStyled>
        {items.map(item => (
          <List key={item.id} disablePadding>
            <ListItem component="div" disablePadding>
              <ListItemButton>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </List>
        ))}
      </PaperStyled>
    </WraperBox>
)
}

export default ListFilter