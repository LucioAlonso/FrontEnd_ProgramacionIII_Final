import { createContext } from "react"; 

const UserContext = createContext({
    userName: null,
    token: null,
    rol: null
})

export default UserContext;