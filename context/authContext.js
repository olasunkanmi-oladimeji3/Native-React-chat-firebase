
import { createContext,useContext,  useEffect,useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isauthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // setTimeout(() => {
        //     setIsAuthenticated(true)
        // }, 3000);
       
    }, []);

    const login = (email, password) => {
        // call firebase login
    };

    const logout = () => {
        // call firebase logout
    };
    const register = (email, password,username,profileUrl) => {
        // call firebase register
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, register,isauthenticated}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const value = useContext(AuthContext);
    if(!value){
         throw new Error(" useAuth must be wrapped inside AuthProvider");
        
    }
    return value
}