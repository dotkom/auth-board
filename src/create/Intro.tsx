import { Alert, Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const Intro: React.FC<{ error: string }> = ({ error }) => (
  <>
    <Heading>Registrer ny applikasjon</Heading>
    {error && <Alert status="error">{error}</Alert>}
    <Box as="article">
      <Text>Du er i ferd med å lage en ny applikasjon for å aksessere Onlineweb4-data.</Text>
      <Text>
        Gi din applikasjon et kort, beskrivende navn og en lenger beskrivelse som forklarer hva din applikasjon gjør.
      </Text>
    </Box>
  </>
);

export default Intro;
