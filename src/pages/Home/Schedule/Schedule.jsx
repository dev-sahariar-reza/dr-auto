import image1 from "../../../assets/schedule/calender.svg";
import image2 from "../../../assets/schedule/telephone.svg";
import image3 from "../../../assets/schedule/location.svg";

const Schedule = () => {
  return (
    <section className="container mx-auto my-10 bg-black rounded-xl grid grid-cols-1 lg:grid-cols-3 gap-10 justify-center items-center px-5 py-12 text-white">
      <div className="flex justify-center items-center">
        <img src={image1} alt="calender icon" />
        <div className="ml-3">
          <p>We are open monday-friday</p>
          <h3 className="text-xl font-bold">7:00 am - 9:00 pm</h3>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src={image2} alt="calender icon" />
        <div className="ml-3">
          <p>Have a question?</p>
          <h3 className="text-xl font-bold">+8801740759249</h3>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src={image3} alt="calender icon" />
        <div className="ml-3">
          <p>Need a repair? our address</p>
          <h3 className="text-xl font-bold">Agrabad, Chattogram</h3>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
