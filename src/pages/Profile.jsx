function Profile() {

  return (
    <div>

      <h3 style={{borderBottom:"1px solid #eee", paddingBottom:"10px"}}>
        Account Settings
      </h3>

      <div style={{display:"flex", marginTop:"20px", gap:"15px"}}>

        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="profile"
          style={{
            width:"60px",
            height:"60px",
            borderRadius:"50%"
          }}
        />

        <div>
          <h4 style={{margin:"0"}}>Marry Doe</h4>
          <p style={{margin:"0", color:"#222"}}>Marry@gmail.com</p>
        </div>

      </div>

      <p style={{marginTop:"20px", color:"#222", lineHeight:"1.5"}}>
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, 
        Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et 
        Dolore Magna Aliquyam Erat, Sed Diam
      </p>

      <hr style={{marginTop:"20px", border:"1px dashed #eee"}}/>

    </div>
  )
}

export default Profile