import type { NextPage } from 'next';
import debounce from 'lodash/debounce';
import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import TextField from '@/components/atom/TextField';
import { SearchIcon } from '@/components/icons';
import Layout from '@/components/Layout';
import Box from '@/components/atom/Box';
import Polls from '@/components/organisms/Polls';

const UserPolls: NextPage = () => {
  const {
    query: { id }
  } = useRouter();
  const [search, setSearch] = useState();

  const handleChangeSearchPolls = debounce(e => {
    setSearch(e.target.value);
  }, 1000);

  if (!id || isNaN(+id)) return null;
  return (
    <Layout>
      <Head>
        <title>My Polls</title>
      </Head>

      <Box className="space-y-5 pb-32">
        <TextField
          placeholder="Search Polls ..."
          beforElement={<SearchIcon color="#283138" />}
          onChange={handleChangeSearchPolls}
        />
        <Polls search={search} ownerId={+id} isClosed={false} />
      </Box>
    </Layout>
  );
};

export default UserPolls;
