import { useRouter } from 'next/router';
import ClientView from 'client';
import { getSession } from 'next-auth/client';
import { NextPageContext } from 'next';

const ClientDetails: React.FC = () => {
  const router = useRouter();
  const {
    query: { clientId },
  } = router;
  return <ClientView clientId={Number(clientId)} />;
};

export async function getServerSideProps(context: NextPageContext) {
  // This protects the page by retrieving the current session before serving the page.
  const session = await getSession(context);
  return {
    props: { session },
  };
}

export default ClientDetails;
