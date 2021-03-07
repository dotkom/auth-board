import { AddIcon } from '@chakra-ui/icons';
import { Button, LinkBox, LinkOverlay, Stack } from '@chakra-ui/react';
import ClientContext from 'client/context/ClientContext';
import { getCreateAppUrl } from 'common/utils/urls';
import Link from 'next/link';
import React, { useContext, useEffect } from 'react';
import Header from '../common/components/Header';
import ClientList from './components/List';

const Overview: React.FC = () => {
  const { getClients } = useContext(ClientContext);

  useEffect(() => {
    getClients();
  }, []);

  return (
    <>
      <Header />
      <Stack maxW={{ sm: '3xl' }} mx="auto" w={{ sm: 'full' }} spacing="12px" direction="column">
        <LinkBox>
          <Link {...getCreateAppUrl()} passHref={true}>
            <LinkOverlay>
              <Button leftIcon={<AddIcon />}>Registrer ny applikasjon</Button>
            </LinkOverlay>
          </Link>
        </LinkBox>
        <ClientList />
      </Stack>
    </>
  );
};

export default Overview;
