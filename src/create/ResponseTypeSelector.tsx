import { RadioGroup, Stack, Radio, Box } from '@chakra-ui/react';
import { ResponseTypes } from 'client/components/ResponseTypes';
import SectionHeader from 'client/components/SectionHeader';
import React from 'react';

type Props = {
  defaultValue?: string;
  update: (key: string, value: unknown) => void;
};

const ResponseTypeSelector: React.FC<Props> = ({ update, defaultValue }) => (
  <Box as="article">
    <SectionHeader>Response type</SectionHeader>
    <RadioGroup onChange={(value) => update('authorization_grant_type', value)} defaultValue={defaultValue}>
      <Stack direction="column">
        {ResponseTypes.map((responseType) => (
          <Radio key={responseType} value={responseType}>
            {responseType}
          </Radio>
        ))}
      </Stack>
    </RadioGroup>
  </Box>
);

export default ResponseTypeSelector;
