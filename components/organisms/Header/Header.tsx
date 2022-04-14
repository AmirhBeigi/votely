import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useUser } from '../../../contexts/user';
import Box from '../../atom/Box';
import Text from '../../atom/Text';
import { PlusIcon } from '../../icons';

export const Heeader: React.FC = () => {
  const [user] = useUser();
  const router = useRouter();

  const isActiveCheck = ({ href, exact }: { href: string; exact?: boolean }): boolean =>
    exact ? router.pathname === href : router.pathname.startsWith(href);

  const handleShowProfile = () => {
    if (!user) return router.push('/login');
    router.push('/user');
  };

  const handleNagivateNewPoll = () => {
    if (!user) return router.push('/login');
    router.push('/new');
  };

  return (
    <Box className="bg-white px-8 flex items-center h-16 min-h-[4rem] justify-between border-b border-solid border-b-gray-200">
      <Box className="flex space-x-8">
        <Text
          as="h1"
          fontWeight="extraBold"
          fontSize="xl"
          onClick={() => router.push('/')}
          className="cursor-pointer"
        >
          VOTELY
        </Text>
        <Box
          className={clsx('hidden lg:flex items-center space-x-2 opacity-50 cursor-pointer ', {
            '!opacity-100': isActiveCheck({ href: '/', exact: true })
          })}
          onClick={() => router.push('/')}
        >
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.7878 4.12388L4.12531 11.0614C3.15031 11.8364 2.52531 13.4739 2.73781 14.6989L4.40032 24.6489C4.70032 26.4239 6.40031 27.8614 8.20031 27.8614H22.2003C23.9878 27.8614 25.7003 26.4114 26.0003 24.6489L27.6628 14.6989C27.8628 13.4739 27.2378 11.8364 26.2753 11.0614L17.6128 4.13636C16.2753 3.06136 14.1128 3.06138 12.7878 4.12388Z"
              fill="black"
            />
            <path
              d="M15.2003 19.9739C16.9262 19.9739 18.3253 18.5748 18.3253 16.8489C18.3253 15.123 16.9262 13.7239 15.2003 13.7239C13.4744 13.7239 12.0753 15.123 12.0753 16.8489C12.0753 18.5748 13.4744 19.9739 15.2003 19.9739Z"
              fill="white"
            />
          </svg>
          <Text as="h1" fontWeight="medium">
            Home
          </Text>
        </Box>
        <Box
          className={clsx('hidden lg:flex items-center space-x-2 opacity-50 cursor-pointer', {
            '!opacity-100': isActiveCheck({ href: '/tags' })
          })}
          onClick={() => router.push('/tags')}
        >
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M23.7658 3.09888H21.3908C18.6658 3.09888 17.2283 4.53638 17.2283 7.26138V9.63638C17.2283 12.3614 18.6658 13.7989 21.3908 13.7989H23.7658C26.4908 13.7989 27.9283 12.3614 27.9283 9.63638V7.26138C27.9283 4.53638 26.4908 3.09888 23.7658 3.09888Z"
              fill="black"
            />
            <path
              opacity="0.4"
              d="M9.47834 17.3864H7.10334C4.36584 17.3864 2.92834 18.8239 2.92834 21.5489V23.9239C2.92834 26.6614 4.36584 28.0989 7.09084 28.0989H9.46584C12.1908 28.0989 13.6283 26.6614 13.6283 23.9364V21.5614C13.6408 18.8239 12.2033 17.3864 9.47834 17.3864Z"
              fill="black"
            />
            <path
              d="M8.29084 13.8239C11.2525 13.8239 13.6533 11.423 13.6533 8.46138C13.6533 5.49975 11.2525 3.09888 8.29084 3.09888C5.32922 3.09888 2.92834 5.49975 2.92834 8.46138C2.92834 11.423 5.32922 13.8239 8.29084 13.8239Z"
              fill="black"
            />
            <path
              d="M22.5659 28.0989C25.5275 28.0989 27.9284 25.698 27.9284 22.7364C27.9284 19.7747 25.5275 17.3739 22.5659 17.3739C19.6042 17.3739 17.2034 19.7747 17.2034 22.7364C17.2034 25.698 19.6042 28.0989 22.5659 28.0989Z"
              fill="black"
            />
          </svg>
          <Text as="h1" fontWeight="medium">
            Category
          </Text>
        </Box>
      </Box>
      <Box className="flex items-center space-x-5">
        <Box onClick={handleNagivateNewPoll} className="hidden lg:block cursor-pointer">
          <PlusIcon color="#000" />
        </Box>
        <svg
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleShowProfile}
          className="cursor-pointer"
        >
          <path
            opacity="0.4"
            d="M15.3325 28.3444C22.236 28.3444 27.8325 22.748 27.8325 15.8445C27.8325 8.94089 22.236 3.34445 15.3325 3.34445C8.4289 3.34445 2.83246 8.94089 2.83246 15.8445C2.83246 22.748 8.4289 28.3444 15.3325 28.3444Z"
            fill="#353E45"
            fillOpacity="0.52"
          />
          <path
            d="M15.3325 9.50693C12.745 9.50693 10.645 11.6069 10.645 14.1944C10.645 16.7319 12.6325 18.7944 15.27 18.8694C15.3075 18.8694 15.3575 18.8694 15.3825 18.8694C15.4075 18.8694 15.445 18.8694 15.47 18.8694C15.4825 18.8694 15.495 18.8694 15.495 18.8694C18.02 18.7819 20.0075 16.7319 20.02 14.1944C20.02 11.6069 17.92 9.50693 15.3325 9.50693Z"
            fill="#353E45"
            fillOpacity="0.52"
          />
          <path
            d="M23.8075 25.0319C21.5825 27.0819 18.6075 28.3444 15.3325 28.3444C12.0575 28.3444 9.08245 27.0819 6.85745 25.0319C7.15745 23.8944 7.96995 22.8569 9.15745 22.0569C12.57 19.7819 18.12 19.7819 21.5075 22.0569C22.7075 22.8569 23.5075 23.8944 23.8075 25.0319Z"
            fill="#353E45"
            fillOpacity="0.52"
          />
        </svg>
      </Box>
    </Box>
  );
};

export default Heeader;
