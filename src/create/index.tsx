import { Button, Checkbox, RadioButton, RadioGroup, TextField } from '@dotkomonline/design-system';
import { ResponseTypes } from 'client/components/ResponseTypes';
import SectionHeader from 'client/components/SectionHeader';
import { OidcClient } from 'client/models/model';
import { post } from 'common/utils/api';
import { getClientsOverviewUrl } from 'common/utils/urls';
import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.section`
  width: 70%;
  margin: auto;
  > * {
    margin: 1% 0;
  }
`;

const NameInput = styled(TextField)`
  width: 30%;
`;

const RedirectInput = styled(TextField)`
  width: 50%;
`;

const CompleteFormArticle = styled.article`
  margin-top: 3%;
`;

const CreateForm: React.FC = () => {
  const [newApplication, setNewApplication] = useState<Partial<OidcClient> | null>(null);
  const [hasAgreed, setHasAgreed] = useState<boolean>(false);

  const createNewApplication = async () => {
    const response = post<Partial<OidcClient>>('/oidc/clients/', newApplication);
    console.log('resp', response);
  };

  const updateSingleField = (key, value) => {
    setNewApplication({ ...newApplication, [key]: value });
  };

  const eventUpdateField = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
    // For use with pure HTML-change events and not prefiltered events.
    updateSingleField(key, e.currentTarget.value);
  };

  return (
    <FormWrapper>
      <h2>Registrer ny applikasjon</h2>
      <article>
        <p>Du er i ferd med å lage en ny applikasjon for å aksessere Onlineweb4-data.</p>
        <p>
          Gi din applikasjon et kort, beskrivende navn og en lenger beskrivelse som forklarer hva din applikasjon gjør.
        </p>
      </article>
      <article>
        <SectionHeader>Navn</SectionHeader>
        <NameInput
          placeholder="Kort, beskrivende navn"
          value={newApplication?.name}
          onChange={(value) => eventUpdateField('name', value)}
        />
      </article>
      <article>
        <SectionHeader>OAuth 2.0 Redirect URL</SectionHeader>
        <RedirectInput
          placeholder="https://dinapplikasjon.no/callback"
          value={newApplication?.redirect_uris}
          onChange={(value: React.ChangeEvent<HTMLInputElement>) =>
            updateSingleField('redirect_uris', [value.currentTarget.value])
          }
        />
      </article>
      <article>
        <SectionHeader>Response type</SectionHeader>
        <RadioGroup onChange={(value) => updateSingleField('response_types', [value])}>
          {ResponseTypes.map((responseType) => (
            <RadioButton key={responseType.id} value={String(responseType.id)}>
              {responseType.description}
            </RadioButton>
          ))}
        </RadioGroup>
      </article>
      <CompleteFormArticle>
        <Checkbox label="Aksepter vilkår for bruk" onChange={setHasAgreed} />
        <div>
          <Link {...getClientsOverviewUrl()} passHref={true}>
            <Button variant="outline">Avbryt</Button>
          </Link>
          <Button disabled={!hasAgreed} onClick={createNewApplication}>
            Registrer ny applikasjon
          </Button>
        </div>
      </CompleteFormArticle>
    </FormWrapper>
  );
};

export default CreateForm;
