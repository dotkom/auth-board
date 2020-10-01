import { Button, Logo } from '@dotkomonline/design-system'
import { signIn } from 'next-auth/client'
import styled from 'styled-components'


const CenterWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > button {
    margin-top: 15px;
  }

  & > p {

  }
`;

const Frontpage: React.FC = () => {
  const signInAndRedirect = () => 
    signIn('onlineweb4', { callbackUrl: 'http://localhost:3000/clients'})

  return (
    <CenterWrapper>
      <Logo width={"30%"}/>
      <p>Authentication Dashboard</p>
      <Button onClick={signInAndRedirect}>Logg Inn</Button>
    </CenterWrapper>
  );
}

export default Frontpage;
