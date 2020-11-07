import { Button, Icon } from '@dotkomonline/design-system';
import ClientContext from 'client/context/ClientContext';
import { getCreateAppUrl } from 'common/utils/urls';
import Link from 'next/link';
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../common/components/Header';
import ClientList from './components/List';

const ListWrapper = styled.div`
  margin: 5% auto auto;
  width: 50%;
`;

const ButtonWrapper = styled(Button)`
  margin-bottom: 10px;
`;

const Overview: React.FC = () => {
  const { getClients } = useContext(ClientContext);

  useEffect(() => {
    getClients();
  }, []);

  return (
    <>
      <Header />
      <ListWrapper>
        <Link {...getCreateAppUrl()} passHref={true}>
          <ButtonWrapper>
            <Icon name="add" />
            <p style={{ display: 'inline', verticalAlign: 'middle' }}>Registrer ny applikasjon</p>
          </ButtonWrapper>
        </Link>
        <ClientList />
      </ListWrapper>
    </>
  );
};

export default Overview;
