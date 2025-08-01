import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  Box,
  VStack,
  Heading,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';
import { storageService } from '../lib/storageService';

function CrewmateDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [crewmate, setCrewmate] = useState(null);

  useEffect(() => {
    fetchCrewmate();
  }, [id]);

  const fetchCrewmate = () => {
    const data = storageService.getCrewmateById(id);
    if (!data) {
      navigate('/gallery');
      return;
    }
    setCrewmate(data);
  };

  if (!crewmate) return null;

  return (
    <Box p={8} ml="200px">
      <VStack spacing={6} align="center">
        <Heading>Crewmate: {crewmate.name}</Heading>
        <Box
          w="200px"
          h="200px"
          bg="gray.700"
          borderRadius="lg"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderWidth={2}
          borderColor={crewmate.color.toLowerCase()}
        >
          {/* Add crewmate avatar/image here */}
        </Box>
        <Heading as="h2" size="lg">Stats:</Heading>
        <Text fontSize="xl">Color: {crewmate.color}</Text>
        <Text fontSize="xl">Speed: {crewmate.speed} mph</Text>
        {crewmate.speed < 3 && (
          <Text fontSize="lg" color="yellow.500">
            You may want to find a Crewmate with more speed, this one is kind of slow 😅
          </Text>
        )}
        <Button
          as={Link}
          to={`/edit/${crewmate.id}`}
          colorScheme="blue"
        >
          Wanna edit this Crewmate?
        </Button>
      </VStack>
    </Box>
  );
}

export default CrewmateDetails;