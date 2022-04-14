import { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { useRouter } from 'next/router';

import { useGoogleLogin } from '../../../apis/auth/google/hook';
import { GoogleIcon } from '../../icons';
import Button from '../../atom/Button';
import Box from '../../atom/Box';
import Text from '../../atom/Text';

export const GoogleLoginButton: React.FC = () => {
  const router = useRouter();
  const googleLogin = useGoogleLogin();
  const [isLoading, setIsLoading] = useState(false);

  const handlLoginGoogleFailure = (error: any) => {
    console.log(error);
    setIsLoading(false);
  };

  const handlLoginGoogleSuccess = async (data: any) => {
    console.log(data);
    try {
      await googleLogin.mutateAsync({
        access_token: data.accessToken
      });
      setIsLoading(false);
      router.push('/');
    } catch (e) {
      setIsLoading(false);
    }
  };

  return (
    <GoogleLogin
      clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? ''}
      render={({ onClick }) => (
        <Button
          variant="outlined"
          isLoading={isLoading}
          onClick={() => {
            setIsLoading(true);
            onClick();
          }}
        >
          <Box className="flex justify-center space-x-2">
            <GoogleIcon color="#000" />
            <Text fontWeight="medium">Login with Google</Text>
          </Box>
        </Button>
      )}
      buttonText="Login"
      onSuccess={handlLoginGoogleSuccess}
      onFailure={handlLoginGoogleFailure}
    />
  );
};

export default GoogleLoginButton;