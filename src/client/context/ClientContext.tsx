import { get, patch, post } from "common/utils/api";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { OidcClient } from "../models/model";

interface ClientContextType {
    clients: Record<number, OidcClient>;
    loading: boolean;
    getClient: (id: number) => OidcClient;
    patchClient: (id: number, client: OidcClient) => Promise<void>;
    updateClient: (id: number) => Promise<void>;
}

const initialContext = {
    clients: {},
    loading: false,
    getClient: () => null,
    patchClient: () => null,
    updateClient: () => Promise.resolve(),
}

const ClientContext = React.createContext<ClientContextType>(initialContext)

const ClientProvider: React.FC = ({ children }) => {
    const [clients, setClients] = useState<Record<number, OidcClient>>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const updateClient = async (id: number) => {
        setLoading(true);
        const client = await get<OidcClient>(`/oidc/clients/${id}`);
        setClients({ ...clients, [id]: client  });
        setLoading(false);
    }

    const patchClient = async (id: number, client: OidcClient) => {
        const response = await patch<OidcClient>(`/oidc/clients/${id}`, client);
    }

    const getClient = (id: number) => {
        return clients[id];
    }

    useEffect(() => {
        const getClients = async () => {
            setLoading(true);
            const clients = await get<OidcClient[]>('/oidc/clients');
            if (clients) {
                const clientsRecord = clients.reduce((acc, curr) => {
                    return {...acc, [curr.id]: curr};
                }, {})
                setClients(clientsRecord);
            }
            setLoading(false);
        };
        getClients();
    }, [])
    
    return (
        <ClientContext.Provider 
            value={{
                clients,
                loading,
                getClient,
                patchClient,
                updateClient,
            }}
        >
            { children }
        </ClientContext.Provider> 
    );

}

export { ClientProvider }

export default ClientContext;