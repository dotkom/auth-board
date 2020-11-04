import CodeText from 'client/components/CodeText';
import SectionHeader from 'client/components/SectionHeader';
import { OidcClient } from 'client/models/model';
import React from 'react';

const ClientCredentials: React.FC<{ client: OidcClient }> = ({ client }) => {
  return (
    <>
      <SectionHeader>Client ID</SectionHeader>
      <CodeText>{client.client_id}</CodeText>
      <SectionHeader>Client Secret</SectionHeader>
      <CodeText>{client.client_secret}</CodeText>
      <SectionHeader>Redirect URI</SectionHeader>
      {client.redirect_uris.map((uri) => (
        <CodeText key={uri}>{uri}</CodeText>
      ))}
    </>
  );
};

export default ClientCredentials;
