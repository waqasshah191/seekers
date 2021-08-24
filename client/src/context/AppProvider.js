import { createContext, useState } from 'react';

export const AppContext = createContext({
    userId: null,
    user: null,
    favorites: [],
});

const AppProvider = ({ children }) => {
    const [userId, setUserId] = useState(null);
    const [user, setUser] = useState(null);
    const [favorites, setFavorites] = useState([]);    
    return (
        <AppContext.Provider
            value={{
                user,
                userId,
                onUserId: setUserId,
                onUser: setUser,
                favorites,
                onFavorites: setFavorites
            }}
        >
            {children}
        </AppContext.Provider>
    )
};


export default AppProvider;