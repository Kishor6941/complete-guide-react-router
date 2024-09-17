import { createContext } from "react";
import { useState } from "react";
export const globalContext = createContext(null);


const GlobalContainer = (props) => {
    const [isLogin, setIsLogin] = useState(false)
    const contextValue = {
        isLogin,
        setIsLogin
    }
    
    return (
        <globalContext.Provider value={contextValue}>
            {props.children}
        </globalContext.Provider>
    )
}

export default GlobalContainer