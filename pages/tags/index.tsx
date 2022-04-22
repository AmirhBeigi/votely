import Head from 'next/head';
import { useEffect, useState } from 'react';
import isEmpty from 'lodash/isEmpty';
import debounce from 'lodash/debounce';

import TextField from '@/components/atom/TextField';
import { SearchIcon } from '@/components/icons';
import Layout from '@/components/Layout';
import TagCard from '@/components/organisms/TagCard';
import { useGetTags } from '@/apis/tags/getAll';
import { LoadingState } from '@/components/molecules/LoadingState';
import { EmptyState } from '@/components/molecules/EmptyState';

const Tags = () => {
  const [search, setSearch] = useState();
  const { data: tags, isSuccess, isLoading, refetch } = useGetTags({ page: 1, search });
  const handleChangeSearchTags = debounce(e => {
    setSearch(e.target.value);
  }, 1000);

  useEffect(() => {
    refetch();
  }, [search]);

  return (
    <Layout>
      <Head>
        <title>Tags</title>
      </Head>

      <main className="space-y-5 pb-32">
        <TextField
          placeholder="Search Tags ..."
          beforElement={<SearchIcon color="#283138" />}
          onChange={handleChangeSearchTags}
        />
        {isLoading && <LoadingState />}
        {isSuccess && isEmpty(tags) && <EmptyState />}
        {isSuccess &&
          !isEmpty(tags) &&
          tags.map(tag => (
            <TagCard
              key={tag.id}
              title={tag.title}
              pollsCount={tag.count_of_polls}
              votersCount={tag.count_of_voters}
              identifier={tag.id}
            />
          ))}
      </main>
    </Layout>
  );
};

export default Tags;
