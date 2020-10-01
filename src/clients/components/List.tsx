import ClientContext from "client/context/ClientContext";
import { OidcClient } from "client/models/model";
import { useContext } from "react";
import ClientCard from "./ClientCard";
import styled from 'styled-components';

interface Props {
    clients?: OidcClient[];
}

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ClientList: React.FC<Props> = () => {
    const { clients } = useContext(ClientContext);
    if(!Object.keys(clients).length) return <p>Du eier ingen applikasjoner.</p>
    return (
        <CardWrapper>
            { Object.values(clients).map(client => {
                return <ClientCard client={client} key={client.id} />
            })}
        </CardWrapper>
    );
}

export default ClientList;