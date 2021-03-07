import { Box, Checkbox, Text } from '@chakra-ui/react';
import SectionHeader from 'client/components/SectionHeader';
import { UpdateSingleField } from 'client/hooks/useClientForm';
import React from 'react';

type Props = {
  reuse_consent: boolean;
  update: UpdateSingleField;
};

const ReuseConsent: React.FC<Props> = ({ reuse_consent, update }) => (
  <Box as="article">
    <SectionHeader>Brukerinteraksjon</SectionHeader>
    <Checkbox defaultChecked={reuse_consent} onChange={(event) => update('require_consent', event.target.value)}>
      Krev brukerinteraksjon
    </Checkbox>
    <Text>
      Krev at sluttbruker alltid må interagere med Onlineweb4 under autentisering og autorisering. Skru av dette for å
      legge til støtte for login_hint og &quot;passive authentication requests&quot;.
    </Text>
  </Box>
);

export default ReuseConsent;
