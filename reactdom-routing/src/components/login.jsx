import { useState } from "react";
import { useAuth } from "./auth";
import { useNavigate ,useLocation} from "react-router-dom";
import "./comp-css/compo-styles.css";
import { Navigate } from "react-router-dom";

export const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  localStorage.setItem('a' , auth)
  const b = localStorage.getItem('a')
  const navigate = useNavigate();
  const location = useLocation()


  const redirectPath = location.state?.path || '/'

  const handleLogin = () => {
    auth.login(user);
    navigate(redirectPath,{ replace:true });
  };

  if(auth.user){
    return <Navigate to='/' />
}

  return (
    <div className="login-form-container">
      <form action="" className="login-form">
      <div><label htmlFor="">
          Username{" "}
          <input type="text" onChange={(e) => setUser(e.target.value)} />
        </label></div><div>
        <label htmlFor="">
          Password{" "}
          <input type="password" onChange={(e) => setUser(e.target.value)} />
        </label></div>
        <button onClick={handleLogin} className="btn-login btn">Login</button>
      </form>
    </div>
  );
};
