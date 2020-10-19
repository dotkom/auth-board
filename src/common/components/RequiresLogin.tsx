import { Spinner } from '@dotkomonline/design-system';
import { useSession } from 'next-auth/client';

const RequiresLogin: React.FC = ({ children }) => {
  const [session, loading] = useSession();
  if (loading) return <Spinner />;
  if (!session) return <p>Du må logge inn for å se denne siden.</p>;
  return <>{children}</>;
};

export default RequiresLogin;
