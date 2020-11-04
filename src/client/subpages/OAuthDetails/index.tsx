import React from 'react';
import { ClientViewProps } from 'client/types';
import ClientCredentials from './ClientCredentials';
import SubPageHeader from 'client/components/SubPageHeader';
import styled from 'styled-components';
import OIDC from './OIDC';
import OAuth from './OAuth';

const TwoColumnsWithTopSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 2fr;
  grid-gap: 10px 50px;
`;

const TopSection = styled.section`
  grid-column: 1 / span 2;
  grid-row-start: 1;
`;

const LeftColumn = styled.section`
  grid-column: 1;
  grid-row-start: 2;
`;

const RightColumn = styled.section`
  grid-column: 2;
  grid-row-start: 2;
`;

const OAuthDetails: React.FC<ClientViewProps> = ({ client }) => (
  <TwoColumnsWithTopSection>
    <TopSection>
      <SubPageHeader>OAuth 2.0 og OpenID Connect</SubPageHeader>
      <p>
        All APIs at Dataporten are protected with OAuth 2.0. The first thing you would need to configure in your client
        is the OAuth 2.0 flow to let your client obtain an OAuth token for the current user, and then your client may
        use this token to access the various APIs.
      </p>
    </TopSection>
    <LeftColumn>
      <ClientCredentials client={client} />
    </LeftColumn>
    <RightColumn>
      <OAuth />
      <OIDC />
    </RightColumn>
  </TwoColumnsWithTopSection>
);

export default OAuthDetails;
