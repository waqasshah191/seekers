import { createContext, useState } from 'react';

export const AppContext = createContext({
    userId: null,
    user: null,
});

const AppProvider = ({ children }) => {
    const [userId, setUserId] = useState(null);
    const [user, setUser] = useState(null);    
    return (
        <AppContext.Provider
            value={{
                user,
                userId,
                onUserId: setUserId,
                onUser: setUser, 
            }}
        >
            {children}
        </AppContext.Provider>
    )
};


export default AppProvider;