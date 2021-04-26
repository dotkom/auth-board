import { get, patch, post, deleteR } from 'common/utils/api';
import React, { useState } from 'react';
import { OidcClient } from '../models/model';

interface ClientContextType {
  clients: Record<number, OidcClient>;
  loading: boolean;
  getClient: (id: number) => OidcClient;
  getClients: () => Promise<void>;
  patchClient: (id: number, client: OidcClient) => Promise<void>;
  updateClient: (id: number) => Promise<void>;
  deleteClient: (id: number) => Promise<void>;
  emptyContext: () => void;
}

const initialContext = {
  clients: {},
  loading: false,
  getClient: () => null,
  getClients: () => null,
  patchClient: () => null,
  updateClient: () => Promise.resolve(),
  deleteClient: () => null,
  emptyContext: () => null,
};

const ClientContext = React.createContext<ClientContextType>(initialContext);

const ClientProvider: React.FC = ({ children }) => {
  const [clients, setClients] = useState<Record<number, OidcClient>>({});
  const [loading, setLoading] = useState<boolean>(false);

  const updateClient = async (id: number) => {
    setLoading(true);
    const client = await get<OidcClient>(`/sso/confidential/${id}/`);
    setClients({ ...clients, [id]: client });
    setLoading(false);
  };

  const emptyContext = () => setClients([]);

  const patchClient = async (id: number, client: OidcClient) => {
    await patch<OidcClient>(`/sso/confidential/${id}/`, client);
  };

  const deleteClient = async (id: number) => {
    await deleteR(`/sso/confidential/${id}/`);
  };

  const getClient = (id: number) => {
    return clients[id];
  };

  const getClients = async () => {
    setLoading(true);
    const clients = await get<OidcClient[]>('/sso/confidential/');
    if (clients && Array.isArray(clients)) {
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
        deleteClient,
        emptyContext,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export { ClientProvider };

export default ClientContext;
