import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack } from '@chakra-ui/react';
import { useState } from 'react';

const CreateNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const handleNoteSubmit = () => {
    const newNote = { title, content };
    window.notes = window.notes ? [...window.notes, newNote] : [newNote];
    setTitle('');
    setContent('');
  };
  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <FormControl isRequired>
          <FormLabel htmlFor='title'>Title</FormLabel>
          <Input id='title' placeholder='Enter note title' value={title} onChange={(e) => setTitle(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor='content'>Content</FormLabel>
          <Textarea id='content' placeholder='Enter note content' value={content} onChange={(e) => setContent(e.target.value)} />
        </FormControl>
        <Button colorScheme='blue' onClick={handleNoteSubmit}>Submit</Button>
      </VStack>
    </Box>
  );
};

export default CreateNote;