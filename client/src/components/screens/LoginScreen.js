// import "./LoginScreen.css"

// import {useState,useEffect} from "react"

// import axios from "axios"
// import { Link } from "react-router-dom"



// const LoginScreen = ({history}) => {
   
//     const [email , setEmail] = useState("")
//     const [password , setPassword] = useState("")
 
//     const [error , setError] = useState("")

//     useEffect(()=>{
//         if(localStorage.getItem("authToken")){
//             history.push("/")

//         }
//     },[history])


//     const loginHandler =async(e)=>{
//         e.preventdefault()


//         const config ={
//             header: {
//                 "Content-Type" : "application/json"
//             }
//         }

        

//         try{
//             const {data} = await axios.post("/api/auth/login", {email,password},config);

//             localStorage.setItem("authToken",data.token)

//             history.push("/")

//         }
//         catch(error){
//             setError(error.response.data.error)
//             setTimeout(()=>{
//                 setError("")
//             },5000)
//         }

//     }
//   return (
//     <div>
//         <form onSubmit={loginHandler}>
//             <h3>login</h3>
//             {error && <span> {error}</span>}
          

//             <div>
//                 <label htmlFor="email">Email : </label>
//                 <input type="email" required id = "email" placeholder="Enter email" value = {email} onChange = {(e)=> setEmail(e.target.value)} tabIndex={1} />
//             </div>


//             <div>
//                 <label htmlFor="password">Password : 
//                 <Link to="/forgotpassword" tabIndex={4} > Forgot password?</Link></label>
//                 <input type="password" required id = "password" placeholder="Enter password" value = {password} onChange = {(e)=> setPassword(e.target.value)} tabIndex={2} />
//             </div>

           

//             <button type="submit" tabIndex={3}> login </button>
//             <span> don't have an account? <Link to="/register">register</Link>
//             </span>
          
//         </form>
//     </div>
//   )
// }

// export default LoginScreen










import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./LoginScreen.css";

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history]);

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/login",
        { email, password },
        config
      );

      localStorage.setItem("authToken", data.token);

      history.push("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="login-screen">
      <form onSubmit={loginHandler} className="login-screen__form">
        <h3 className="login-screen__title">Login</h3>
        {error && <span className="error-message">{error}</span>}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            tabIndex={1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password:{" "}
            <Link to="/forgotpassword" className="login-screen__forgotpassword">
              Forgot Password?
            </Link>
          </label>
          <input
            type="password"
            required
            id="password"
            autoComplete="true"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            tabIndex={2}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>

        <span className="login-screen__subtext">
          Don't have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default LoginScreen;