import image1 from "../../../assets/team/1.jpg";
import image2 from "../../../assets/team/2.jpg";
import image3 from "../../../assets/team/3.jpg";
import {
  FaFacebook,
  FaSquareXTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

const Team = () => {
  return (
    <section className="container mx-auto my-10">
      <h1 className="text-center text-4xl font-bold mb-5">Meet Our Team</h1>
      <p className="text-center w-1/2 mx-auto mb-8">
        The majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.{" "}
      </p>

      <div className="grid grid-cols-3 gap-5">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={image1}
              alt="team-member-1"
              className="rounded-xl"
              loading="lazy"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <div className="flex justify-between items-center my-4">
              <button className="btn btn-circle mr-3">
                <FaFacebook />
              </button>
              <button className="btn btn-circle mr-3">
                <FaSquareXTwitter />
              </button>
              <button className="btn btn-circle mr-3">
                <FaLinkedin />
              </button>
              <button className="btn btn-circle mr-3">
                <FaInstagram />
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={image2}
              alt="team-member-1"
              className="rounded-xl"
              loading="lazy"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <div className="flex justify-between items-center my-4">
              <button className="btn btn-circle mr-3">
                <FaFacebook />
              </button>
              <button className="btn btn-circle mr-3">
                <FaSquareXTwitter />
              </button>
              <button className="btn btn-circle mr-3">
                <FaLinkedin />
              </button>
              <button className="btn btn-circle mr-3">
                <FaInstagram />
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={image3}
              alt="team-member-1"
              className="rounded-xl"
              loading="lazy"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <div className="flex justify-between items-center my-4">
              <button className="btn btn-circle mr-3">
                <FaFacebook />
              </button>
              <button className="btn btn-circle mr-3">
                <FaSquareXTwitter />
              </button>
              <button className="btn btn-circle mr-3">
                <FaLinkedin />
              </button>
              <button className="btn btn-circle mr-3">
                <FaInstagram />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
