import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CurrentUser } from "../context/CurrentUser";
import logo from "../logo.jpg";
// import '../Dakota-Frontend/landing.css'  put css in public folder to import
// Need to import our styles so we can delete all this below
const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#9c88ff", // Example background color
  },
  buttons: {
    margin: "20px 0",
  },
  button: {
    textDecoration: "none",
    padding: "10px 20px",
    color: "#fff",
    backgroundColor: "#007bff",
    borderRadius: "5px",
    margin: "5px",
    fontSize: "16px",
  },
};

const Home = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      console.log("currentUser", currentUser);
    }
  }, [currentUser]);

  const logout = () => {
    localStorage.removeItem("token");
    setCurrentUser(null);
    navigate("/");
  };

  return (
    <div className="card">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{ width: "100px", height: "100px", paddingBottom: "20px" }}
        />
        {currentUser ? (
          <div style={styles.buttons}>
            <Link to="/dashboard" style={styles.button}>
              Go to your Dashboard
            </Link>
            <button onClick={() => logout()} style={styles.button}>
              Log Out
            </button>
          </div>
        ) : (
          <>
            <div style={styles.buttons}>
              <Link to="/login" style={styles.button}>
                Log In
              </Link>
              <Link to="/signup" style={styles.button}>
                Sign Up
              </Link>
            </div>

            <p>
              Already have an account?{" "}
              <Link className="login-link" to="/login">
                Log in here
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
