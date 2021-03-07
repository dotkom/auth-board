import { signOut, useSession } from 'next-auth/client';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { Button, Text } from '@chakra-ui/react';
import ClientContext from 'client/context/ClientContext';

const ProfilePic = styled.img`
  border-radius: 50%;
  margin-right: 5px;
  width: 32px;
  height: 32px;
`;

const Username = styled.p`
  font-family: 'Helvetica Neue';
`;

const UserPanel = styled.div`
  grid-column: 3;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: end;
`;

const User: React.FC = () => {
  const [session] = useSession();
  const { emptyContext } = useContext(ClientContext);

  const logout = () => {
    emptyContext();
    signOut({ callbackUrl: 'http://localhost:3000' });
  };
  return (
    <UserPanel>
      <ProfilePic src={session?.user.image} alt="Profilbilde" />
      <Username>{session?.user.name}</Username>
      <Button onClick={logout}>
        <Text>Logg ut</Text>
      </Button>
    </UserPanel>
  );
};

export default User;
