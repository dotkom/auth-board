import React, { useContext } from 'react';
import BasicInformation from './components/BasicInformation';
import ExtendedInformation from './components/ExtendedInfo';  
import ClientOverview from './components/ClientOverview';
import ClientContext from './context/ClientContext';
import Menu from './components/common/Menu';
import { Spinner } from '@dotkomonline/design-system';
import Header from 'common/components/Header';
import styled from 'styled-components';

interface Props {
  clientId: number;
  subPage?: string;
}

enum PageNames {
  Overview = 'overview',
  BasicInformation = 'basicInfo',
  ExtendedInformation = 'extendedInfo',
}

const selectSubView = (name: string) => {
  switch (name) {
    case PageNames.Overview:
      return ClientOverview;
    case PageNames.BasicInformation:
      return BasicInformation;
    case PageNames.ExtendedInformation:
      return ExtendedInformation;
  }
};

const Content = styled.main`
  width: 50%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
`;

const ViewColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ClientView: React.FC<Props> = ({ clientId, subPage }) => {
  const { getClient, loading } = useContext(ClientContext);
  const client = getClient(Number(clientId));
  const pageName = subPage || PageNames.Overview;
  const CurrentView = selectSubView(pageName);

  if (loading) return <Spinner />;
  if (!client) return <p>Klient ikke funnet.</p>;
  return (
    <>
      <Header />
      <Content>
        <Menu id={clientId} active={subPage} />
        <ViewColumn>
          <CurrentView client={client} />
        </ViewColumn>
      </Content>
    </>
  );
};

export default ClientView;
