import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";
import img1 from "../../assets/slider/1.jpg";
import img2 from "../../assets/slider/2.jpg";
import img3 from "../../assets/slider/3.jpg";
import img4 from "../../assets/slider/4.jpg";
import img5 from "../../assets/slider/5.jpg";
import img6 from "../../assets/slider/6.jpg";

const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <section className="container mx-auto my-12 hidden md:block">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative ">
            <div className="rounded-lg">
              <img
                src={img1}
                alt="slider picture 1"
                className="rounded-lg w-full h-[600px] relative "
              />
              <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]"></div>
            </div>
            <h1 className="absolute top-[100px] left-28 text-4xl font-bold text-white w-[250px] leading-snug">
              Affordable Price For Car Servicing
            </h1>
            <p className="absolute top-[270px] left-28 text-xl text-white text-justify w-[400px]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="absolute top-[390px] left-28">
              <button className="btn btn-neutral mr-5">Discover More</button>
              <button className="btn btn-neutral">Latest Project</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative ">
            <div className="rounded-lg">
              <img
                src={img2}
                alt="slider picture 1"
                className="rounded-lg w-full h-[600px] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]"
              />
            </div>
            <h1 className="absolute top-[100px] left-28 text-4xl font-bold text-white w-[250px] leading-snug">
              Affordable Price For Car Servicing
            </h1>
            <p className="absolute top-[270px] left-28 text-xl text-white text-justify w-[400px]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="absolute top-[390px] left-28">
              <button className="btn btn-neutral mr-5">Discover More</button>
              <button className="btn btn-neutral">Latest Project</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative ">
            <div className="rounded-lg">
              <img
                src={img3}
                alt="slider picture 1"
                className="rounded-lg w-full h-[600px] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]"
              />
            </div>
            <h1 className="absolute top-[100px] left-28 text-4xl font-bold text-white w-[250px] leading-snug">
              Affordable Price For Car Servicing
            </h1>
            <p className="absolute top-[270px] left-28 text-xl text-white text-justify w-[400px]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="absolute top-[390px] left-28">
              <button className="btn btn-neutral mr-5">Discover More</button>
              <button className="btn btn-neutral">Latest Project</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative ">
            <div className="rounded-lg">
              <img
                src={img4}
                alt="slider picture 1"
                className="rounded-lg w-full h-[600px] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]"
              />
            </div>
            <h1 className="absolute top-[100px] left-28 text-4xl font-bold text-white w-[250px] leading-snug">
              Affordable Price For Car Servicing
            </h1>
            <p className="absolute top-[270px] left-28 text-xl text-white text-justify w-[400px]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="absolute top-[390px] left-28">
              <button className="btn btn-neutral mr-5">Discover More</button>
              <button className="btn btn-neutral">Latest Project</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative ">
            <div className="rounded-lg">
              <img
                src={img5}
                alt="slider picture 1"
                className="rounded-lg w-full h-[600px] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]"
              />
            </div>
            <h1 className="absolute top-[100px] left-28 text-4xl font-bold text-white w-[250px] leading-snug">
              Affordable Price For Car Servicing
            </h1>
            <p className="absolute top-[270px] left-28 text-xl text-white text-justify w-[400px]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="absolute top-[390px] left-28">
              <button className="btn btn-neutral mr-5">Discover More</button>
              <button className="btn btn-neutral">Latest Project</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative ">
            <div className="rounded-lg">
              <img
                src={img6}
                alt="slider picture 1"
                className="rounded-lg w-full h-[600px] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]"
              />
            </div>
            <h1 className="absolute top-[100px] left-28 text-4xl font-bold text-white w-[250px] leading-snug">
              Affordable Price For Car Servicing
            </h1>
            <p className="absolute top-[270px] left-28 text-xl text-white text-justify w-[400px]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="absolute top-[390px] left-28">
              <button className="btn btn-neutral mr-5">Discover More</button>
              <button className="btn btn-neutral">Latest Project</button>
            </div>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress text-right my-8" slot="container-end">
          <p ref={progressCircle}></p>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </section>
  );
};

export default Slider;
