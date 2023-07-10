import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../../styles/AuthStyles.css";
import { useAuth } from "../../context/auth";
import { useLocation } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth,setAuth]=useAuth();

  const navigate = useNavigate();
  const location=useLocation();
  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post( `${process.env.REACT_APP_API}/api/v1/login`, {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
        //auth me data save karo
        setAuth({
          ...auth,
          user:res.data.user,
          token:res.data.token,

        });
        localStorage.setItem('auth',JSON.stringify(res.data));
        //login se pehle wale url pe redirect karo warna homepage par
        navigate(location.state || "/");
      } else {
        toast.warning(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.warning("Something went wrong");
    }
  };
  return (
    <Layout title="Login - Ecommerce App">
      <div className="form-container ">
        <form onSubmit={handleSubmit}>
          <h4 className="title">LOGIN FORM</h4>

          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>

          <div className="mb-3">
          <button type="submit" className="btn btn-primary" onClick={()=>{navigate("/forgot-password")}}>
            FORGOT PASSWORD?
          </button>
          </div>

          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>

         
        </form>
      </div>
    </Layout>
  );
};

export default Login;
