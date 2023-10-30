import image1 from "../../../assets/chose_us/1.svg";
import image2 from "../../../assets/chose_us/2.svg";
import image3 from "../../../assets/chose_us/3.svg";
import image4 from "../../../assets/chose_us/4.svg";
import image5 from "../../../assets/chose_us/5.svg";
import image6 from "../../../assets/chose_us/6.svg";

const Chose = () => {
  return (
    <section className="container mx-auto my-12">
      <h1 className="text-center font-bold text-4xl mb-6">Why Choose us</h1>
      <p className="text-center w-1/2 mx-auto mb-6">
        The majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.{" "}
      </p>
      <div className="grid grid-cols-6 gap-6 justify-center items-center">
        <div className="p-5 border-4 rounded-lg flex flex-col items-center justify-center">
          <img src={image1} alt="" className="mb-4" />
          <h3 className="font-bold text-xl">Expert Team</h3>
        </div>
        <div className="p-5 border-4 rounded-lg flex flex-col items-center justify-center bg-red-500 text-white">
          <img src={image2} alt="" className="mb-4" />
          <h3 className="font-bold text-xl">Timely Delivery</h3>
        </div>
        <div className="p-5 border-4 rounded-lg flex flex-col items-center justify-center">
          <img src={image3} alt="" className="mb-4" />
          <h3 className="font-bold text-xl">24/7 Support</h3>
        </div>
        <div className="p-5 border-4 rounded-lg flex flex-col items-center justify-center">
          <img src={image4} alt="" className="mb-4" />
          <h3 className="font-bold text-xl">Best Equipment</h3>
        </div>
        <div className="p-5 border-4 rounded-lg flex flex-col items-center justify-center">
          <img src={image5} alt="" className="mb-4" />
          <h3 className="font-bold text-xl">100% Guranty</h3>
        </div>
        <div className="p-5 border-4 rounded-lg flex flex-col items-center justify-center">
          <img src={image6} alt="" className="mb-4" />
          <h3 className="font-bold text-xl">Timely Delivery</h3>
        </div>
      </div>
    </section>
  );
};

export default Chose;
