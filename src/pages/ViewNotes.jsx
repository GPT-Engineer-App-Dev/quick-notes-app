import { Box, List, ListItem, ListIcon, Text } from '@chakra-ui/react';
import { FaRegStickyNote } from 'react-icons/fa';

const ViewNotes = () => {
  // Dummy data for example
  const notes = window.notes || [];

  return (
    <Box p={4}>
      <List spacing={3}>
        {notes && notes.map((note, index) => (
          <ListItem key={index}>
            <ListIcon as={FaRegStickyNote} color='green.500' />
            <Text fontWeight='bold'>{note.title}</Text>
            <Text>{note.content.substring(0, 50)}...</Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ViewNotes;