import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import debounce from 'lodash/debounce';

import TextField from '@/components/atom/TextField';
import { SearchIcon } from '@/components/icons';
import ActiveVoteBanner from '@/components/organisms/ActiveVoteBanner';
import Section from '@/components/molecules/Section';
import Layout from '@/components/Layout';
import TagCardCompact from '@/components/organisms/TagCardCompact';
import Polls from '@/components/organisms/Polls';
import DragSlider from '@/components/atom/Slider/Slider';

import { useGetActiveCounts } from '@/apis/votes/getAllActiveCounts';
import { useUser } from '../contexts/user';
import { useGetTags } from '@/apis/tags/getAll';

const Home: NextPage = () => {
  const router = useRouter();
  const [user] = useUser();
  const { data: activeCounts } = useGetActiveCounts();
  const { data: tags, refetch } = useGetTags({ page: 1 });
  const [search, setSearch] = useState('');
  const onChangeSearchPolls = debounce(e => {
    setSearch(e.target.value);
  }, 1000);

  useEffect(() => {
    refetch();
  }, []);

  return (
    <Layout>
      <Head>
        <title>Votely</title>
      </Head>

      <main className="space-y-5 pb-32">
        <TextField
          placeholder="Search polls ..."
          beforElement={<SearchIcon color="#283138" />}
          onChange={onChangeSearchPolls}
        />
        {user && (
          <ActiveVoteBanner
            count={activeCounts?.count ?? 0}
            onClick={() => router.push(`/user/${user.username}`)}
          />
        )}
        {tags && tags.some(tag => tag.count_of_polls > 0) && (
          <Section title="Top Categories" showAllAction={() => router.push('/tags')}>
            <DragSlider>
              {tags
                .filter(tag => tag.count_of_polls > 0)
                .map(tag => (
                  <TagCardCompact
                    key={tag.id}
                    title={tag.title}
                    pollsCount={tag.count_of_polls}
                    identifier={tag.id}
                  />
                ))}
            </DragSlider>
          </Section>
        )}
        <Section title="Recent Polls">
          <Polls search={search} />
        </Section>
      </main>
    </Layout>
  );
};

export default Home;
