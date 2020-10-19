import { Button, Checkbox, RadioButton, RadioGroup, TextArea, TextField } from '@dotkomonline/design-system';
import { ResponseTypes } from 'client/components/common/ResponseTypes';
import { OidcClient } from 'client/models/model';
import { post } from 'common/utils/api';
import { getClientsOverviewUrl } from 'common/utils/urls';
import Link from 'next/link';
import React, { useState } from 'react';

const CreateForm: React.FC = () => {
  const [newApplication, setNewApplication] = useState<Partial<OidcClient> | null>(null);
  const [hasAgreed, setHasAgreed] = useState<boolean>(false);

  const createNewApplication = async () => {
    post<Partial<OidcClient>>('/oidc/clients/', newApplication);
  };

  const updateSingleField = (key, value) => {
    setNewApplication({ ...newApplication, [key]: value });
  };

  const eventUpdateField = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
    // For use with pure HTML-change events and not prefiltered events.
    updateSingleField(key, e.currentTarget.value);
  };

  return (
    <>
      <h2>Registrer ny applikasjon</h2>
      <p>Du er i ferd med å lage en ny applikasjon for å aksessere Onlineweb4-data.</p>
      <p>
        Gi din applikasjon et kort, beskrivende navn og en lenger beskrivelse som forklarer hva din applikasjon gjør.
      </p>
      <p>Navn</p>
      <TextField
        placeholder="Kort, beskrivende navn"
        value={newApplication?.name}
        onChange={(value) => eventUpdateField('name', value)}
      />
      <p>Beskrivelse</p>
      <TextArea placeholder="Lenger beskrivelse" />
      <p>OAuth 2.0 Redirect URL</p>
      <TextField
        placeholder="https://dinapplikasjon.no/callback"
        value={newApplication?.redirect_uris}
        onChange={(value) => eventUpdateField('redirect_uris', value)}
      />
      <p>Response type</p>
      <RadioGroup onChange={(value) => updateSingleField('response_types', [value])}>
        {ResponseTypes.map((responseType) => (
          <RadioButton value={String(responseType.id)}>{responseType.description}</RadioButton>
        ))}
      </RadioGroup>
      <Checkbox label="Aksepter vilkår for bruk" onChange={setHasAgreed} />
      <div>
        <Link {...getClientsOverviewUrl()} passHref={true}>
          <Button variant="outline">Avbryt</Button>
        </Link>
        <Button disabled={!hasAgreed} onClick={createNewApplication}>
          Registrer ny applikasjon
        </Button>
      </div>
    </>
  );
};

export default CreateForm;
