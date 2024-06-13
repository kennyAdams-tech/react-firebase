import { useState } from "react";
import { AppContext } from "./AppContext";

const UserContext = ({ children }) => {
   const [user, setUser] = useState(null)

   return (
        <AppContext.Provider value={{user, setUser}}>
            {children}
        </AppContext.Provider>
   )
}

export default UserContext