import { Logo } from "@dotkomonline/design-system";
import User from "authentication/components/User";
import Link from "next/link";
import React from "react";
import styled from 'styled-components'

const HeaderSection = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr 0.4fr 100px;
`

const Title = styled.a`
    justify-self: center;
    grid-column: 2;
    grid-row: 1;
    font-family: 'colfaxLight', Arial;
    display: flex;
    justify-content: center;
`;

const TitleText = styled.h1`
    font-weight: normal;
    margin: 0;
    margin-left: 5px;
`

const Header: React.FC = () => (
    <HeaderSection>
        <Link href="/clients">
            <Title>
                    <Logo width="140px" />
                    <TitleText>SSO Dashboard</TitleText>
            </Title>
        </Link>
        <User />
    </HeaderSection>
);

export default Header;