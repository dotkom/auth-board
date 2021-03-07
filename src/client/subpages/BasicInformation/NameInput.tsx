import { Box, Input } from '@chakra-ui/react';
import SectionHeader from 'client/components/SectionHeader';
import { UpdateSingleField } from 'client/hooks/useClientForm';
import React from 'react';

type Props = {
  update: UpdateSingleField;
  name: string;
};

const NameInput: React.FC<Props> = ({ update, name }) => (
  <Box as="article">
    <SectionHeader>Navn</SectionHeader>
    <Input placeholder={name} onChange={(event) => update('name', event.target.value)} defaultValue={name} />
  </Box>
);

export default NameInput;
