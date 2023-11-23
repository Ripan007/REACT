import { Avatar, HStack, Text } from '@chakra-ui/react';
import React from 'react';

function Message({ title, uri }) {
  return (
    <HStack>
      <Text>{title}</Text>
      <Avatar src={uri} />
    </HStack>
  );
}

export default Message;
