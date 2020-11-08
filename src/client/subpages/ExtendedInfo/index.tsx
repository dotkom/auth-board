import { Button, TextField } from '@dotkomonline/design-system';
import ControlledSpacedForm from 'client/components/SpacedForm';
import useClientForm from 'client/hooks/useClientForm';
import React from 'react';
import SectionHeader from '../../components/SectionHeader';
import URLsField from '../../components/URLsField';
import { ClientViewProps } from '../../types';

const ExtendedInfo: React.FC<ClientViewProps> = ({ client }) => {
  const { newClient, eventUpdateField, updateSingleField, post } = useClientForm(client.id);

  return (
    <ControlledSpacedForm>
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
          defaultUrls={['Ikke implementert']}
          onChange={(value) => updateSingleField('post_redirect_uris', value)}
        />
      </article>
      <Button onClick={post}>Lagre</Button>
    </ControlledSpacedForm>
  );
};

export default ExtendedInfo;
