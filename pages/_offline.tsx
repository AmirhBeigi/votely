import type { NextPage } from 'next';
import Head from 'next/head';

import Layout from '@/components/Layout';
import { Plugging } from '@/components/illustrations';
import Text from '@/components/atom/Text';

const Offline: NextPage = () => {
  return (
    <Layout shouldNotShowNavigationBar>
      <Head>
        <title>Votely</title>
      </Head>

      <main className="pb-10 h-full flex flex-col justify-center items-center space-y-3">
        <Plugging color="#000" />
        <Text fontWeight="medium">You are offline!</Text>
      </main>
    </Layout>
  );
};

export default Offline;
