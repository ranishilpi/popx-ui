import { useNavigate, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function BottomNav() {

  const navigate = useNavigate();
  const location = useLocation();

  const pages = ["/", "/login", "/register", "/profile"];

  const currentIndex = pages.indexOf(location.pathname);

  const goNext = () => {
    if (currentIndex < pages.length - 1) {
      navigate(pages[currentIndex + 1]);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      navigate(pages[currentIndex - 1]);
    }
  };

  return (
    <div style={navStyle}>

      <FaHome
        style={{cursor:"pointer"}}
        onClick={() => navigate("/")}
      />

      <IoIosArrowBack
        style={{cursor:"pointer"}}
        onClick={goPrev}
      />

      <span>
        {currentIndex + 1} of {pages.length}
      </span>

      <IoIosArrowForward
        style={{cursor:"pointer"}}
        onClick={goNext}
      />

    </div>
  );
}

const navStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "15px",
  padding: "15px",
  borderTop: "1px solid #ddd",
  background: "#fff",
  color: "#444",
  fontWeight: "500"
};

export default BottomNav;