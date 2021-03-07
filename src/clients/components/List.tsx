import ClientContext from 'client/context/ClientContext';
import { OidcClient } from 'client/models/model';
import { useContext } from 'react';
import ClientCard from './ClientCard';
import React from 'react';
import { Stack } from '@chakra-ui/react';

interface Props {
  clients?: OidcClient[];
}

const ClientList: React.FC<Props> = () => {
  const { clients } = useContext(ClientContext);
  if (!Object.keys(clients).length) return <p>Du eier ingen applikasjoner.</p>;
  return (
    <Stack spacing="6px" direction="column">
      {Object.values(clients).map((client) => {
        return <ClientCard client={client} key={client.id} />;
      })}
    </Stack>
  );
};

export default ClientList;
