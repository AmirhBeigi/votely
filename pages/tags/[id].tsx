import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import debounce from 'lodash/debounce';
import isNaN from 'lodash/isNaN';
import { useState } from 'react';
import Head from 'next/head';
import TextField from '../../components/atom/TextField';
import { SearchIcon } from '../../components/icons';
import Layout from '../../components/Layout';
import Box from '../../components/atom/Box';
import Polls from '../../components/organisms/Polls';

const Tags: NextPage = () => {
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
        <title>Tags</title>
      </Head>

      <Box className="space-y-5 pb-32">
        <TextField
          placeholder="Search Polls ..."
          beforElement={<SearchIcon color="#283138" />}
          onChange={handleChangeSearchPolls}
        />
        <Polls search={search} tagId={+id} />
      </Box>
    </Layout>
  );
};

export default Tags;
