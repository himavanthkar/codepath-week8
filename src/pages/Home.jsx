import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Heading, Text, VStack, Button, Image } from '@chakra-ui/react';

function Home() {
  return (
    <Box 
      w="100%"
      h="100vh"
      bg="#1A202C"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={4}
    >
      <VStack spacing={8} maxW="800px" w="100%">
        <Heading 
          as="h1" 
          size="2xl" 
          textAlign="center" 
          color="cyan.200"
        >
          Welcome to the Crewmate Creator!
        </Heading>
        
        <Text 
          fontSize="xl" 
          textAlign="center" 
          color="white"
        >
          Here is where you can create your very own set of crewmates before sending them off into space!
        </Text>

        <Box 
          w="300px" 
          h="300px" 
          position="relative"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {/* Group of crewmates */}
          <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
            <svg width="200" height="100" viewBox="0 0 200 100">
              <g transform="translate(60, 20)">
                <path d="M20 30 Q30 10 40 30 Q50 50 40 60 Q30 70 20 60 Q10 50 20 30" fill="#FF6B6B" />
              </g>
              <g transform="translate(90, 20)">
                <path d="M20 30 Q30 10 40 30 Q50 50 40 60 Q30 70 20 60 Q10 50 20 30" fill="#4CAF50" />
              </g>
              <g transform="translate(120, 20)">
                <path d="M20 30 Q30 10 40 30 Q50 50 40 60 Q30 70 20 60 Q10 50 20 30" fill="#2196F3" />
              </g>
            </svg>
          </Box>
        </Box>

        {/* UFO image */}
        <Box 
          w="200px" 
          h="100px" 
          position="relative"
          mt={4}
        >
          <svg viewBox="0 0 200 100">
            <ellipse cx="100" cy="60" rx="80" ry="30" fill="#666" />
            <ellipse cx="100" cy="50" rx="50" ry="30" fill="#888" />
            <ellipse cx="100" cy="40" rx="30" ry="20" fill="#AAA" />
          </svg>
        </Box>

        <Button
          as={Link}
          to="/create"
          bg="teal.400"
          color="white"
          size="lg"
          px={8}
          py={4}
          fontSize="xl"
          _hover={{
            bg: 'teal.500',
          }}
          mt={4}
        >
          Create a Crewmate!
        </Button>
      </VStack>
    </Box>
  );
}

export default Home;