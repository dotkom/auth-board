import { Button, TextField } from '@dotkomonline/design-system';
import ControlledSpacedForm from 'client/components/SpacedForm';
import SubPageHeader from 'client/components/SubPageHeader';
import useClientForm from 'client/hooks/useClientForm';
import React from 'react';
import SectionHeader from '../../components/SectionHeader';
import URLsField from '../../components/URLsField';
import { ClientViewProps } from '../../types';

const ExtendedInfo: React.FC<ClientViewProps> = ({ client }) => {
  const { eventUpdateField, updateSingleField, post } = useClientForm(client.id);

  return (
    <>
      <SubPageHeader>Extended Info</SubPageHeader>
      <ControlledSpacedForm>
        <article>
          <SectionHeader>Hjemmeside for applikasjonen</SectionHeader>
          <TextField placeholder="https://online.ntnu.no" />
        </article>
        <article>
          <SectionHeader>Policy-URL</SectionHeader>
          <TextField placeholder="https://online.ntnu.no/privacy" />
        </article>
        <article>
          <SectionHeader>Kontakt-e-postadresse</SectionHeader>
          <TextField placeholder="dotkom@online.ntnu.no" onChange={(value) => eventUpdateField('', value)} />
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
        <Button color="success" onClick={post}>
          Lagre
        </Button>
      </ControlledSpacedForm>
    </>
  );
};

export default ExtendedInfo;
