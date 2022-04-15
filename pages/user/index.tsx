import type { NextPage } from 'next';
import debounce from 'lodash/debounce';
import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Box from '../../components/atom/Box';
import { useUser } from '../../contexts/user';
import Section from '../../components/molecules/Section';
import Text from '../../components/atom/Text';
import Button from '../../components/atom/Button';
import PasswordField from '../../components/molecules/PasswordField';
import { useChangePassword } from '../../apis/auth/changePassword/hook';
import toast from 'react-hot-toast';
import { removeCookies } from 'cookies-next';

const User: NextPage = () => {
  const router = useRouter();
  const [user, setUser] = useUser();
  const changePassword = useChangePassword();
  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmNewPasswords, setConfirmNewPassword] = useState<string>('');

  const handleChangePassword = async () => {
    try {
      await changePassword.mutateAsync({
        confirm_new_password: confirmNewPasswords,
        new_password: newPassword,
        current_password: oldPassword
      });
      toast('Password changed!');
    } catch (error: any) {}
  };

  const handleLogout = () => {
    removeCookies('votely.token');
    setUser(null);
    router.push('/login');
  };

  if (!user) return null;

  return (
    <Layout>
      <Head>
        <title>User</title>
      </Head>

      <Box className="space-y-5 pb-32">
        <Box className="flex flex-col">
          <Text fontSize="lg" fontWeight="bold">
            {user.username}
          </Text>
          <Text fontSize="sm">{user.email}</Text>
          <Button
            variant="text"
            onClick={handleLogout}
            className="underline w-fit !h-fit !min-h-fit text-sm self-end"
          >
            logout
          </Button>
        </Box>
        <hr />
        <Section className="mt-6" title="Change password">
          {user.password && (
            <Box className="space-y-1">
              <Text fontSize="sm">Old password</Text>
              <PasswordField onChange={e => setOldPassword(e.currentTarget.value)} />
            </Box>
          )}
          <Box className="space-y-1">
            <Text fontSize="sm">new password</Text>
            <PasswordField onChange={e => setNewPassword(e.currentTarget.value)} />
          </Box>
          <Box className="space-y-1">
            <Text fontSize="sm">confirm password</Text>
            <PasswordField onChange={e => setConfirmNewPassword(e.currentTarget.value)} />
          </Box>
          <Button onClick={handleChangePassword} isLoading={changePassword.isLoading}>
            Change
          </Button>
        </Section>
      </Box>
    </Layout>
  );
};

export default User;
