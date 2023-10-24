import { useState } from "react";
import image from "../../../assets/login&register/login.svg";
import { FaGoogle } from "react-icons/fa6";

const Login = () => {
  const [control, setControl] = useState(false);
  const [error, setError] = useState("");

  return (
    <section className="container mx-auto my-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 justify-center items-center">
        <div>
          <img src={image} alt="login image" loading="lazy" />
        </div>

        <div className="p-14 border-2">
          <h1 className="text-3xl font-bold text-center">Login Page</h1>

          <form>
            <div className="form-control w-full mb-6">
              <label className="label">
                <span className="label-text text-base font-bold">Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered w-full"
                placeholder="Your Email"
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
                />
              ) : (
                <input
                  type="password"
                  className="input input-bordered w-full"
                  placeholder="Your Password"
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
            <button className="btn btn-circle btn-outline">
              <FaGoogle />
            </button>
          </div>

          <p className="text-red-700 font-semibold my-6">{error}</p>
        </div>
      </div>
    </section>
  );
};

export default Login;
