import { Card } from '@dotkomonline/design-system';
import { OidcClient } from 'client/models/model';
import styled, { css } from 'styled-components';
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

const GridText = styled.p`
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
  width: '70%',
  marginBottom: '15px',
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  gridTemplateRows: '1fr fr',
};

const ClientCard: React.FC<Props> = ({ client }) => (
  <Link href={`/clients/${client.id}`}>
    <Card style={CardStyle} as="a">
      <ImageWithDefault>
        <ClientLogo src={client.logo} alt="App-logo" />
      </ImageWithDefault>
      <UpperText>App: {client.name}</UpperText>
      <LowerText>ID: {client.client_id}</LowerText>
    </Card>
  </Link>
);

export default ClientCard;
