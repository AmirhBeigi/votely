import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Box from "../components/atom/Box";
import Button from "../components/atom/Button";
import Text from "../components/atom/Text";
import TextField from "../components/atom/TextField";
import { CloseEyeIcon, GoogleIcon, OpenEyeIcon } from "../components/icons";
import { HandingKey } from "../components/illustrations";
import { useRouter } from "next/router";
import { useLogin } from "../apis/auth/login/hook";
import Layout from "../components/Layout";

const Login: NextPage = () => {
  const router = useRouter();
  const login = useLogin();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [shouldShowPassword, setShouldShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      const { data: userData } = await login.mutateAsync({ identifier, password });
      router.push("/");
    } catch (e) {}
  };

  const handleShowPassword = () => {
    setShouldShowPassword(!shouldShowPassword);
  };

  return (
    <Layout shouldNotShowNavigationBar={true}>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
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
              <TextField onChange={(e) => setIdentifier(e.target.value)} value={identifier} />
            </Box>
            <Box className="w-full space-y-2">
              <Text fontWeight="medium" fontSize="sm">
                Password
              </Text>
              <TextField
                type={shouldShowPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                afterElement={
                  shouldShowPassword ? (
                    <CloseEyeIcon color="#000" onClick={handleShowPassword} />
                  ) : (
                    <OpenEyeIcon color="#000" onClick={handleShowPassword} />
                  )
                }
              />
            </Box>
            <Button onClick={handleLogin}>Login</Button>
          </Box>
        </Box>
        <Box className="flex flex-col space-y-3 w-full">
          <Button variant="text" onClick={() => router.push("/register")}>
          didn't have an account? <strong className="underline">sign up</strong>
          </Button>
          <Button variant="outlined">
            <Box className="flex justify-center space-x-2">
              <GoogleIcon color="#000" />
              <Text fontWeight="medium">Login with Google</Text>
            </Box>
          </Button>
        </Box>
      </main>
    </Layout>
  );
};

export default Login;
