import { Box, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <Box bg='blue.500' p={4} color='white'>
      <Flex justifyContent='space-around'>
        <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>Home</Link>
        <Link as={RouterLink} to="/create" _hover={{ textDecoration: 'none' }}>Create Note</Link>
        <Link as={RouterLink} to="/view" _hover={{ textDecoration: 'none' }}>View Notes</Link>
      </Flex>
    </Box>
  );
};

export default Navigation;