import RequiresLogin from 'common/components/RequiresLogin';
import Overview from 'clients';
import { getSession } from 'next-auth/client';
import { NextPageContext } from 'next';

const OverviewPage: React.FC = () => {
  return (
    <RequiresLogin>
      <Overview />
    </RequiresLogin>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  // This protects the page by retrieving the current session before serving the page.
  const session = await getSession(context);
  return {
    props: { session },
  };
}

export default OverviewPage;
