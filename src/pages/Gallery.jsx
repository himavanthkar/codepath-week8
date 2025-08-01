import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Grid,
  Heading,
  VStack,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';
import { storageService } from '../lib/storageService';

function Gallery() {
  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    fetchCrewmates();
  }, []);

  const fetchCrewmates = () => {
    const data = storageService.getAllCrewmates();
    // Sort by creation date, most recent first
    data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    setCrewmates(data);
  };

  return (
    <Box p={8}>
      <VStack spacing={6}>
        <Heading size="2xl">Your Crewmate Gallery!</Heading>
        {crewmates.length === 0 ? (
          <VStack spacing={4}>
            <Text fontSize="xl">You haven't made a crewmate yet!</Text>
            <Button
              as={Link}
              to="/create"
              bg="gray.700"
              color="white"
              _hover={{ bg: 'gray.600' }}
            >
              Create one here!
            </Button>
          </VStack>
        ) : (
          <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
            {crewmates.map((crewmate) => (
              <Box
                key={crewmate.id}
                p={4}
                bg="gray.700"
                borderRadius="lg"
                boxShadow={`0 0 20px ${crewmate.color.toLowerCase()}`}
                position="relative"
              >
                <VStack spacing={2} align="center">
                  <Box
                    w="120px"
                    h="120px"
                    mb={2}
                  >
                    {/* Crewmate silhouette */}
                    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M30 40 Q50 20 70 40 Q90 60 70 80 Q50 100 30 80 Q10 60 30 40" />
                    </svg>
                  </Box>
                  <Text>Name of Crewmate: {crewmate.name}</Text>
                  <Text>Speed of Crewmate: {crewmate.speed} mph</Text>
                  <Text>Color of Crewmate: {crewmate.color}</Text>
                  <Button
                    as={Link}
                    to={`/edit/${crewmate.id}`}
                    bg="gray.800"
                    color="white"
                    _hover={{ bg: 'gray.600' }}
                    size="sm"
                    mt={2}
                  >
                    Edit Crewmate
                  </Button>
                </VStack>
              </Box>
            ))}
          </Grid>
        )}
      </VStack>
    </Box>
  );
}

export default Gallery;