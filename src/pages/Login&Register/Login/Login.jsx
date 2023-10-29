import { useContext, useState } from "react";
import image from "../../../assets/login&register/login.svg";
import { FaGoogle } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const [control, setControl] = useState(false);
  const [error, setError] = useState("");
  const { logInWithEmail, logInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // console.log(location);
  // console.log(from);

  // Login function with email and password
  const handleLogInWithEmail = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");

    logInWithEmail(email, password)
      .then((result) => {
        const user = result.user;
        const loggedUser = {
          email: user.email,
        };
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loggedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            // now i am storing the token in local storage but it is not best practice for real standard projects
            console.log(data);
            localStorage.setItem("dr-auto-access-token", data.token);
            Swal.fire("Well done!", "Login successful!", "success");
            form.reset();
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(errorMessage);
      });
  };

  // login with google function
  const handleGoogleLogin = () => {
    logInWithGoogle()
      .then((result) => {
        const user = result.user;
        const loggedUser = {
          email: user.email,
        };
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loggedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            // now i am storing the token in local storage but it is not best practice for real standard projects
            console.log(data);
            localStorage.setItem("dr-auto-access-token", data.token);
            Swal.fire("Well done!", "Login successful!", "success");
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(errorMessage);
      });
  };

  return (
    <section className="container mx-auto my-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 justify-center items-center">
        <div>
          <img src={image} alt="login image" loading="lazy" />
        </div>

        <div className="p-14 border-2">
          <h1 className="text-3xl font-bold text-center">Login Page</h1>

          <form onSubmit={handleLogInWithEmail}>
            <div className="form-control w-full mb-6">
              <label className="label">
                <span className="label-text text-base font-bold">Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered w-full"
                placeholder="Your Email"
                name="email"
              />
            </div>
            <div className="form-control w-full mb-6">
              <label className="label">
                <span className="label-text text-base font-bold">Password</span>
              </label>
              {control ? (
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Your Password"
                  name="password"
                />
              ) : (
                <input
                  type="password"
                  className="input input-bordered w-full"
                  placeholder="Your Password"
                  name="password"
                />
              )}
            </div>
            <div className="form-control w-52 mb-6">
              <label className="cursor-pointer label">
                {control ? (
                  <span className="label-text text-base font-bold">
                    Hide Password
                  </span>
                ) : (
                  <span className="label-text text-base font-bold">
                    Show Password
                  </span>
                )}
                <input
                  type="checkbox"
                  className="toggle toggle-secondary"
                  onClick={() => setControl(!control)}
                />
              </label>
            </div>
            <button className="btn btn-secondary btn-block">Login</button>
          </form>

          <p className="text-xl text-center font-semibold my-6">
            Or Sign in With
          </p>

          <div className="text-center my-6">
            <button
              className="btn btn-circle btn-outline"
              onClick={handleGoogleLogin}
            >
              <FaGoogle />
            </button>
          </div>

          <p className="text-red-700 font-semibold my-6">{error}</p>

          <Link to="/register" className="btn btn-link">
            New Here? Create an Account.
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
