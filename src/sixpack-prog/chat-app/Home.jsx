import {
  Box,
  Button,
  Container,
  HStack,
  Input,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

function Home() {
  return (
    <Box bg="red.50">
      <Container height="100vh" bg="white">
        <VStack h="full" bg="telegram.100">
          <Button colorScheme="red" w="full">
            logout
          </Button>
          <VStack h="full" w="full" bg="purple.100"></VStack>

          <form style={{ width: '100%' }}>
            <HStack>
              <Input />
              <Button colorScheme="purple" type="submit">
                send
              </Button>
            </HStack>
          </form>
        </VStack>
      </Container>
    </Box>
  );
}

export default Home;
