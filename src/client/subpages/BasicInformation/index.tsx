import { Checkbox, TextArea, TextField, RadioGroup, RadioButton, Button, Message } from '@dotkomonline/design-system';
import styled from 'styled-components';
import { ResponseTypes } from '../../components/ResponseTypes';
import { ClientViewProps } from '../../types';
import React from 'react';
import SectionHeader from '../../components/SectionHeader';
import URLsField from '../../components/URLsField';
import useClientForm from 'client/hooks/useClientForm';

const BoldSpan = styled.span`
  font-weight: bold;
`;

const PublicMessage = styled(Message)`
  margin-top: 15px;
`;

const SpacedForm = styled.form`
  > * {
    margin: 15px 0;
  }
`;

const explanationText =
  'Legg inn dine OAuth 2.0 redirect_uri. Dette er URL-en hvor brukeren vil bli videresendt etter en suksessfull autentisering';

const BasicInfo: React.FC<ClientViewProps> = ({ client }) => {
  const { eventUpdateField, updateSingleField, post, newClient } = useClientForm(client.id);

  return (
    <SpacedForm>
      <SectionHeader>Navn</SectionHeader>
      <TextField
        placeholder={client.name}
        onChange={(value) => eventUpdateField('name', value)}
        value={newClient?.name || client.name}
      />
      <SectionHeader>Beskrivelse</SectionHeader>
      <TextArea />
      <SectionHeader>Redirect URIs:</SectionHeader>
      <URLsField
        defaultUrls={client.redirect_uris || []}
        onChange={(value) => updateSingleField('redirect_uris', value)}
        explanationText={explanationText}
        buttonText={'Legg til Redirect_URL'}
      />
      <div>
        <Checkbox
          label="Krev brukerinteraksjon"
          defaultChecked={client.reuse_consent}
          onChange={(value) => updateSingleField('require_consent', value)}
        />
        <p>
          Krev at sluttbruker alltid må interagere med Onlineweb4 under autentisering og autorisering. Skru av dette for
          å legge til støtte for login_hint og &quot;passive authentication requests&quot;.
        </p>
      </div>
      <SectionHeader>Client Type</SectionHeader>
      <RadioGroup onChange={(value) => updateSingleField('client_type', value)}>
        <RadioButton value="public" checked={client.client_type === 'public'}>
          <p>
            <BoldSpan>Public</BoldSpan> - Applikasjonen er åpent tilgjengelig, som f.eks. en mobil-app eller single page
            web application. For bruk med implicit grant flow eller PKCE
          </p>
        </RadioButton>
        <RadioButton value="confidential" checked={client.client_type === 'confidential'}>
          <p>
            <BoldSpan>Confidential</BoldSpan> - Applikasjonen klarer opprettholde konfidensialiteten til
            client_secret-en. For bruk med ordinær authorization code flow
          </p>
        </RadioButton>
      </RadioGroup>
      <SectionHeader>Response Type</SectionHeader>
      <RadioGroup onChange={(value) => updateSingleField('response_types', [value])}>
        {ResponseTypes.map((responseType) => (
          <RadioButton
            key={responseType.id}
            value={String(responseType.id)}
            checked={client.response_types[0].id === responseType.id}
          >
            {responseType.description}
          </RadioButton>
        ))}
      </RadioGroup>
      <Button onClick={post}>Lagre endringer</Button>
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
    </SpacedForm>
  );
};

export default BasicInfo;
