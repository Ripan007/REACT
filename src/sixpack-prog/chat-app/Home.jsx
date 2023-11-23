import { Box, Container, VStack } from '@chakra-ui/react';
import React from 'react';

function Home() {
  return (
    <Box bg="red.50">
      <Container height="100vh" bg="white">
        <VStack h="full" bg="telegram.100">
          <button></button>
        </VStack>
      </Container>
    </Box>
  );
}

export default Home;
