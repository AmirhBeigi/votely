import { useRouter } from 'next/router';
import { useUser } from '../../../contexts/user';
import Box from '../../atom/Box';
import Text from '../../atom/Text';

export const Heeader: React.FC = () => {
  const [user] = useUser();
  const router = useRouter();

  const handleShowProfile = () => {
    if (!user) return router.push('/login');
    router.push('/user');
  };

  return (
    <Box className="bg-white px-8 flex items-center h-16 min-h-[4rem] justify-between border-b border-solid border-b-gray-200">
      <Text as="h1" fontWeight="extraBold" fontSize="xl" onClick={() => router.push('/')}>
        VOTELY
      </Text>
      <svg
        width="31"
        height="31"
        viewBox="0 0 31 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleShowProfile}
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
  );
};

export default Heeader;
