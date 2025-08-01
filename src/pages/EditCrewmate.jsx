import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
  Text,
  HStack,
} from '@chakra-ui/react';
import { storageService } from '../lib/storageService';

function EditCrewmate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [speed, setSpeed] = useState('');
  const [color, setColor] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCrewmate();
  }, [id]);

  const fetchCrewmate = () => {
    const crewmate = storageService.getCrewmateById(id);
    if (!crewmate) {
      navigate('/gallery');
      return;
    }
    
    setName(crewmate.name);
    setSpeed(crewmate.speed.toString());
    setColor(crewmate.color);
    setLoading(false);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    try {
      storageService.updateCrewmate(id, {
        name,
        speed: parseFloat(speed),
        color,
      });
      navigate(`/crewmate/${id}`);
    } catch (error) {
      console.error('Error updating crewmate:', error.message);
    }
  };

  const handleDelete = () => {
    try {
      storageService.deleteCrewmate(id);
      navigate('/gallery');
    } catch (error) {
      console.error('Error deleting crewmate:', error.message);
    }
  };

  if (loading) return null;

  return (
    <Box p={8} ml="200px">
      <VStack spacing={6}>
        <Heading>Update Your Crewmate :)</Heading>
        <Text>Current Crewmate Info:</Text>
        <Text>Name: {name}, Speed: {speed}, Color: {color}</Text>
        
        <Box as="form" onSubmit={handleUpdate} w="100%" maxW="500px">
          <VStack spacing={4}>
            <FormControl>
              <FormLabel>Name:</FormLabel>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter crewmate's name"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Speed (mph):</FormLabel>
              <Input
                type="number"
                value={speed}
                onChange={(e) => setSpeed(e.target.value)}
                placeholder="Enter speed in mph"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Color:</FormLabel>
              <RadioGroup onChange={setColor} value={color}>
                <Stack direction="column">
                  <Radio value="Red">Red</Radio>
                  <Radio value="Green">Green</Radio>
                  <Radio value="Blue">Blue</Radio>
                  <Radio value="Purple">Purple</Radio>
                  <Radio value="Yellow">Yellow</Radio>
                  <Radio value="Orange">Orange</Radio>
                  <Radio value="Pink">Pink</Radio>
                  <Radio value="Rainbow">Rainbow</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>

            <HStack spacing={4} w="100%">
              <Button type="submit" colorScheme="blue" flex={1}>
                Update Crewmate
              </Button>
              <Button
                type="button"
                colorScheme="red"
                onClick={handleDelete}
                flex={1}
              >
                Delete Crewmate
              </Button>
            </HStack>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}

export default EditCrewmate;