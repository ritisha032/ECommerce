import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/user/Dashboard";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/Auth/Login";
import PrivateRoute from "./components/Layout/Routes/Private";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signup" element={<Register/>}></Route>
        
        <Route path="/dashboard" element={<PrivateRoute/>}>
            <Route path="" element={<Dashboard/>}></Route>
        </Route>
       

        <Route path="/login" element={<Login/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/policy" element={<Policy/>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
    </>
  );
}

export default App;
