import { Button, Checkbox, Input, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import SectionHeader from 'client/components/SectionHeader';
import { OidcClient } from 'client/models/model';
import { post } from 'common/utils/api';
import { getClientsOverviewUrl } from 'common/utils/urls';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import Intro from './Intro';
import ResponseTypeSelector from './ResponseTypeSelector';
import SubmitCreation from './SubmitCreation';

const FormWrapper = styled.section`
  width: 70%;
  margin: auto;
  > * {
    margin: 1% 0;
  }
`;

const CompleteFormArticle = styled.article`
  margin-top: 3%;
`;

const CreateForm: React.FC = () => {
  const [newApplication, setNewApplication] = useState<Partial<OidcClient> | null>(null);
  const [error, setError] = useState<string>(null);
  const router = useRouter();

  const createNewApplication = async () => {
    setError(null);
    const response = await post<Partial<OidcClient>>('/oidc/clients/', newApplication);
    if (response && response.id) {
      router.push(`/clients/${response.id}`);
    } else {
      setError(
        'Kunne ikke opprette ny klient. Sjekk at alle feltene er OK og prøv på nytt. Om feilen vedvarer, kontakt dotkom@online.ntnu.no'
      );
    }
  };

  const updateSingleField = (key, value) => {
    setNewApplication({ ...newApplication, [key]: value });
  };

  const eventUpdateField = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
    // For use with pure HTML-change events and not prefiltered events.
    updateSingleField(key, e.currentTarget.value);
  };

  return (
    <Stack maxW={{ sm: '4xl' }} direction="column" spacing="10px" mx={{ sm: 'auto' }} mt="12px">
      <Intro error={error} />
      <article>
        <SectionHeader>Navn</SectionHeader>
        <Input
          placeholder="Kort, beskrivende navn"
          defaultValue={newApplication?.name}
          onChange={(value) => eventUpdateField('name', value)}
          required
        />
      </article>
      <article>
        <SectionHeader>OAuth 2.0 Redirect URL</SectionHeader>
        <Input
          placeholder="https://dinapplikasjon.no/callback"
          defaultValue={newApplication?.redirect_uris}
          onChange={(value: React.ChangeEvent<HTMLInputElement>) =>
            updateSingleField('redirect_uris', [value.currentTarget.value])
          }
          required
        />
      </article>
      <ResponseTypeSelector update={updateSingleField} />
      <SubmitCreation submit={createNewApplication} />
    </Stack>
  );
};

export default CreateForm;
