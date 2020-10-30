import { TextField, Button, Icon } from '@dotkomonline/design-system';
import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  callbacks: string[];
  onChange: (callbackUrls: string[]) => void;
}

const URL = styled.div`
  display: flex;
  flex-direction: row;
  margin: 3px 0;
`;

const Explanation = styled.p`
  margin-bottom: 5px;
`;

const Callbacks: React.FC<Props> = ({ callbacks, onChange }) => {
  const [urls, setUrls] = useState<string[]>(callbacks);
  const onBlur = (id: number, event: React.FocusEvent<HTMLInputElement>) => {
    const newCallbacks = [...urls.filter((url) => url !== '')]; // Prune empty URL fields.
    newCallbacks[id] = event.currentTarget.value;
    onChange(newCallbacks);
  };

  return (
    <div>
      <Explanation>
        Legg inn dine OAuth 2.0 redirect_uri. Dette er URL-en hvor brukeren vil bli videresendt etter en suksessfull
        autentisering
      </Explanation>
      <Button onClick={() => setUrls([...urls, ''])}>
        <Icon name="add" />
        Legg til Redirect_URI
      </Button>
      {urls.map((callback, index) => (
        <URL key={index}>
          <TextField placeholder={callback} onBlur={(e) => onBlur(index, e)} />
          <Button onClick={() => setUrls(urls.filter((_, iter) => index !== iter))}>
            <Icon name="clear" />
          </Button>
        </URL>
      ))}
    </div>
  );
};

export default Callbacks;
