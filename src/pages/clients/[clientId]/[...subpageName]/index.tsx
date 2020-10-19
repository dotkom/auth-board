import { useRouter } from 'next/router';
import ClientView from 'client';

const BasicInfoPage: React.FC = () => {
  const router = useRouter();
  const {
    query: { clientId, subpageName },
  } = router;
  const subPage = Array.isArray(subpageName) ? subpageName[0] : subpageName;
  return <ClientView clientId={Number(clientId)} subPage={subPage} />;
};

export default BasicInfoPage;
