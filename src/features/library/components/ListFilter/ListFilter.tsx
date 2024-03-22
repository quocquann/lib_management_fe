import { Box, List, ListItem, ListItemButton, ListItemText, Paper } from '@mui/material';
import React from 'react'
import {styled} from '@mui/material/styles'
import { IAuthor, IGenre, IPublisher } from '../../models/interface';
import { useAppDispatch } from '../../../../redux/hook';
import { getBooksThunk } from '../../services/states/action';
import { librarySlice } from '../../services/states/librarySlice';

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
  items: IAuthor[] | IGenre[] | IPublisher[],
  type: 'author' | 'genre' | 'publisher'
}


const ListFilter: React.FC<IListFilterProps> = ({items, type}) => {
  console.log(items)

  const dispatch = useAppDispatch()

  const handleItemClick = (item: IAuthor | IGenre | IPublisher) => {
    dispatch(getBooksThunk({
      [type]: item.id
    })).then(() => {
      let title
      switch (type) {
        case 'author':
          title = `Tác giả: ${item.name}`
          break
        case 'genre':
          title = `Thể loại: ${item.name}`
          break
        case 'publisher':
          title = `NXB: ${item.name}`
          break
      }
      dispatch(librarySlice.actions.setListTitle(title))
      dispatch(librarySlice.actions.setSearchString(""))
    })
  }

  return (
    <WraperBox>
      <PaperStyled>
        {items.map(item => (
          <List key={item.id} disablePadding>
            <ListItem component="div" disablePadding>
              <ListItemButton onClick={() => handleItemClick(item)}>
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