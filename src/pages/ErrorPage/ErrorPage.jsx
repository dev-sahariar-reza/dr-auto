import { Link, useRouteError } from "react-router-dom";
import errorImage from "../../assets/error/error.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const ErrorPage = () => {
  const { error } = useRouteError();

  return (
    <section>
      <img src={errorImage} alt="error Picture" className="w-1/2 mx-auto" />

      <div className="text-center">
        <p className="text-3xl font-bold text-center my-8">{error?.message}</p>
        <Link>
          <button className="btn btn-neutral">
            Back to home <FaArrowRightLong />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
