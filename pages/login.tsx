/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';

import Box from '@/components/atom/Box';
import Button from '@/components/atom/Button';
import Text from '@/components/atom/Text';
import TextField from '@/components/atom/TextField';
import { HandingKey } from '@/components/illustrations';
import Layout from '@/components/Layout';
import PasswordField from '@/components/molecules/PasswordField';
import GoogleLoginButton from '@/components/molecules/GoogleLoginButton';
import { useLogin } from '@/apis/auth/login';

const Login: NextPage = () => {
  const router = useRouter();
  const login = useLogin();
  const [identifier, setIdentifier] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => login.mutate({ identifier, password });

  return (
    <Layout shouldNotShowNavigationBar={true}>
      <Head>
        <title>Login</title>
      </Head>

      <main className="pt-10 flex flex-col items-center w-full h-full justify-between">
        <Box className="w-full flex flex-col items-center">
          <Box className="w-full flex justify-center items-center h-40">
            <HandingKey color="#000" />
          </Box>
          <Box className="flex flex-col w-full space-y-4 mt-10">
            <Box className="w-full space-y-2">
              <Text fontWeight="medium" fontSize="sm">
                Username or Email
              </Text>
              <TextField onChange={e => setIdentifier(e.target.value)} />
            </Box>
            <Box className="w-full space-y-2">
              <Text fontWeight="medium" fontSize="sm">
                Password
              </Text>
              <PasswordField onChange={e => setPassword(e.currentTarget.value)} />
            </Box>
            <Button onClick={handleLogin} isLoading={login.isLoading}>
              Login
            </Button>
          </Box>
        </Box>
        <Box className="flex flex-col space-y-1 w-full">
          <Button variant="text" onClick={() => router.push('/register')}>
            didn't have an account? <strong className="underline">sign up</strong>
          </Button>
          <GoogleLoginButton />
        </Box>
      </main>
    </Layout>
  );
};

export default Login;
