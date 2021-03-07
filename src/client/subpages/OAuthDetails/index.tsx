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

const GeneralInfo = styled.p`
  margin: 1rem;
  padding: 1rem;
  background-color: darkgray;
  border-radius: 15px;
`;

const OAuthDetails: React.FC<ClientViewProps> = ({ client }) => (
  <TwoColumnsWithTopSection>
    <TopSection>
      <SubPageHeader>OAuth 2.0 og OpenID Connect</SubPageHeader>
      <GeneralInfo>
        Flere av API-endepunktene på Onlineweb4 er beskyttet med OAuth 2.0. Det første du må konfigurere i din klient er
        hvilken OAuth 2.0 flow skal bruke til å skaffe en OAuth token for den aktive brukeren, for deretter å bruke
        denne tokenen til å aksessere de ulike API-endepunktene.
      </GeneralInfo>
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
