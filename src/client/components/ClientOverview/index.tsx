import { ClientViewProps } from "../types";

const ClientOverview: React.FC<ClientViewProps> = ({ client }) => {
    return (
        <>
            <h2>{client.name}</h2>
            <div>
                <p>Redirect URIs:</p>
                <ul>
                    <li>Ikke implementert</li>
                </ul>
            </div>
        </>
    )
}

export default ClientOverview;