import Slider from "../../../components/Slider/Slider";
import About from "../About/About";
import BrowseProducts from "../BrowseProducts/BrowseProducts";
import Schedule from "../Schedule/Schedule";
import Service from "../Service/Service";

const Home = () => {
  return (
    <>
      <Slider />
      <About />
      <Service />
      <Schedule />
      <BrowseProducts />
    </>
  );
};

export default Home;
