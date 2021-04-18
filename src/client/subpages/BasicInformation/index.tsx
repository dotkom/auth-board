import styled from 'styled-components';
import { ClientViewProps } from '../../types';
import React from 'react';
import useClientForm from 'client/hooks/useClientForm';
import SubPageHeader from 'client/components/SubPageHeader';
import NameInput from './NameInput';
import { Alert, Button, Stack } from '@chakra-ui/react';
import RedirectURIs from './RedirectURIs';
import ReuseConsent from './ReuseConsent';
import ClientType from './ClientType';
import ResponseTypeSelector from 'create/ResponseTypeSelector';

const PublicMessage = styled(Alert)`
  margin-top: 15px;
`;

const BasicInfo: React.FC<ClientViewProps> = ({ client }) => {
  const { updateSingleField, post, newClient } = useClientForm(client.id);
  return (
    <>
      <SubPageHeader>Basic Info</SubPageHeader>
      <Stack spacing="40px">
        <NameInput name={newClient?.name || client.name} update={updateSingleField} />
        <RedirectURIs redirect_uris={newClient?.redirect_uris || client.redirect_uris} update={updateSingleField} />
        <ReuseConsent reuse_consent={newClient?.require_consent || client.reuse_consent} update={updateSingleField} />
        <ClientType client_type={newClient?.client_type || client.client_type} update={updateSingleField} />
        <ResponseTypeSelector
          defaultValue={
            newClient?.authorization_grant_type ? newClient?.authorization_grant_type : client.authorization_grant_type
          }
          update={updateSingleField}
        />
        <Button maxW={{ sm: 'md' }} onClick={post} color="success">
          Lagre endringer
        </Button>
        <PublicMessage status="info">
          <div>
            <h3>Den meste informasjonen om registrerte applikasjoner og API-er er offentlig</h3>
            <p>
              Alle registerte applikasjoner og API-er er regnet som offentlig informasjon og dermed synlig for
              offentligheten, ikke bare brukere som er innlogget i din applikasjon. Derfor bør du være sikker på at du
              ikke har konfidensiell informasjon i beskrivelsen eller navngivingen av dine applikasjoner.
            </p>
          </div>
        </PublicMessage>
      </Stack>
    </>
  );
};

export default BasicInfo;
