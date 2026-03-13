import { useNavigate } from "react-router-dom";

function Welcome() {

  const navigate = useNavigate();

  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-end",height:"80vh"}}>

      <div>

        <h2 style={{color:"#222", fontWeight:"600"}}>Welcome to PopX</h2>

        <p style={{color:"#222"}}>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>

        <button
          onClick={()=>navigate("/register")}
          // style={primaryBtn}
          style={{cursor:"pointer", ...primaryBtn}}
        >
          Create Account
        </button>

        <button
          onClick={()=>navigate("/login")}
          style={{cursor:"pointer", ...primaryBtn}}
        >
          Already Registered? Login
        </button>

      </div>

    </div>
  )
}

const primaryBtn = {
  width:"100%",
  padding:"12px",
  marginTop:"20px",
  background:"linear-gradient(90deg,#6C25FF,#7B3EFF)",
  color:"white",
  border:"none",
  borderRadius:"8px",
  fontWeight:"bold"
}

const secondaryBtn = {
  width:"100%",
  padding:"12px",
  marginTop:"10px",
  background:"#E8DAFF",
  border:"none",
  borderRadius:"8px",
  fontWeight:"bold"
}

export default Welcome