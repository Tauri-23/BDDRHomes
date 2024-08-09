import { Outlet } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import { ModalProvider } from "../../contexts/ModalContext";
import ModalManager from "../../Managers/ModalManager";

export default function AgentDefault() {
    const { user, setUserType, userType, token, setUser, setToken } = useStateContext();
    return(
        <ModalProvider>
            <div className="w-100 h-100 position-relative">
                <ModalManager/>

                {/* Children */}
                <Outlet context={user}/>
                
            </div>
        </ModalProvider>
    )
}