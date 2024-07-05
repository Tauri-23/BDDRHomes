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
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    const [userType, setUserType] = useState(null);

    useEffect(() => {
        // Check if token exists in localStorage and set it initially
        const storedToken = localStorage.getItem('ACCESS_TOKEN');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    const updateToken = (newToken) => {
        setToken(newToken);
        if (newToken) {
            localStorage.setItem('ACCESS_TOKEN', newToken);
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    };

    return (
        <StateContext.Provider value={{
            user,
            token,
            userType,
            setUser,
            setToken: updateToken,
            setUserType
        }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
