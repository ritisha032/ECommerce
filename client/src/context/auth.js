import {useState,useEffect,useContext,createContext} from "react";
const authContext=createContext();
const [auth,setAuth]=useState({
    user:null,
    
})