import { Button, TextField } from '@dotkomonline/design-system';
import useClientForm from 'client/hooks/useClientForm';
import React from 'react';
import SectionHeader from '../../components/SectionHeader';
import URLsField from '../../components/URLsField';
import { ClientViewProps } from '../../types';
import { SpacedForm } from '../BasicInformation';

const ExtendedInfo: React.FC<ClientViewProps> = ({ client }) => {
  const { newClient, eventUpdateField, updateSingleField, post } = useClientForm(client.id);

  return (
    <SpacedForm>
      <article>
        <SectionHeader>Hjemmeside for applikasjonen</SectionHeader>
        <TextField />
      </article>
      <article>
        <SectionHeader>Policy-URL</SectionHeader>
        <TextField />
      </article>
      <article>
        <SectionHeader>Kontakt-e-postadresse</SectionHeader>
        <TextField onChange={(value) => eventUpdateField('', value)} />
      </article>
      <article>
        <SectionHeader>Post logout redirect URI</SectionHeader>
        <URLsField
          explanationText={''}
          buttonText="Legg til Post-logout Redirect URI"
          defaultUrls={newClient?.post_redirect_uris || []}
          onChange={(value) => updateSingleField('post_redirect_uris', value)}
        />
      </article>
      <Button onClick={post}>Lagre</Button>
    </SpacedForm>
  );
};

export default ExtendedInfo;
