import { Avatar, HStack, Text } from '@chakra-ui/react';
import React from 'react';

function Message({ title, uri }) {
  return (
    <HStack
      alignSelf={'flex-end'}
      borderRadius="md"
      bg="gray.100"
      py="2"
      px="4"
    >
      <Text>{title}</Text>
      <Avatar src={uri} />
    </HStack>
  );
}

export default Message;
