import React, { useContext, useState } from 'react';
import BasicInformation from './subpages/BasicInformation';
import ExtendedInformation from './subpages/ExtendedInfo';
import ClientOverview from './subpages/ClientOverview';
import OauthDetails from './subpages/OAuthDetails';
import ClientContext from './context/ClientContext';
import Menu from './components/Menu';
import { Spinner } from '@dotkomonline/design-system';
import Header from 'common/components/Header';
import styled from 'styled-components';
import { CenterSpinnerWrapper } from 'common/components/RequiresLogin';

interface Props {
  clientId: number;
  subPage?: string;
}

enum PageNames {
  Overview = 'overview',
  BasicInformation = 'basicInfo',
  ExtendedInformation = 'extendedInfo',
  OauthDetails = 'oauthDetails',
}

const selectSubView = (name: string) => {
  switch (name) {
    case PageNames.Overview:
      return ClientOverview;
    case PageNames.BasicInformation:
      return BasicInformation;
    case PageNames.ExtendedInformation:
      return ExtendedInformation;
    case PageNames.OauthDetails:
      return OauthDetails;
  }
};

const Content = styled.main`
  width: 80%;
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
  const { getClient, loading, getClients } = useContext(ClientContext);
  const [haveTriedFetching, setHaveTriedFetching] = useState<boolean>(false);
  const client = getClient(Number(clientId));
  const pageName = subPage || PageNames.Overview;
  const CurrentView = selectSubView(pageName);

  if (loading)
    return (
      <CenterSpinnerWrapper>
        <Spinner />
      </CenterSpinnerWrapper>
    );
  if (!client) {
    if (!haveTriedFetching) {
      setHaveTriedFetching(true);
      getClients();
    }
    return <p>Klient ikke funnet.</p>;
  }
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
