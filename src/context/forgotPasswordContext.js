import React, { createContext, useState } from 'react';

import api from '../services/api';
const ForgotPasswordContext = createContext({});

export const ForgotPasswordProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');


  async function sendEmailToken(paramEmail) {

    const email = paramEmail;
    const { data } = await api.post('/forgot-password', { email });

    setEmail(paramEmail);
  }

  async function checkToken(paramToken) {
    const token = paramToken;
    const { data } = await api.post('/token-verification', { email, token });

    console.log(`CHECK TOKEN => ${data}`);

    setToken(paramToken);
  }

  async function resetPassword(password, confirmedPassword) {

    console.log(`RESET PASS => ${password} - ${confirmedPassword}`);

    const {data} = await api.post('/reset-password', {
      email,
      token,
      password,
      confirmedPassword
    }); 

    console.log(data);
  }

  return (
    <ForgotPasswordContext.Provider value={{
      email,
      token,
      sendEmailToken,
      checkToken,
      resetPassword
    }}>
      {children}
    </ForgotPasswordContext.Provider>
  );
};

export default ForgotPasswordContext;