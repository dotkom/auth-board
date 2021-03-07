import { Button, Icon } from '@dotkomonline/design-system';
import SubPageHeader from 'client/components/SubPageHeader';
import ClientContext from 'client/context/ClientContext';
import { ClientViewProps } from 'client/types';
import React, { useContext } from 'react';
import styled from 'styled-components';

const SpacedText = styled.p`
  margin: 1rem 0;
`;

const SmallButton = styled(Button)`
  width: max-content;
`;

const Delete: React.FC<ClientViewProps> = ({ client }) => {
  const { deleteClient } = useContext(ClientContext);
  return (
    <>
      <SubPageHeader>Delete</SubPageHeader>
      <SpacedText>Er du sikker på at du ønsker slette denne klienten?</SpacedText>
      <SpacedText>
        Du vil ikke kunne lage en ny klient med samme ID, og alle autoriseringer vil bli tilbakestilt.
      </SpacedText>
      <SmallButton color="danger" onClick={() => console.log('cli', client.id)}>
        <Icon name="warning" />
        Slett denne klienten, jeg vet hva jeg gjør
      </SmallButton>
    </>
  );
};

export default Delete;
