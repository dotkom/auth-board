import { OidcClient } from 'client/models/model';
import { LinkBox, LinkOverlay, SimpleGrid } from '@chakra-ui/react';
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
  align-self: end;
`;

const Card = styled(LinkBox)`
  padding: 10px;
  width: 100%;
  height: 150px;
  margin-bottom: 15px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  transition: 0.2s;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
`;

const LogoWrapper = styled.div`
  margin: auto;
`;

const ApplicationName = styled.h3`
  font-size: 20px;
  font-family: Poppins;
  font-weight: medium;
`;

const ClientCard: React.FC<Props> = ({ client }) => (
  <Card>
    <Link href={`/clients/${client.id}`}>
      <LinkOverlay>
        <SimpleGrid templateColumns="0.5fr 2fr" templateRows="1fr 1fr" h="100%">
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
        </SimpleGrid>
      </LinkOverlay>
    </Link>
  </Card>
);

export default ClientCard;
