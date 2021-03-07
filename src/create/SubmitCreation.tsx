import { Box, Button, Checkbox, Flex, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { getClientsOverviewUrl } from 'common/utils/urls';
import Link from 'next/link';
import React, { useState } from 'react';

type Props = {
  submit: () => void;
};

const SubmitCreation: React.FC<Props> = ({ submit }) => {
  const [hasAgreed, setHasAgreed] = useState<boolean>(false);
  return (
    <Box as="article">
      <Checkbox onChange={(e) => setHasAgreed(e.target.checked)}>Aksepter vilkår for bruk</Checkbox>
      <Flex>
        <LinkBox>
          <Link {...getClientsOverviewUrl()}>
            <LinkOverlay>
              <Button variant="outline">Avbryt</Button>
            </LinkOverlay>
          </Link>
        </LinkBox>
        <Button disabled={!hasAgreed} onClick={submit}>
          Registrer ny applikasjon
        </Button>
      </Flex>
    </Box>
  );
};

export default SubmitCreation;
