import { useNavigate } from "react-router-dom";
// import logo from "../assets/tanjeLogo.png";
const Intro = () => {
  const navigate = useNavigate();
  function NavigateHandler() {
    navigate("/home");
  }
  return (
    <div className="banner">
      <div className="head-content">
        <h1>طنجه</h1>
        {/* <img
          src={logo}
          alt=""
          className="h-[400px] items-center justify-center mx-auto"
        /> */}
        <p>طعم اصیل ایرانی</p>
        <div>
          <button type="button">
            <span></span>Contac Us
          </button>
          <button type="button" onClick={NavigateHandler}>
            <span></span>Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
