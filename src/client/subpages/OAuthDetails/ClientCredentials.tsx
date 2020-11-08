import CodeText from 'client/components/CodeText';
import SectionHeader from 'client/components/SectionHeader';
import { OidcClient } from 'client/models/model';
import React from 'react';
import styled from 'styled-components';

const Column = styled.article`
  display: flex;
  flex-direction: column;
  & > span {
    width: max-content;
    margin: 2px 0;
  }
`;

const ClientCredentials: React.FC<{ client: OidcClient }> = ({ client }) => {
  return (
    <>
      <SectionHeader>Client ID</SectionHeader>
      <CodeText>{client.client_id}</CodeText>
      <SectionHeader>Client Secret</SectionHeader>
      <CodeText>{client.client_secret}</CodeText>
      <SectionHeader>Redirect URI</SectionHeader>
      <Column>
        {client.redirect_uris.map((uri) => (
          <CodeText key={uri}>{uri}</CodeText>
        ))}
      </Column>
    </>
  );
};

export default ClientCredentials;
