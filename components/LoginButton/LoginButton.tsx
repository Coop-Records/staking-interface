const LoginButton = () => {
  const { login } = usePrivy();

  return <button onClick={login}>Login</button>;
};

export default LoginButton;
