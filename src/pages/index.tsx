import { Button, Card, Logo } from '@dotkomonline/design-system';
import { signIn } from 'next-auth/client';
import styled from 'styled-components';
import React from 'react';

const CenterWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > svg {
    margin-top: 15px;
  }

  & > button {
    margin-top: 15px;
  }

  & > p {
  }
`;

const BigText = styled.h1`
  font-size: 25px;
`;

const FrontpageLoginCard = styled(Card)`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  box-shadow: 0 0 4px black;
  border-radius: 15px;

  > h1 {
    margin-bottom: 10px;
    font-family: Poppins;
    font-weight: 'medium';
  }
`;

const Frontpage: React.FC = () => {
  const signInAndRedirect = () => signIn('onlineweb4', { callbackUrl: `${process.env.NEXTAUTH_URL}/clients` });

  return (
    <CenterWrapper>
      <Logo width={'30%'} />
      <FrontpageLoginCard>
        <BigText>Authentication Dashboard</BigText>
        <Button onClick={signInAndRedirect}>Logg Inn</Button>
      </FrontpageLoginCard>
    </CenterWrapper>
  );
};

export default Frontpage;
