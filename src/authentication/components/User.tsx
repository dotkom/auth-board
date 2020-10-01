import { signOut, useSession } from "next-auth/client"
import React, { useState } from "react";
import styled from 'styled-components';
import { Button } from '@dotkomonline/design-system';

const ProfilePic = styled.img`
    border-radius: 50%;
    margin-right: 5px;
    width: 32px;
`;

const Username = styled.p`
    font-family: "Helvetica Neue";
`; 

const UserPanel = styled.div`
    grid-column: 3;
    position: relative;
`;

const LogoutPanel = styled.div`
    position: absolute;
    top: 72px;
    width: 100%;
    border: 2px solid black;
    border-top: 0;
    padding: 10px;
    display: flex;
    justify-content: center;
`;

const UserInfo = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 9fr;
    & > * {
        padding: 5px;
    }
`;

const User: React.FC = () => {
    const [session] = useSession();
    const [isOpen, setIsOpen] = useState(false);

    const logout = () => {
        signOut({ callbackUrl: 'http://localhost:3000'})
    }
    return (
        <UserPanel>
            <UserInfo onClick={() => setIsOpen(!isOpen)}>
                <ProfilePic src={session.user.image} alt="Profilbilde"/>
                <Username>{session.user.name}</Username>
            </UserInfo>
            {isOpen && (
                <LogoutPanel>
                    <Button onClick={logout}>Logg ut</Button>
                </LogoutPanel>
            )}
        </UserPanel>
    );
}

export default User;