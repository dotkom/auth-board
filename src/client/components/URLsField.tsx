import { AddIcon, CloseIcon } from '@chakra-ui/icons';
import { Button, Input, InputGroup, InputRightAddon } from '@chakra-ui/react';
import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  defaultUrls: string[];
  onChange: (callbackUrls: string[]) => void;
  explanationText: string;
  buttonText: string;
}

const URL = styled.div`
  display: flex;
  flex-direction: row;
  margin: 3px 0;
`;

const Explanation = styled.p`
  margin-bottom: 5px;
`;

const URLsField: React.FC<Props> = ({ defaultUrls, onChange, explanationText, buttonText }) => {
  const [urls, setUrls] = useState<string[]>(defaultUrls);
  const onBlur = (id: number, event: React.FocusEvent<HTMLInputElement>) => {
    const newUrls = [...urls.filter((url) => url !== '')]; // Prune empty URL fields.
    newUrls[id] = event.currentTarget.value;
    onChange(newUrls);
  };

  return (
    <div>
      <Explanation>{explanationText}</Explanation>
      <Button onClick={() => setUrls([...urls, ''])}>
        <AddIcon />
        {buttonText}
      </Button>
      {urls.map((url, index) => (
        <InputGroup key={index}>
          <Input placeholder={url} onBlur={(e) => onBlur(index, e)} />
          <InputRightAddon>
            <Button onClick={() => setUrls(urls.filter((_, iter) => index !== iter))}>
              <CloseIcon />
            </Button>
          </InputRightAddon>
        </InputGroup>
      ))}
    </div>
  );
};

export default URLsField;
