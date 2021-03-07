import { signIn } from 'next-auth/client';
import React from 'react';
import { Button, Heading, Center, Stack, Box, useColorModeValue as mode, Flex } from '@chakra-ui/react';

const Frontpage: React.FC = () => {
  const signInAndRedirect = () => signIn('onlineweb4', { callbackUrl: `${process.env.NEXTAUTH_URL}/clients` });

  return (
    <Center h="100%">
      <Stack>
        <Box maxW={{ sm: 'full' }} mx={{ sm: 'auto' }} mt="8" w={{ sm: 'full' }}>
          <Box bg={mode('white', 'gray.700')} py="8" px={{ base: '4', md: '10' }} shadow="base" rounded={{ sm: 'lg' }}>
            <Flex direction="column">
              <Heading>Authentication Dashboard</Heading>
              <Button onClick={signInAndRedirect}>Logg Inn</Button>
            </Flex>
          </Box>
        </Box>
      </Stack>
    </Center>
  );
};

export default Frontpage;
