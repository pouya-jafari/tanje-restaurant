import React from "react";
import { useNavigate } from "react-router-dom";
function ErrorPage() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <main style={mainStyle}>
      <h1 style={headingStyle}>مشکلی پیش آمده است</h1>
      <p style={paragraphStyle}>هیچ صفحه ای یافت نشد</p>
      <span></span>
      <button style={buttonStyle} onClick={goToHomePage}>
        به صفحه اصلی برگردید
      </button>
    </main>
  );
}

const mainStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#d8ad63",

  backgroundSize: "300% 300%",
  animation: "backgroundMove 10s ease infinite",
  color: "#ECF0F1",
  padding: "20px",
  textAlign: "center",
};

const headingStyle: React.CSSProperties = {
  fontSize: "3rem",
  marginBottom: "20px",
  color: "#E74C3C",
  transition: "color 0.3s ease",
};

const paragraphStyle: React.CSSProperties = {
  fontSize: "1.5rem",
  transition: "transform 0.3s ease",
  marginBottom: "30px",
};
const buttonStyle: React.CSSProperties = {
  padding: "10px 20px",
  fontSize: "1.2rem",
  color: "#fff",
  backgroundColor: "#215f11",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  animation: "pulse 1.5s infinite",
};

const styles = `
  @keyframes backgroundMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  h1:hover {
    color: #ECF0F1;
  }

  p:hover {
    transform: scale(1.1);
  }

   button:hover {
    background-color: #2980b9;
    transform: scale(1.1);
  }

`;

const StyleElement = () => {
  return <style>{styles}</style>;
};

export default function StyledErrorPage() {
  return (
    <>
      <StyleElement />
      <ErrorPage />
    </>
  );
}
