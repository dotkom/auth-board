import { Box } from '@chakra-ui/react';
import SectionHeader from 'client/components/SectionHeader';
import URLsField from 'client/components/URLsField';
import { UpdateSingleField } from 'client/hooks/useClientForm';
import React from 'react';

type Props = {
  redirect_uris?: string[];
  update: UpdateSingleField;
};

const explanationText =
  'Legg inn dine OAuth 2.0 redirect_uri. Dette er URL-en hvor brukeren vil bli videresendt etter en suksessfull autentisering';

const RedirectURIs: React.FC<Props> = ({ redirect_uris, update }) => (
  <Box as="article">
    <SectionHeader>Redirect URIs:</SectionHeader>
    <URLsField
      defaultUrls={redirect_uris || []}
      onChange={(value) => update('redirect_uris', value)}
      explanationText={explanationText}
      buttonText={'Legg til Redirect_URL'}
    />
  </Box>
);

export default RedirectURIs;
