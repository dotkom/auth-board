import ClientContext from 'client/context/ClientContext';
import { OidcClient } from 'client/models/model';
import { useContext, useState } from 'react';

const useClientForm = (clientId: number) => {
  const [newClient, setNewClient] = useState<OidcClient>(null);
  const { patchClient } = useContext(ClientContext);

  const updateSingleField = (key: string, value: string | boolean | string[]) => {
    setNewClient({ ...newClient, [key]: value });
  };

  const post = () => {
    patchClient(clientId, newClient);
  };
  const eventUpdateField = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
    // For use with pure HTML-change events and not prefiltered events.
    updateSingleField(key, e.currentTarget.value);
  };
  return {
    newClient,
    updateSingleField,
    eventUpdateField,
    post,
  };
};

export default useClientForm;
