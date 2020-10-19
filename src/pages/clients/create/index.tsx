import Header from 'common/components/Header';
import Create from 'create';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/client';
import React from 'react';

const CreatePage: React.FC = () => {
  return (
    <>
      <Header />
      <Create />
    </>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  // This protects the page by retrieving the current session before serving the page.
  const session = await getSession(context)
  return {
    props: { session }
  }
}

export default CreatePage;
