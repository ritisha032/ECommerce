//ye function user details aur token ko fetch karke local storage me save karta aur refresh hone ke baad bini hatta

import {useState,useEffect,useContext,createContext} from "react";
const AuthContext=createContext();
const AuthProvider= ({children}) =>{
    const[auth,setAuth]=useState({
        user:null,
        token:""
    });

    //refresh hone ke baad bi rhega issee
    useEffect(() => {
        const data = localStorage.getItem("auth");
        if (data) {
          const parseData = JSON.parse(data);
          setAuth({
            ...auth,
            user: parseData.user,
            token: parseData.token,
          });
        }
      }, [auth]);
    return (
        <AuthContext.Provider  value={[auth, setAuth]}>
          {children}
        </AuthContext.Provider>
      );
}
//custom hook
const useAuth = () => useContext(AuthContext)
export {useAuth,AuthProvider}