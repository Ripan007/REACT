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
import { getAuth, GoggleAuthProvider, signInWithPopUp } from 'firebase/auth';
import { app } from '../firebase';

const auth = getAuth(app);

const loginHandler = () => {
  const provider = new GoggleAuthProvider();
  signInWithPopUp(auth, provider);
};

function Home() {
  const [user, setUser] = useState(false);
  return (
    <Box bg="red.50">
      {user ? (
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
      ) : (
        <VStack>
          <Button>sign in with google</Button>
        </VStack>
      )}
    </Box>
  );
}

export default Home;

// excitement , curious  ,patient  => key mantra
//  learn => practice => practice => learn =>  vicious circle
