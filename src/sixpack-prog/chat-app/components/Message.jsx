import { Avatar, HStack, Text } from '@chakra-ui/react';
import React from 'react';

function Message({ title, uri, user = 'other' }) {
  return (
    <HStack
      alignSelf={user === 'me' ? 'flex-end' : 'flex-start'}
      borderRadius="md"
      bg="gray.100"
      py="2"
      px="4"
    >
      {user === 'other' && <Avatar src={uri} />}
      <Text>{title}</Text>
      <Avatar src={uri} />
    </HStack>
  );
}

export default Message;
