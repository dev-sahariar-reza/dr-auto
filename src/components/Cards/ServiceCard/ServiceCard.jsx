import { FaArrowRightLong } from "react-icons/fa6";
const ServiceCard = ({ service }) => {
  const { _id, service_id, title, img, price } = service;

  return (
    <div>
      <div className="card w-96 h-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Service image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="mb-5">Price: {price}</p>
          <div className="card-actions">
            <button className="btn btn-secondary">
              View Details <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
