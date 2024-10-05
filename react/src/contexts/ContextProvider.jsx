import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie"; // Import js-cookie
import { auth } from "../firebase-cofig.js";
import { signOut } from "firebase/auth";

const StateContext = createContext({
    user: null,
    token: null,
    userType: null,
    setUser: () => {},
    setToken: () => {},
    setUserType: () => {}
});

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const cookieUser = Cookies.get('USER');
        return cookieUser ? JSON.parse(cookieUser) : null;
    });
    
    const [token, setToken] = useState(() => Cookies.get('ACCESS_TOKEN'));
    
    const [userType, setUserType] = useState(() => Cookies.get('USER_TYPE'));

    useEffect(() => {
        // Check cookies initially
        const cookieUser = Cookies.get('USER');
        if (cookieUser) {
            setUser(JSON.parse(cookieUser));
        }

        const cookieToken = Cookies.get('ACCESS_TOKEN');
        if (cookieToken) {
            setToken(cookieToken);
        }

        const cookieUserType = Cookies.get('USER_TYPE');
        if (cookieUserType) {
            setUserType(cookieUserType);
        }
    }, []);

    const updateUser = (newUser) => {
        setUser(newUser);
        if (newUser) {
            Cookies.set('USER', JSON.stringify(newUser), { expires: 7 }); // Cookie expires in 7 days
        } else {
            Cookies.remove('USER');
        }
    };

    const updateToken = (newToken) => {
        setToken(newToken);
        if (newToken) {
            Cookies.set('ACCESS_TOKEN', newToken, { expires: 7 }); // Cookie expires in 7 days
        } else {
            Cookies.remove('ACCESS_TOKEN');
            signOut(auth); // Sign out user if token is removed
        }
    };

    const updateUserType = (newUserType) => {
        setUserType(newUserType);
        if (newUserType) {
            Cookies.set('USER_TYPE', newUserType, { expires: 7 }); // Cookie expires in 7 days
        } else {
            Cookies.remove('USER_TYPE');
        }
    };

    return (
        <StateContext.Provider value={{
            user,
            token,
            userType,
            setUser: updateUser,
            setToken: updateToken,
            setUserType: updateUserType
        }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
