import { Checkbox, TextArea, TextField, RadioGroup, RadioButton, Button, Message } from "@dotkomonline/design-system"
import ClientContext from "client/context/ClientContext";
import { OidcClient } from "client/models/model";
import { useContext, useState } from "react";
import styled from "styled-components";
import { ClientViewProps } from "../types";
import Callbacks from "./components/Callbacks";

const BoldSpan = styled.span`
    font-weight: bold;
`;

const PublicMessage = styled(Message)`
    margin-top: 15px;
`;

const BasicInfo: React.FC<ClientViewProps> = ({ client }) => {
    const [newClient, setNewClient] = useState<OidcClient>(null);
    const { patchClient } = useContext(ClientContext);

    const updateSingleField = (key: string, value: string | boolean | string[]) => {
        setNewClient({...newClient, [key]: value});
    }

    const post = () => {
        patchClient(client.id, newClient);
    }

    const eventUpdateField = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
        // For use with pure HTML-change events and not prefiltered events.
        updateSingleField(key, e.currentTarget.value);
    }

    return (
        <>
            <h3>Navn</h3>
            <TextField placeholder={client.name} onChange={(value) => eventUpdateField("name", value)} value={newClient?.name || client.name} />
            <h3>Beskrivelse</h3>
            <TextArea />
            <h3>Redirect URIs:</h3>
            <Callbacks callbacks={[]} onChange={(value) => updateSingleField("redirect_uris", value)}/>
            <Checkbox label="Krev brukerinteraksjon" defaultChecked={client.reuse_consent} onChange={(value) => updateSingleField("require_consent", value)}/>
            <p>Krev at sluttbruker alltid må interagere med Onlineweb4 under autentisering og autorisering. Skru av dette for å legge til støtte for login_hint og "passive authentication requests".</p>
            <RadioGroup onChange={(value) => updateSingleField("client_type", value)}>
                <RadioButton value="public" checked={client.client_type === 'public'}><p><BoldSpan>Public</BoldSpan> - Applikasjonen er åpent tilgjengelig, som f.eks. en mobil-app eller single page web application. For bruk med implicit grant flow eller PKCE</p></RadioButton>
                <RadioButton value="confidential" checked={client.client_type === 'confidential'}><p><BoldSpan>Confidential</BoldSpan> - Applikasjonen klarer opprettholde konfidensialiteten til client_secret-en. For bruk med ordinær authorization code flow</p></RadioButton>
            </RadioGroup>
            <Button onClick={post}>Lagre endringer</Button>
            <PublicMessage status="info">
                <div>
                    <h3>Den meste informasjonen om registrerte applikasjoner og API-er are offentlig</h3>
                    <p>
                    Alle registerte applikasjoner og API-er er regnet som offentlig informasjon og dermed synlig for offentligheten, ikke bare brukere som er innlogget i din applikasjon.
                    Derfor bør du være sikker på at du ikke har konfidensiell informasjon i beskrivelsen eller navngivingen av dine applikasjoner.
                    </p>
                </div>
            </PublicMessage>
        </>
    )
}

export default BasicInfo;