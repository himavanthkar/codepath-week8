import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, VStack, Button } from '@chakra-ui/react';

function Navigation() {
  const location = useLocation();
  
  return (
    <Box 
      bg="gray.700" 
      w="200px" 
      h="100vh" 
      p={6} 
      position="fixed" 
      left={0}
    >
      <VStack spacing={6} align="stretch">
        <Button
          as={Link}
          to="/"
          variant={location.pathname === '/' ? 'solid' : 'ghost'}
          color="white"
          size="lg"
          _hover={{ bg: 'gray.700' }}
          bg={location.pathname === '/' ? 'gray.600' : 'transparent'}
        >
          Home
        </Button>
        <Button
          as={Link}
          to="/create"
          variant={location.pathname === '/create' ? 'solid' : 'ghost'}
          color="white"
          size="lg"
          _hover={{ bg: 'gray.700' }}
          bg={location.pathname === '/create' ? 'gray.600' : 'transparent'}
        >
          Create a Crewmate!
        </Button>
        <Button
          as={Link}
          to="/gallery"
          variant={location.pathname === '/gallery' ? 'solid' : 'ghost'}
          color="white"
          size="lg"
          _hover={{ bg: 'gray.700' }}
          bg={location.pathname === '/gallery' ? 'gray.600' : 'transparent'}
        >
          Crewmate Gallery
        </Button>
      </VStack>
    </Box>
  );
}

export default Navigation;