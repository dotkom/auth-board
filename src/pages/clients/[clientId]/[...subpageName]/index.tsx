import { useRouter } from 'next/router';
import ClientView from 'client';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/client';
import React from 'react';

const BasicInfoPage: React.FC = () => {
  const router = useRouter();
  const {
    query: { clientId, subpageName },
  } = router;
  const subPage = Array.isArray(subpageName) ? subpageName[0] : subpageName;
  return <ClientView clientId={Number(clientId)} subPage={subPage} />;
};

export async function getServerSideProps(context: NextPageContext) {
  // This protects the page by retrieving the current session before serving the page.
  const session = await getSession(context);
  return {
    props: { session },
  };
}

export default BasicInfoPage;
