import { Spinner } from '@dotkomonline/design-system';
import { useSession } from 'next-auth/client';
import React from 'react';
import styled from 'styled-components';

const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RequiresLogin: React.FC = ({ children }) => {
  const [session, loading] = useSession();
  if (loading)
    return (
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    );
  if (!session) return <p>Du må logge inn for å se denne siden.</p>;
  return <>{children}</>;
};

export default RequiresLogin;
