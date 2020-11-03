import { Button, TextField } from '@dotkomonline/design-system';
import useClientForm from 'client/hooks/useClientForm';
import React from 'react';
import SectionHeader from '../common/SectionHeader';
import URLsField from '../common/URLsField';
import { ClientViewProps } from '../types';

const ExtendedInfo: React.FC<ClientViewProps> = ({ client }) => {
  const { eventUpdateField, updateSingleField, post } = useClientForm(client.id);

  return (
    <>
      <SectionHeader>Hjemmeside for applikasjonen</SectionHeader>
      <TextField />
      <SectionHeader>Policy-URL</SectionHeader>
      <TextField />
      <SectionHeader>Kontakte-post</SectionHeader>
      <TextField onChange={(value) => eventUpdateField('', value)} />
      <SectionHeader>Post logout redirect URI</SectionHeader>
      <URLsField
        explanationText={''}
        buttonText="Legg til Post-logout Redirect URI"
        defaultUrls={[]}
        onChange={(value) => updateSingleField('post_redirect_uris', value)}
      />
      <Button onClick={post}>Lagre</Button>
    </>
  );
};

export default ExtendedInfo;
