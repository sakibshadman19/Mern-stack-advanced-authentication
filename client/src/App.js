import { BrowserRouter as Router,Switch,Route} from "react-router-dom"

import PrivateRoute from "./components/routing/PrivateRoute";

import PrivateScreen from "./components/screens/PrivateScreen.js"
import LoginScreen from "./components/screens/LoginScreen.js"
import RegisterScreen from "./components/screens/RegisterScreen.js"
import ForgotPasswordScreen from "./components/screens/ForgotPasswordScreen.js"
import ResetPasswordScreen from "./components/screens/ResetPasswordScreen.js"

const App=()=> {
  return (
   <Router>
     <div className="app">

       <Switch>
       <PrivateRoute exact path="/" component={PrivateScreen}/>
         <Route exact path="/login" component ={LoginScreen}/>
         <Route exact path="/register" component={RegisterScreen}/>

         <Route exact path= "/forgotPassword" component={ForgotPasswordScreen}/>
         <Route exact path= "/resetpassword/:resetToken" component={ResetPasswordScreen}/>

       </Switch>
     </div>
   </Router>

   
  
  )
  
}

export default App;
