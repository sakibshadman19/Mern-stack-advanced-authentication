// import {useState,useEffect} from "react"

// import axios from "axios"



// const PrivateScreen = ({history}) => {


//     const [error,setError] = useState("") 
//     const [privateData,setPrivateData] = useState("")

//     useEffect(()=> {
//         if(!localStorage.getItem("authToken")){
//             history.push("/login")

//         }

//         const fetchPrivateData = async() => {
//             const config  = {
//                 header: {
//                     "Content-Type" : "application/json",
//                     "Authorization" : `Bearer ${localStorage.getItem("authToken")} `

//                 }
//             }

//             try{
//                 const {data} = await axios.get("/api/private",config)
//                 setPrivateData(data.data)

//             }
//             catch(error){
//                 localStorage.removeItem("authToken")
//                 setError("You are not authorized please login")
//             }
//         }
//         fetchPrivateData();
//     },[history])


//     const logoutHandler = ()=>{
//         localStorage.removeItem("authToken")
//         history.push("/login")
        
//     }


//   return error ? {error}: (

//       <>
//           <div>{privateData}</div>
//           <button onClick={logoutHandler}>logout</button>
//       </>
//   )
  
// }

// export default PrivateScreen




import { useState, useEffect } from "react";
import axios from "axios";
import "./PrivateScreen.css";

const PrivateScreen = ({history}) => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

  useEffect(() => {
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/private", config);
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };

    fetchPrivateDate();
  }, []);

  const logoutHandler = ()=>{
          localStorage.removeItem("authToken")
            history.push("/login")
            
        }
  return error ? (

    
        
    
      
    <span className="error-message">{error}</span>
  ) : 
  <>
      
      
        <div>{privateData}</div>
        <button onClick={logoutHandler}>logout</button>  
      ;
      

  </>
};

export default PrivateScreen;