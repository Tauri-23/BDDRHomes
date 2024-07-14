import { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext({
    user: null,
    token: null,
    userType: null,
    setUser: () => {},
    setToken: () => {},
    setUserType: () => {}
});

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('USER')));
    const [token, setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    const [userType, setUserType] = useState(localStorage.getItem('USER_TYPE'));

    useEffect(() => {
        // Check if token exists in localStorage and set it initially
        const storedUser = localStorage.getItem('USER');
        if(storedUser) {
            setUser(JSON.parse(storedUser));
        }

        const storedToken = localStorage.getItem('ACCESS_TOKEN');
        if (storedToken) {
            setToken(storedToken);
        }

        const storedUserType = localStorage.getItem('USER_TYPE');
        if(storedUserType) {
            setUserType(storedUserType);
        }

    }, []);

    const updateUser = (newUser) => {
        setUser(newUser);
        if(newUser) {
            localStorage.setItem('USER', JSON.stringify(newUser));
        } else {
            localStorage.removeItem('USER');
        }
    }

    const updateToken = (newToken) => {
        setToken(newToken);
        if (newToken) {
            localStorage.setItem('ACCESS_TOKEN', newToken);
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    };

    const updateUserType = (newUserType) => {
        setUserType(newUserType);
        if(newUserType) {
            localStorage.setItem('USER_TYPE', newUserType);
        } else {
            localStorage.removeItem('USER_TYPE');
        }
    }

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
