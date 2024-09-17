import { createContext } from "react";

export const globalContext = createContext(null);



const GlobalContainer = (props) => {
    const contextValue = {
        name : "Kishor Phawade"
    }
    
    return (
        <globalContext.Provider value={contextValue}>
            {props.children}
        </globalContext.Provider>
    )
}

export default GlobalContainer