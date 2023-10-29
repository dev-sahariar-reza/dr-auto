import image1 from "../../../assets/about_us/person.jpg";
import image2 from "../../../assets/about_us/parts.jpg";

const About = () => {
  return (
    <section className="container mx-auto mt-10 mb-20">
      <h1 className="text-center text-4xl font-bold mb-8">About Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center">
        <div className="relative">
          <img
            src={image1}
            alt=""
            className="w-1/2 lg:w-[460px] h-1/2 lg:h-[475px] rounded-xl"
          />
          <img
            src={image2}
            alt=""
            className="w-1/2 lg:w-[327px] h-1/2: lg:h-[332px] border-[10px] border-white rounded-xl absolute top-16 lg:top-48 left-16 lg:left-52"
          />
        </div>
        <div className="pt-24">
          <h1 className="text-3xl font-extrabold mb-1">We are qualified </h1>
          <h1 className="text-3xl font-extrabold mb-1">& of experience</h1>
          <h1 className="text-3xl font-extrabold mb-1">in this field</h1>
          <p className="text-justify mt-8">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="my-4 text-justify">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-neutral">Get More Info</button>
        </div>
      </div>
    </section>
  );
};

export default About;
