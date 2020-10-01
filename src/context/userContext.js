import React, { createContext, useState } from 'react';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    
    function sessionUser(data) {
        console.log(data);
        setUser(data);
    }

    return (
        <UserContext.Provider value={{
            user,
            sessionUser
        }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;