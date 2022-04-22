import type { GetServerSideProps, NextPage } from 'next';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import isEmpty from 'lodash/isEmpty';
import toast from 'react-hot-toast';
import { useUser } from '../../contexts/user';

import Avatar from '@/components/atom/Avatar';
import Box from '@/components/atom/Box';
import Chips from '@/components/atom/Chips';
import Option from '@/components/molecules/Option';
import { getVote } from '@/apis/votes/getOne';
import Layout from '@/components/Layout';
import { useVote } from '@/apis/votes/vote';
import { useUnVote } from '@/apis/votes/unVote';
import Button from '@/components/atom/Button';
import { PlayIcon, StopIcon, TrashIcon } from '@/components/icons';
import Text from '@/components/atom/Text';
import { useDeletePoll } from '@/apis/votes/delete';
import { useUpdatePoll } from '@/apis/votes/update';
import { copyTextToClipboard } from '@/utils/copyText';
import Error from 'next/error';

interface Props {
  poll: Poll;
  error: number;
}

const Poll: NextPage<Props> = ({ error, poll }) => {
  const router = useRouter();
  const [user] = useUser();
  const vote = useVote();
  const unVote = useUnVote();
  const deletePoll = useDeletePoll();
  const updatePoll = useUpdatePoll();
  const [voterCount, setVoterCount] = useState<number>(poll?.votes_count);
  const [isUserOwnedPoll, setIsUserOwnedPoll] = useState(false);
  const [isUserVoted, setIsUserVoted] = useState(
    poll?.options.some((vote: PollOption) => vote.is_user_voted)
  );
  const [options, setOptions] = useState(poll?.options);
  const [isStoped, setIsStoped] = useState(poll?.is_closed);
  const pollShareLink = `https://votely.vercel.app/p/${poll?.short_identifier}`;

  useEffect(() => {
    !isEmpty(user) && setIsUserOwnedPoll(poll?.owner_id === user.id);
  }, [user]);

  const submitVote = (optionId: string) => {
    if (isUserVoted || isStoped) return;
    if (!user) return router.push('/login');
    vote.mutate(
      {
        id: poll.id,
        option_id: optionId
      },
      {
        onSuccess: ({ data: options }) => {
          setOptions(options);
          setIsUserVoted(options.some((vote: PollOption) => vote.is_user_voted));
          setVoterCount(count => ++count);
        }
      }
    );
  };

  const submitUnVote = () => {
    setIsUserVoted(false);
    setVoterCount(count => --count);
    unVote.mutate(
      {
        id: poll.id
      },
      {
        onError: () => {
          setIsUserVoted(true);
          setVoterCount(count => ++count);
        }
      }
    );
  };

  const handleDeletePoll = () =>
    deletePoll.mutate(
      {
        id: poll.id
      },
      {
        onSuccess: () => router.replace('/')
      }
    );

  const handleStopPoll = () => {
    setIsStoped((prev: boolean) => !prev);
    updatePoll.mutate({
      id: poll.id,
      is_closed: !isStoped ? 'true' : 'false'
    });
  };

  if (error) {
    return <Error statusCode={error} />;
  }

  return (
    <Layout>
      <Head>
        <title>{poll.title}</title>
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="flex flex-col gap-5 pb-32">
        <Box className="flex justify-between items-center w-full">
          <Box className="flex items-center space-x-1">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.31586 2.52344C4.96865 2.52344 3.06586 4.42623 3.06586 6.77344C3.06586 9.12065 4.96865 11.0234 7.31586 11.0234C9.66307 11.0234 11.5659 9.12065 11.5659 6.77344C11.5659 4.42623 9.66307 2.52344 7.31586 2.52344ZM11.8159 3.27344C11.8159 2.85922 12.1516 2.52344 12.5659 2.52344C14.9131 2.52344 16.8159 4.42623 16.8159 6.77344C16.8159 9.12065 14.9131 11.0234 12.5659 11.0234C12.1516 11.0234 11.8159 10.6877 11.8159 10.2734C11.8159 9.85922 12.1516 9.52344 12.5659 9.52344C14.0846 9.52344 15.3159 8.29222 15.3159 6.77344C15.3159 5.25465 14.0846 4.02344 12.5659 4.02344C12.1516 4.02344 11.8159 3.68765 11.8159 3.27344ZM5.56586 13.0234C3.21865 13.0234 1.31586 14.9262 1.31586 17.2734C1.31586 18.6541 2.43515 19.7734 3.81586 19.7734H10.8159C12.1966 19.7734 13.3159 18.6542 13.3159 17.2734C13.3159 14.9262 11.4131 13.0234 9.06586 13.0234H5.56586ZM14.3159 13.0234C13.9016 13.0234 13.5659 13.3592 13.5659 13.7734C13.5659 14.1877 13.9016 14.5234 14.3159 14.5234H16.0659C17.5846 14.5234 18.8159 15.7547 18.8159 17.2734C18.8159 17.8257 18.3681 18.2734 17.8159 18.2734H14.3159C13.9016 18.2734 13.5659 18.6092 13.5659 19.0234C13.5659 19.4377 13.9016 19.7734 14.3159 19.7734H17.8159C19.1966 19.7734 20.3159 18.6542 20.3159 17.2734C20.3159 14.9262 18.4131 13.0234 16.0659 13.0234H14.3159Z"
                fill="#22282F"
              />
            </svg>
            <Text fontSize="sm" fontWeight="medium">
              {voterCount} Voters
            </Text>
          </Box>
          {poll.is_closed && !isUserOwnedPoll && (
            <Box className="flex items-center space-x-2">
              <StopIcon color="#000" width="25" />
              <Text>stoped poll</Text>
            </Box>
          )}
        </Box>
        {poll.cover && (
          <Image
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/covers/${poll.cover}`}
            width={100}
            height={150}
            alt={poll.title}
            className="rounded-lg"
          />
        )}
        <Text dir="auto" fontWeight="bold" fontSize="lg">
          {poll.title}
        </Text>
        <Box className="flex flex-col space-y-3">
          {options.map((option: PollOption) => (
            <Option
              key={option.id}
              title={option.title}
              percentage={isUserVoted || poll.is_closed ? option.percentage : null}
              checked={option.is_user_voted}
              submit={() => submitVote(option.id.toString())}
            />
          ))}
        </Box>
        {isUserVoted && !isStoped && (
          <Button
            variant="text"
            className="flex items-center space-x-2 justify-center"
            onClick={submitUnVote}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.947 2.21967C7.23989 2.51256 7.23989 2.98744 6.947 3.28033L4.56066 5.66667H13.75C17.2018 5.66667 20 8.46489 20 11.9167C20 15.3684 17.2018 18.1667 13.75 18.1667H10.0833C9.66912 18.1667 9.33333 17.8309 9.33333 17.4167C9.33333 17.0025 9.66912 16.6667 10.0833 16.6667H13.75C16.3734 16.6667 18.5 14.54 18.5 11.9167C18.5 9.29331 16.3734 7.16667 13.75 7.16667H4.56066L6.947 9.553C7.23989 9.8459 7.23989 10.3208 6.947 10.6137C6.6541 10.9066 6.17923 10.9066 5.88634 10.6137L2.21967 6.947C1.92678 6.6541 1.92678 6.17923 2.21967 5.88634L5.88634 2.21967C6.17923 1.92678 6.6541 1.92678 6.947 2.21967Z"
                fill="#4466DF"
              />
            </svg>
            <Text className="text-[#4466DF] font-medium">Retract Vote</Text>
          </Button>
        )}
        <Box
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => router.push(`/user/${poll.owner.username}`)}
        >
          <Avatar src="/jojo.jpg" />
          <Text fontWeight="medium">{poll.owner.username}</Text>
        </Box>
        <Box className="flex max-h-[7rem] flex-wrap gap-2 overflow-auto">
          {poll.tags.map(tag => (
            <Link key={tag.id} href={`/tags/${tag.id}`}>
              <a>
                <Chips>{tag.title}</Chips>
              </a>
            </Link>
          ))}
        </Box>
        <Box
          className="border border-solid border-black rounded-lg p-4 flex items-center justify-between cursor-pointer"
          onClick={() => copyTextToClipboard(pollShareLink)?.then(() => toast('Copied!'))}
        >
          <Text fontWeight="medium" fontSize="sm">
            {pollShareLink}
          </Text>
          <Box className="flex items-center space-x-2">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.58321 3.07089C1.79504 3.93102 1.79504 5.26434 1.79504 7.93099C1.79504 10.5976 1.79504 11.931 2.58321 12.7911C2.64218 12.8554 2.70392 12.9172 2.76827 12.9762C3.62841 13.7643 4.96173 13.7643 7.62838 13.7643C10.295 13.7643 11.6283 13.7643 12.4885 12.9762C12.5528 12.9172 12.6146 12.8554 12.6735 12.7911C13.4617 11.931 13.4617 10.5976 13.4617 7.93099C13.4617 5.26434 13.4617 3.93102 12.6735 3.07089C12.6146 3.00654 12.5528 2.94479 12.4885 2.88582C11.6283 2.09766 10.295 2.09766 7.62838 2.09766C4.96173 2.09766 3.62841 2.09766 2.76827 2.88582C2.70392 2.94479 2.64218 3.00654 2.58321 3.07089ZM13.6006 7.84766C14.4823 7.84766 15.097 7.84828 15.5749 7.88864C16.0437 7.92822 16.3122 8.00195 16.5151 8.10949C16.9133 8.32045 17.2389 8.64609 17.4499 9.04424C17.5574 9.24721 17.6312 9.51569 17.6707 9.98443C17.7111 10.4624 17.7117 11.077 17.7117 11.9588V12.931C17.7117 14.2842 17.7103 15.228 17.6192 15.9438C17.5305 16.6404 17.3678 17.0146 17.1206 17.2844C17.0764 17.3327 17.0301 17.379 16.9818 17.4232C16.7119 17.6705 16.3378 17.8331 15.6412 17.9218C14.9254 18.0129 13.9816 18.0143 12.6284 18.0143H11.6562C10.7744 18.0143 10.1598 18.0137 9.68181 17.9733C9.21308 17.9338 8.9446 17.86 8.74162 17.7525C8.34347 17.5415 8.01783 17.2159 7.80688 16.8177C7.69933 16.6148 7.6256 16.3463 7.58602 15.8776C7.54567 15.3996 7.54504 14.7849 7.54504 13.9032H6.04504V13.9364V13.9364C6.04504 14.7772 6.04503 15.4553 6.09134 16.0038C6.13904 16.5687 6.23987 17.0641 6.48143 17.52C6.83303 18.1836 7.37576 18.7263 8.03934 19.0779C8.49526 19.3195 8.9907 19.4203 9.55561 19.468C10.1041 19.5143 10.7821 19.5143 11.6228 19.5143H11.6229H11.6562H12.6284H12.68C13.9695 19.5143 15.009 19.5144 15.8306 19.4098C16.6823 19.3014 17.4049 19.07 17.9952 18.5291C18.0756 18.4554 18.1528 18.3782 18.2265 18.2978C18.7674 17.7075 18.9988 16.9849 19.1072 16.1332C19.2117 15.3116 19.2117 14.2721 19.2117 12.9826V12.931V11.9588V11.9256C19.2117 11.0848 19.2117 10.4067 19.1654 9.85822C19.1177 9.29331 19.0169 8.79787 18.7753 8.34195C18.4237 7.67837 17.881 7.13564 17.2174 6.78405C16.7615 6.54248 16.2661 6.44165 15.7011 6.39396C15.1527 6.34764 14.4746 6.34765 13.6339 6.34766H13.6338L13.6006 6.34766V7.84766Z"
                fill="black"
              />
            </svg>
          </Box>
        </Box>
        {isUserOwnedPoll && (
          <Box className="flex justify-center items-center space-x-6 mt-8">
            <Box
              className="flex flex-col items-center space-y-2 cursor-pointer"
              onClick={handleDeletePoll}
            >
              <TrashIcon color="#000" />
              <Text>Delete Poll</Text>
            </Box>
            <hr className="border border-solid border-[#F0F3F4] h-full" />
            <Box
              className="flex flex-col items-center space-y-2 cursor-pointer"
              onClick={handleStopPoll}
            >
              {isStoped ? (
                <>
                  <PlayIcon color="#000" />
                  <Text>Continue Polling</Text>
                </>
              ) : (
                <>
                  <StopIcon color="#000" />
                  <Text>Stop Polling</Text>
                </>
              )}
            </Box>
          </Box>
        )}
      </main>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const identifier = context.params?.identifier as string;
  try {
    const { data: poll } = await getVote(identifier, context.req.cookies['votely.token']);

    return {
      props: {
        poll
      }
    };
  } catch (e: any) {
    context.res.statusCode = e.response.status;

    return {
      props: {
        error: e.response.status,
        poll: null
      }
    };
  }
};
export default Poll;
