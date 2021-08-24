import React, { useEffect, useState } from 'react';
import './App.css';
import { Auth0Provider } from '@auth0/auth0-react';
import Routers from './Routers';
import AppProvider from './context/AppProvider';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const App = () => {
  const [redirect, setRedirect] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const redirectUri = localStorage.getItem('_redirect');
    console.log('redirectUri', redirectUri)
    if (!redirectUri) {
      setLoading(false);
    } else {
      const redirectUri = localStorage.getItem('_redirect');
      localStorage.removeItem('_redirect')
      setRedirect(redirectUri);
      setLoading(false);
    }
  }, []);

  const handleRedirect = () => {
    const redirectUri = localStorage.getItem('_redirect');
    localStorage.removeItem('_redirect')
    setRedirect(redirectUri);
    setLoading(false);
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={handleRedirect}
    >
      <AppProvider>
        <Routers redirect={redirect} loading={loading} />
      </AppProvider>
    </Auth0Provider>
  );
};

export default App;