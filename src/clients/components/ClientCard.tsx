import { Card } from '@dotkomonline/design-system';
import { OidcClient } from 'client/models/model';
import styled from 'styled-components';
import Link from 'next/link';
import React from 'react';
import ImageWithDefault from 'common/components/ImageWithDefault';

interface Props {
  client: OidcClient;
}

const ClientLogo = styled.img`
  grid-column: 1;
  grid-row: 1 / span 2;
  width: 96px;
  justify-self: center;
`;

const GridText = styled.div`
  grid-column: 2;
  justify-self: baseline;
`;

const UpperText = styled(GridText)`
  grid-row: 1;
`;
const LowerText = styled(GridText)`
  grid-row: 2;
`;

const CardStyle = {
  width: '100%',
  height: '150px',
  marginBottom: '15px',
  display: 'grid',
  gridTemplateColumns: '0.5fr 2fr',
  gridTemplateRows: '1fr fr',
};

const LogoWrapper = styled.div`
  margin: auto;
`;

const ApplicationName = styled.h3`
  font-size: 20px;
  font-family: Poppins;
  font-weight: medium;
`;

const ClientCard: React.FC<Props> = ({ client }) => (
  <Link href={`/clients/${client.id}`}>
    <Card style={CardStyle} as="a">
      <LogoWrapper>
        <ImageWithDefault width="100px">
          <ClientLogo src={client.logo} alt="App-logo" />
        </ImageWithDefault>
      </LogoWrapper>
      <UpperText>
        <ApplicationName>{client.name}</ApplicationName>
        <p>ID: {client.client_id}</p>
      </UpperText>
      <LowerText>Opprettet: {client.date_created}</LowerText>
    </Card>
  </Link>
);

export default ClientCard;
