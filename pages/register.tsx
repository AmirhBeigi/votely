/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';

import Box from '@/components/atom/Box';
import Button from '@/components/atom/Button';
import Text from '@/components/atom/Text';
import TextField from '@/components/atom/TextField';
import { Handshake } from '@/components/illustrations';
import Layout from '@/components/Layout';
import GoogleLoginButton from '@/components/molecules/GoogleLoginButton';
import PasswordField from '@/components/molecules/PasswordField';
import { useRegister } from '@/apis/auth/register';

const Register: NextPage = () => {
  const router = useRouter();
  const register = useRegister();
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleRegister = () =>
    register.mutate({
      username,
      email,
      password,
      confirm_password: confirmPassword
    });

  return (
    <Layout shouldNotShowNavigationBar={true}>
      <Head>
        <title>Register</title>
      </Head>

      <main className="flex flex-col items-center w-full h-full justify-between">
        <Box className="w-full flex flex-col items-center">
          <Box className="w-full flex justify-center items-center h-28">
            <Handshake color="#000" />
          </Box>
          <Box className="flex flex-col w-full space-y-4 mt-10">
            <Box className="w-full space-y-2">
              <Text fontWeight="medium" fontSize="sm">
                UserName
              </Text>
              <TextField onChange={e => setUsername(e.currentTarget.value)} />
            </Box>
            <Box className="w-full space-y-2">
              <Text fontWeight="medium" fontSize="sm">
                Email
              </Text>
              <TextField onChange={e => setEmail(e.currentTarget.value)} />
            </Box>
            <Box className="w-full space-y-2">
              <Text fontWeight="medium" fontSize="sm">
                Password
              </Text>
              <PasswordField onChange={e => setPassword(e.currentTarget.value)} />
            </Box>
            <Box className="w-full space-y-2">
              <Text fontWeight="medium" fontSize="sm">
                Confirm Password
              </Text>
              <PasswordField onChange={e => setConfirmPassword(e.currentTarget.value)} />
            </Box>
            <Button onClick={handleRegister} isLoading={register.isLoading}>
              Register
            </Button>
          </Box>
        </Box>
        <Box className="flex flex-col space-y-1 w-full">
          <Button variant="text" onClick={() => router.push('/login')}>
            I'm have account. <strong className="underline">login</strong>
          </Button>
          <GoogleLoginButton />
        </Box>
      </main>
    </Layout>
  );
};

export default Register;
