import { get, patch, post } from 'common/utils/api';
import React, { useState } from 'react';
import { OidcClient } from '../models/model';

interface ClientContextType {
  clients: Record<number, OidcClient>;
  loading: boolean;
  getClient: (id: number) => OidcClient;
  getClients: () => Promise<void>;
  patchClient: (id: number, client: OidcClient) => Promise<void>;
  updateClient: (id: number) => Promise<void>;
  emptyContext: () => void;
}

const initialContext = {
  clients: {},
  loading: false,
  getClient: () => null,
  getClients: () => null,
  patchClient: () => null,
  updateClient: () => Promise.resolve(),
  emptyContext: () => null,
};

const ClientContext = React.createContext<ClientContextType>(initialContext);

const ClientProvider: React.FC = ({ children }) => {
  const [clients, setClients] = useState<Record<number, OidcClient>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const updateClient = async (id: number) => {
    setLoading(true);
    const client = await get<OidcClient>(`/oidc/clients/${id}/`);
    setClients({ ...clients, [id]: client });
    setLoading(false);
  };

  const emptyContext = () => setClients([]);

  const patchClient = async (id: number, client: OidcClient) => {
    await patch<OidcClient>(`/oidc/clients/${id}/`, client);
  };

  const getClient = (id: number) => {
    return clients[id];
  };

  const getClients = async () => {
    setLoading(true);
    const clients = await post<OidcClient[]>('/oidc/clients/get-own/', {});
    if (clients) {
      const clientsRecord = clients.reduce((acc, curr) => {
        return { ...acc, [curr.id]: curr };
      }, {});
      setClients(clientsRecord);
    }
    setLoading(false);
  };

  return (
    <ClientContext.Provider
      value={{
        clients,
        loading,
        getClient,
        getClients,
        patchClient,
        updateClient,
        emptyContext,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export { ClientProvider };

export default ClientContext;
