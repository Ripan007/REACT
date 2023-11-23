import { HStack, Text } from '@chakra-ui/react';
import React from 'react';

function Message({ title }) {
  return (
    <HStack>
      <Text>{title}</Text>
    </HStack>
  );
}

export default Message;
