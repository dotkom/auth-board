import { useRouter } from 'next/router';
import ClientView from 'client';

const ClientDetails: React.FC = () => {
  const router = useRouter();
  const {
    query: { clientId },
  } = router;
  return <ClientView clientId={Number(clientId)} />;
};

export default ClientDetails;
