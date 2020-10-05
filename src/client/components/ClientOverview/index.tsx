import ImageWithDefault from "common/components/ImageWithDefault";
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
                <p>Opprettet: {client.date_created}</p>
            </div>
            <ImageWithDefault>
                <img src={client.logo} />
            </ImageWithDefault>
        </>
    )
}

export default ClientOverview;