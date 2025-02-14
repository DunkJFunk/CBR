import React from 'react'
import Login from '@react-login-page/base';
import { useFetcher } from 'react-router-dom';

const Login = () => {
    const fetcher = useFetcher();
    const handle = (even) => {
      even.preventDefault();
      fetcher.submit(even.currentTarget);
    };
  
    useEffect(() => {
      if (fetcher.data?.code !== 1 && fetcher.data?.message) {
        // ....
      }
    }, [fetcher.data]);
  
    return (
      <fetcher.Form method="post" onSubmit={handle}>
        <Login>
          <Username name="userUserName" />
          <Password placeholder="请输入密码" name="userPassword" />
          <Submit>提交</Submit>
        </Login>
      </fetcher.Form>
    );
  }

export default Login