import React, { useEffect, useState } from 'react';
import './App.css';
import { Auth0Provider } from '@auth0/auth0-react';
import Routers from './Routers';
import AppProvider from './context/AppProvider';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Search from './components/search/Search';

import CreateProfile from './components/profile/ProUserinfo';
import BecomePro from './components/become-pro/BecomePro';
import CreateAds from './components/create-ads/CreateAds';
import HelpCenter from './components/help-center/HelpCenter';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import TermsPrivacy from './components/terms-privacy/TermsPrivacy';
import InviteFriend from './components/invite-friend/InviteFriend';
import Team from './components/team/Team';
import Favorite from './components/favorite/Favorite';
import SignUp from './components/sign-up/SignUp';
import AppProvider from './context/AppProvider';
import ProfilePro from './components/profile-pro/ProfilePro';

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
        <Router>
          {redirect && <Redirect to={redirect} />}
          {!loading && (
            <>
              <Header />
              <Switch>

                <Route exact path='/'>
                  <Home />
                </Route>

                <Route path='/sign-up'>
                  <SignUp />
                </Route>

                <Route exact path='/search'>
                  <Search />
                </Route>

                <Route path='/profile/:id'>
                  <ProfilePro />
                </Route>

                <Route path='/profile/'>
                  <CreateProfile />
                </Route>

                <Route path='/become-pro'>
                  <BecomePro />
                </Route>

                <Route path='/create-ads'>
                  <CreateAds />
                </Route>

                <Route path='/favorite-pro'>
                  <Favorite />
                </Route>

                <Route path='/help-center'>
                  <HelpCenter />
                </Route>

                <Route path='/about'>
                  <About />
                </Route>

                <Route path='/contact'>
                  <Contact />
                </Route>

                <Route path='/terms-privacy'>
                  <TermsPrivacy />
                </Route>

                <Route path='/invite-friend'>
                  <InviteFriend />
                </Route>

                <Route path='/team'>
                  <Team />
                </Route>

              </Switch>
              <Footer />
            </>
          )}
        </Router>
      </AppProvider>
    </Auth0Provider>
  );
};

export default App;