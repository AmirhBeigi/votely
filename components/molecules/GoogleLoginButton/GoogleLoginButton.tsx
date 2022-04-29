import { useState } from 'react';
import GoogleLogin from 'react-google-login';

import { useGoogleLogin } from '../../../apis/auth/googleLogin';
import { GoogleIcon } from '../../icons';
import Button from '../../atom/Button';
import Box from '../../atom/Box';
import Text from '../../atom/Text';

export const GoogleLoginButton: React.FC = () => {
  const googleLogin = useGoogleLogin();
  const [isLoading, setIsLoading] = useState(false);

  const handlLoginGoogleSuccess = async (data: any) => {
    try {
      setIsLoading(true);
      await googleLogin.mutateAsync({
        access_token: data.accessToken
      });
      setIsLoading(false);
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
            onClick();
          }}
        >
          <Box className="flex justify-center space-x-2">
            <GoogleIcon color="#000" />
            <Text fontWeight="medium">Login with Google</Text>
          </Box>
        </Button>
      )}
      onSuccess={handlLoginGoogleSuccess}
    />
  );
};

export default GoogleLoginButton;
