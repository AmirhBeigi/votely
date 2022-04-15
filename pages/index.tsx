import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import TextField from '../components/atom/TextField';
import { SearchIcon } from '../components/icons';
import ActiveVoteBanner from '../components/organisms/ActiveVoteBanner';
import Section from '../components/molecules/Section';
import Box from '../components/atom/Box';
import { useRouter } from 'next/router';
import VoteCard from '../components/organisms/VoteCard';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { getVotes } from '../apis/votes/getAll/api';
import { getActiveCounts } from '../apis/votes/getActiveCounts/api';
import TagCardCompact from '../components/organisms/TagCardCompact';
import { getTags } from '../apis/tags/getAll/api';
import { getBestTags } from '../apis/tags/best/api';
import Polls from '../components/organisms/Polls';
import { useState } from 'react';
import debounce from 'lodash/debounce';
import { useUser } from '../contexts/user';
import { DragSlider } from '../components/atom/Slider/Slider';

interface Props {
  tags: [];
  activeCounts: number | null;
}

const Home: NextPage<Props> = ({ activeCounts, tags }) => {
  const router = useRouter();
  const [user] = useUser();
  const [search, setSearch] = useState();
  const onChangeSearchPolls = debounce(e => {
    setSearch(e.target.value);
  }, 1000);

  return (
    <Layout>
      <Head>
        <title>Votely</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="space-y-5 pb-32">
        <TextField
          placeholder="Search polls ..."
          beforElement={<SearchIcon color="#283138" />}
          onChange={onChangeSearchPolls}
        />
        {user && (
          <ActiveVoteBanner
            count={activeCounts ?? 0}
            onClick={() => router.push(`/user/${user.id}`)}
          />
        )}
        <Section title="Top Categories" showAllAction={() => router.push('/tags')}>
          <DragSlider>
            {tags.map((tag: Tag) => (
              <TagCardCompact
                key={tag.id}
                title={tag.title}
                pollsCount={tag.count_of_polls}
                identifier={tag.id}
              />
            ))}
          </DragSlider>
        </Section>
        <Section title="Recent Polls">
          <Polls search={search} />
        </Section>
      </main>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  try {
    const { data: bestTags } = await getBestTags({ page: 1 });
    let activeCounts;
    if (context.req.cookies['votely.token']) {
      const { data } = await getActiveCounts(context.req.cookies['votely.token']);
      activeCounts = data.count;
    }
    return {
      props: {
        tags: bestTags,
        activeCounts: activeCounts ?? 0
      }
    };
  } catch (e) {
    console.log(e);
  }
  return {
    props: {
      tags: []
    }
  };
};

export default Home;
