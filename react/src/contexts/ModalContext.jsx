import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({children}) => {
    const [modalState, setModalState] = useState({type: null, props: {}});

    const showModal = (type, props = {}) => {
        setModalState({ type, props });
    };

    const hideModal = () => {
        setModalState({type: null, props: {}});
    };

    return(
        <ModalContext.Provider value={{modalState, showModal, hideModal}}>
            {children}
        </ModalContext.Provider>
    );
};