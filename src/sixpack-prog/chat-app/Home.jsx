import {
  Box,
  Button,
  Container,
  HStack,
  Input,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import Message from './components/Message.JSX';
import {GoggleAuthProvider,}

function Home() {
  return (
    <Box bg="red.50">
      <Container height="100vh" bg="white">
        <VStack h="full" p="3">
          <Button colorScheme="red" w="full">
            logout
          </Button>
          <VStack h="full" w="full" overflowY={'auto'}>
            <Message title="show the message" user="other" />
          </VStack>

          <form style={{ width: '100%' }}>
            <HStack>
              <Input placeholder="enter some text" />
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

// excitement , curious  ,patient  => key mantra
//  learn => practice => practice => learn =>  vicious circle
