import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  RadioGroup,
  Radio,
  Stack,
  Image,
  Text,
} from '@chakra-ui/react';
import { storageService } from '../lib/storageService';

function CreateCrewmate() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [speed, setSpeed] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      storageService.createCrewmate({
        name,
        speed: parseFloat(speed),
        color,
      });
      navigate('/gallery');
    } catch (error) {
      console.error('Error creating crewmate:', error.message);
    }
  };

  return (
    <Box p={8}>
      <VStack spacing={8} align="center">
        <Heading size="2xl">Create a New Crewmate</Heading>
        
        <Box
          w="150px"
          h="150px"
          mb={4}
        >
          {/* Add crewmate group image here */}
        </Box>

        <Box as="form" onSubmit={handleSubmit} w="100%" maxW="500px">
          <VStack spacing={6}>
            <FormControl>
              <FormLabel fontSize="lg">Name:</FormLabel>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter crewmate's name"
                bg="gray.700"
                border="none"
                _placeholder={{ color: 'gray.400' }}
              />
            </FormControl>

            <FormControl>
              <FormLabel fontSize="lg">Speed (mph):</FormLabel>
              <Input
                type="number"
                value={speed}
                onChange={(e) => setSpeed(e.target.value)}
                placeholder="Enter speed in mph"
                bg="gray.700"
                border="none"
                _placeholder={{ color: 'gray.400' }}
              />
            </FormControl>

            <FormControl>
              <FormLabel fontSize="lg">Color:</FormLabel>
              <Box bg="gray.700" p={4} borderRadius="md">
                <RadioGroup onChange={setColor} value={color}>
                  <Stack direction="column" spacing={3}>
                    <Radio value="Red" colorScheme="red">Red</Radio>
                    <Radio value="Green" colorScheme="green">Green</Radio>
                    <Radio value="Blue" colorScheme="blue">Blue</Radio>
                    <Radio value="Purple" colorScheme="purple">Purple</Radio>
                    <Radio value="Yellow" colorScheme="yellow">Yellow</Radio>
                    <Radio value="Orange" colorScheme="orange">Orange</Radio>
                    <Radio value="Pink" colorScheme="pink">Pink</Radio>
                    <Radio value="Rainbow">Rainbow</Radio>
                  </Stack>
                </RadioGroup>
              </Box>
            </FormControl>

            <Button
              type="submit"
              bg="gray.600"
              color="white"
              _hover={{ bg: 'gray.500' }}
              w="100%"
              mt={4}
            >
              Create Crewmate
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}

export default CreateCrewmate;