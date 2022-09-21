import { useContext } from "react";
import { useEffect } from "react";
import { createContext , useState} from "react";


const AuthContext = createContext(null)

export const AuthProvider=({children})=>{

    localStorage.setItem('name' , 'rahul')
    const [user , setUser] = useState(null)

    useEffect(() => {
        let item = localStorage.getItem('user');
        if(item){setUser(JSON.parse(item))}
        
      }, []);

    const login = (user) =>{
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user)
    }
    const logout = () =>{
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{user,login , logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () =>{
    return useContext(AuthContext)
}