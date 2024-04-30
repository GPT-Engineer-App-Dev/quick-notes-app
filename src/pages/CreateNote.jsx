import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack } from '@chakra-ui/react';

const CreateNote = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <FormControl isRequired>
          <FormLabel htmlFor='title'>Title</FormLabel>
          <Input id='title' placeholder='Enter note title' />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor='content'>Content</FormLabel>
          <Textarea id='content' placeholder='Enter note content' />
        </FormControl>
        <Button colorScheme='blue'>Submit</Button>
      </VStack>
    </Box>
  );
};

export default CreateNote;