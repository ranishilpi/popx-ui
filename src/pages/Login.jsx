import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  return (
    <div className="formContainer">

      <h2 className="title">Sign in to your PopX account</h2>

      <p className="subtitle">
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </p>

      <div className="formGroup">
        <label>Email Address</label>
        <input type="email" placeholder="Enter email address"/>
      </div>

      <div className="formGroup">
        <label>Password</label>
        <input type="password" placeholder="Enter password"/>
      </div>

      <button
        className="primaryBtn"
        onClick={()=>navigate("/profile")}
      >
        Login
      </button>

    </div>
  )
}

export default Login;