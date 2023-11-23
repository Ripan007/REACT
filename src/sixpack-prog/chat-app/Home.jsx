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
        <VStack h="full" p="3">
          <Button colorScheme="red" w="full">
            logout
          </Button>
          <VStack h="full" w="full"></VStack>

          <form style={{ width: '100%' }}>
            <HStack>
              <Input outline={'none'} />
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
