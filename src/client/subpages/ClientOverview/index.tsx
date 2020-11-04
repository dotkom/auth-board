import ImageWithDefault from 'common/components/ImageWithDefault';
import { ClientViewProps } from '../../types';
import React from 'react';
import SubPageHeader from '../../components/SubPageHeader';
import styled from 'styled-components';
import CodeText from '../../components/CodeText';

const RegularListEntry = styled.li`
  list-style: initial;
  margin: 0 25px;
`;

const RegularList = styled.ul`
  list-style: initial;
  padding: 0 20px;
`;

const OverviewImageWrapper = styled.div`
  position: absolute;
  right: 0px;
  top: 50px;
  width: 150px;
  height: 150px;
  border: 1px solid grey;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RedirectSection = styled.section`
  margin: 15px 0;
`;

const ClientOverview: React.FC<ClientViewProps> = ({ client }) => {
  return (
    <>
      <div>
        <SubPageHeader>{client.name}</SubPageHeader>
        <p>
          Client ID: <CodeText>{client.client_id}</CodeText>
        </p>
      </div>
      <RedirectSection>
        <p>Redirect URIs:</p>
        <RegularList>
          {client.redirect_uris.map((url) => (
            <RegularListEntry key={url}>{url}</RegularListEntry>
          ))}
        </RegularList>
      </RedirectSection>
      <p>Opprettet: {client.date_created}</p>
      <OverviewImageWrapper>
        <ImageWithDefault>
          <img src={client.logo} />
        </ImageWithDefault>
      </OverviewImageWrapper>
    </>
  );
};

export default ClientOverview;
