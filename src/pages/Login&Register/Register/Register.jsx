import { useContext, useState } from "react";
import image from "../../../assets/login&register/login.svg";
import { FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const [control, setControl] = useState(false);
  const [error, setError] = useState("");
  const { register } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(name, photo, email, password);

    if (name.length || photo.length || email.length || password.length < 1) {
      Swal.fire("Error!", "Please enter all required information", "error");
      return;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setError("Please Add at least one upper Case");
    } else if (!/(?=.*[0-9])/.test(password)) {
      setError("Please Add at least one Number");
      return;
    } else if (!/(?=.*[!@#$&*])/.test(password)) {
      setError("Please Add at least one special character !@#$&*");
      return;
    } else if (password.length < 6) {
      setError("Please use at least 6 character");
      return;
    }

    setError("");

    register(email, password).then((result) => {
      const createdUser = result.user;
      Swal.fire("Well Done!", "You have been registered!", "success");
      form.reset();
    });
  };

  return (
    <section className="container mx-auto my-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 justify-center items-center">
        <div>
          <img src={image} alt="login image" loading="lazy" />
        </div>

        <div className="p-14 border-2">
          <h1 className="text-3xl font-bold text-center">Register Page</h1>

          <form onSubmit={handleRegister}>
            <div className="form-control w-full mb-6">
              <label className="label">
                <span className="label-text text-base font-bold">Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Your Name"
                name="name"
              />
            </div>
            <div className="form-control w-full mb-6">
              <label className="label">
                <span className="label-text text-base font-bold">Photo</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Your Photo URL"
                name="photo"
              />
            </div>
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
            <button className="btn btn-secondary btn-block">Register</button>
          </form>

          <p className="text-xl text-center font-semibold my-6">
            Or Register in With
          </p>

          <div className="text-center my-6">
            <button className="btn btn-circle btn-outline">
              <FaGoogle />
            </button>
          </div>

          <p className="text-red-700 font-semibold my-6">{error}</p>

          <Link to="/login" className="btn btn-link">
            Already have an account? Please Login.
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Register;
