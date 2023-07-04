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
import ForgotPassword from "./pages/Auth/ForgotPassword";
import AdminRoute from "./components/Layout/Routes/Admin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreateCategory from "./pages/admin/CreateCategory";
import CreateProduct from "./pages/admin/CreateProduct";
import Users from "./pages/admin/Users";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signup" element={<Register/>}></Route>
        
        <Route path="/dashboard" element={<PrivateRoute/>}>
        <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>

        <Route path="/dashboard" element={<AdminRoute/>}>
            <Route path="admin" element={<AdminDashboard/>}></Route>
            <Route path="admin/create-category" element={<CreateCategory/>}></Route>
            <Route path="admin/create-product" element={<CreateProduct/>}></Route>
            <Route path="admin/users" element={<Users/>}></Route>
        </Route>
       

        <Route path="/login" element={<Login/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/forgot-password" element={<ForgotPassword/>}></Route>

        <Route path="/policy" element={<Policy/>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
    </>
  );
}

export default App;
