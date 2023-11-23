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
          <VStack bg="purple.100"></VStack>
          <HStack>
            <form>
              <Input />
              <Button type="submit">send</Button>
            </form>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
}

export default Home;
