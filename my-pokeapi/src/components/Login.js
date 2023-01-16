import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "./context/AuthProvider";
import "../style/login.css";
import axios from "../axios";

// L'url de l'API
// URL of the API
const LOGIN_URL = "http://localhost:5000/login";
const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  // Créer les states pour le nom d'utilisateur, le mot de passe, le message d'erreur et le succès
  // Create the states for the username, password, error message and success
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check si le nom d'utilisateur et le mot de passe ne sont pas vides
    // Check if the username and password are not empty
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ pseudo:user,password: pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  // Créer le formulaire pour se connecter avec le nom d'utilisateur et le mot de passe et le bouton pour soumettre
  // Create the form to login with the username and password and the button to submit
  return (
    <>
    <div className="background-login"></div>
      <img
        src="https://www.pngplay.com/wp-content/uploads/10/Pokemon-Free-Picture-PNG.png"
        alt="logo"
        className="img-pokemon"
      />
      {success ? (
        <section>
          <h1>You are logged in !</h1>
          <br />
          <p>
            <a href="/my-pokeapi">Go to Home</a>
            
          </p>
        </section>
      ) : (
        <section className="cadre">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Sign In</h1>

          <form onSubmit={handleSubmit}>
            <label htmlFor="username" className="txt-sign">
              Username :
            </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

            <label htmlFor="password" className="txt-sign">
              Password :
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button className="btn-sign-up">Sign In</button>
          </form>
          <p className="">
            Need an Account ?
            <br />
            <span className="line">
              {/*put router link here*/}
              <a href="/register">Sign Up</a>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default Login;
