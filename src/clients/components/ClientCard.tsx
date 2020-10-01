import { Card } from "@dotkomonline/design-system"
import { OidcClient } from "client/models/model";
import styled, { css } from 'styled-components';
import Link from 'next/link';

interface Props {
    client: OidcClient;
}

const ClientLogo = styled.img`
    grid-column: 1;
    grid-row: 1 / span 2;
    width: 96px;
    justify-self: center;
`;


const GridText = styled.p`
    grid-column: 2;
    justify-self: baseline;
`;

const UpperText = styled(GridText)`
    grid-row: 1;
`;
const LowerText = styled(GridText)`
    grid-row: 2;
`;

const CardStyle = {
    width: '70%',
    marginBottom: '15px',
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gridTemplateRows: '1fr fr',
};

const MissingImage: React.FC = () => (
    <svg viewBox="0 0 720 405" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
            <path d="M236.714 272.779C247.142 290.493 268.386 316.891 303.096 332.081C337.806 347.271 377.129 348.05 412.413 334.248C447.698 320.446 476.054 293.191 491.244 258.482C506.434 223.772 504.286 192.636 499.643 169.064L468.428 192.993C468.928 196.921 471.204 218.329 459.677 244.667C448.151 271.005 426.634 291.685 399.86 302.158C373.086 312.631 343.249 312.04 316.911 300.514C290.574 288.987 278.928 273.707 268.571 258.85L236.714 272.779Z" fill="#B36BCD" fill-opacity="0.3"></path>
            <path d="M484.643 131.421C475 113.35 452.316 86.1741 417.606 70.984C382.896 55.7938 343.574 55.0142 308.289 68.8166C273.005 82.619 244.649 109.873 229.458 144.583C213.928 179.421 216.429 214.421 220.689 231.857L252.085 206.636C252.085 206.636 250 185.493 261.026 158.397C272.552 132.06 294.069 111.38 320.842 100.906C347.616 90.4332 377.454 91.0248 403.791 102.551C430.129 114.077 445 132.636 453.464 146.421L484.643 131.421Z" fill="#B36BCD" fill-opacity="0.3"></path>
            <path d="M359.643 138.35L369.643 202.278L539.643 120.85L342.857 272.278L334.643 215.136L180 282.636L359.643 138.35Z" fill="#B36BCD" fill-opacity="0.3"></path>
        </g>
        <defs>
            <clipPath id="clip0">
                <rect width="360" height="285.714" fill="white" transform="translate(180 59)"></rect>
            </clipPath>
        </defs>
    </svg>);

const ClientCard: React.FC<Props> = ({ client }) => (
    <Link href={`/clients/${client.id}`}>
        <Card style={CardStyle} as="a">
            {client.logo ? <ClientLogo src={client.logo} alt="App-logo"/> : <MissingImage />}
            <UpperText>App: {client.name}</UpperText>
            <LowerText>ID: {client.client_id}</LowerText>
        </Card>
    </Link>
);

export default ClientCard;
