import { RadioGroup, Radio, Text, Box, Stack } from '@chakra-ui/react';
import SectionHeader from 'client/components/SectionHeader';
import { UpdateSingleField } from 'client/hooks/useClientForm';
import React from 'react';
import styled from 'styled-components';

const BoldSpan = styled.span`
  font-weight: bold;
`;

type Props = {
  update: UpdateSingleField;
  client_type: 'public' | 'confidential';
};

const ClientType: React.FC<Props> = ({ update, client_type }) => (
  <Box as="article">
    <SectionHeader>Client Type</SectionHeader>
    <RadioGroup onChange={(value) => update('client_type', value as string)} defaultValue={client_type}>
      <Stack direction="column">
        <Radio value="public">
          <Text>
            <BoldSpan>Public</BoldSpan> - Applikasjonen er åpent tilgjengelig, som f.eks. en mobil-app eller single page
            web application. For bruk med implicit grant flow eller PKCE
          </Text>
        </Radio>
        <Radio value="confidential">
          <Text>
            <BoldSpan>Confidential</BoldSpan> - Applikasjonen klarer opprettholde konfidensialiteten til
            client_secret-en. For bruk med ordinær authorization code flow
          </Text>
        </Radio>
      </Stack>
    </RadioGroup>
  </Box>
);

export default ClientType;
