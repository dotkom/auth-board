import { Button } from '@dotkomonline/design-system';
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
      <Link {...getCreateAppUrl()} passHref={true}>
        <Button>Registrer ny applikasjon</Button>
      </Link>
      <ClientList />
    </>
  );
};

export default Overview;
