import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  return (
    <div className="formContainer">

      <h2 className="title">Create your PopX account</h2>

      <div className="formGroup">
        <label>Full Name*</label>
        <input type="text" placeholder="Enter full name"/>
      </div>

      <div className="formGroup">
        <label>Phone number*</label>
        <input type="text" placeholder="Enter phone number"/>
      </div>

      <div className="formGroup">
        <label>Email address*</label>
        <input type="email" placeholder="Enter email address"/>
      </div>

      <div className="formGroup">
        <label>Password*</label>
        <input type="password" placeholder="Enter password"/>
      </div>

      <div className="formGroup">
        <label>Company name</label>
        <input type="text" placeholder="Enter company name"/>
      </div>

      <p className="agencyText">Are you an Agency?*</p>

      <div className="radioGroup">
        <label>
          <input type="radio" name="agency"/> Yes
        </label>

        <label>
          <input type="radio" name="agency"/> No
        </label>
      </div>

      <button
        className="primaryBtn"
        onClick={()=>navigate("/profile")}
      >
        Create Account
      </button>

    </div>
  )
}

export default Register;