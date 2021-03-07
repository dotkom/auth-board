import SubPageHeader from 'client/components/SubPageHeader';
import ClientContext from 'client/context/ClientContext';
import { ClientViewProps } from 'client/types';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import styled from 'styled-components';
import Confirmation from './Confirmation';

const SpacedText = styled.p`
  margin: 1rem 0;
`;

const Delete: React.FC<ClientViewProps> = ({ client }) => {
  const { deleteClient } = useContext(ClientContext);
  const router = useRouter();

  const deleteAndRedirect = async () => {
    await deleteClient(client.id);
    router.push('/clients');
  };

  return (
    <>
      <SubPageHeader>Delete</SubPageHeader>
      <SpacedText>Er du sikker på at du ønsker slette denne klienten?</SpacedText>
      <SpacedText>
        Du vil ikke kunne lage en ny klient med samme ID, og alle autoriseringer vil bli tilbakestilt.
      </SpacedText>
      <Confirmation deleteAndRedirect={deleteAndRedirect} />
    </>
  );
};

export default Delete;
