import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Search from './components/search/Search';

import Profile from './components/profile/Profile';
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
import { AppContext } from './context/AppProvider';
import ProfilePro from './components/profile-pro/ProfilePro';
import Messages from './components/messages/components/Messages';
import { useContext } from 'react';
import { ConversationsProvider } from './components/messages/contexts/ConversationsProvider';
import { ContactsProvider } from './components/messages/contexts/ContactsProvider';
import { SocketProvider } from './components/messages/contexts/SocketProvider';

const Routers = ({ redirect, loading }) => {
    const { userId } = useContext(AppContext);
    return (
        <SocketProvider id={userId}>
            <ContactsProvider>
                <ConversationsProvider id={userId}>
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
                                <Profile />
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
                                
                            <Route path='/messages'>
                                <Messages />
                            </Route>
                            
                            </Switch>
                            <Footer />
                        </>
                        )}
                    </Router>
                </ConversationsProvider>
            </ContactsProvider>
        </SocketProvider>
    )
}

export default Routers;
