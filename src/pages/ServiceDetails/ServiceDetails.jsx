import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import FacilityCard from "../../components/Cards/FacilityCard/FacilityCard";
import { FaArrowRight, FaFilePdf } from "react-icons/fa6";

const ServiceDetails = () => {
  const serviceData = useLoaderData();
  const { _id, title, img, price, description, facility } = serviceData;

  return (
    <section className="container mx-auto my-12">
      <div className="h-[300px] bg-cover bg-center bg-no-repeat bg-[url(https://i.ibb.co/XfBjN3h/banner.png)] rounded-lg hidden md:block">
        <div className="relative h-[300px] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%] rounded-lg">
          <h1 className="absolute top-[125px] left-[100px] text-white text-4xl font-bold ">
            Service Details
          </h1>
          <p className="text-white bg-red-500 absolute p-5 md:left-1/2 lg:left-[550px] bottom-0">
            Home/Service Details
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 mt-16">
        {/* service details */}
        <article>
          <div>
            <img
              src={img}
              alt="service image"
              className="h-[400px] rounded-xl"
            />
          </div>

          <div className="mt-6">
            <h1 className="text-2xl font-bold mb-6">{title}</h1>
            <p className="mb-6 text-justify">{description}</p>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-8">
            {facility.map((f) => (
              <FacilityCard key={f.name} f={f} />
            ))}
          </div>

          <p className="mb-6 text-justify">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or random words which don't look even slightly believable.
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything embarrassing hidden in the middle of text.
          </p>

          <h1 className="text-3xl font-bold mb-6">3 Simple Steps to Process</h1>

          <p className="mb-6 text-justify">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or random words which don't look even slightly believable.
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything embarrassing hidden in the middle of text.
          </p>

          <div className="grid grid-cols-3 gap-6">
            <div className="h-auto border-2 rounded-xl p-5">
              <p className="text-center font-bold my-5">1</p>
              <h3 className="text-center font-bold text-xl mb-5">Step One</h3>
              <p className="text-center">It uses a dictionary of over 200 .</p>
            </div>
            <div className="h-auto border-2 rounded-xl p-5">
              <p className="text-center font-bold my-5">2</p>
              <h3 className="text-center font-bold text-xl mb-5">Step Two</h3>
              <p className="text-center">It uses a dictionary of over 200 .</p>
            </div>
            <div className="h-auto border-2 rounded-xl p-5">
              <p className="text-center font-bold my-5">3</p>
              <h3 className="text-center font-bold text-xl mb-5">Step Three</h3>
              <p className="text-center">It uses a dictionary of over 200 .</p>
            </div>
          </div>

          <iframe
            src="https://www.youtube.com/embed/hBPvKna1Adw?si=o9qinXZIogCqovSP"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="my-8 rounded-xl h-[315px] w-full"
          ></iframe>
        </article>

        {/* another information */}
        <article>
          <div className="bg-black p-5 rounded-lg">
            <h1 className="text-white font-bold text-2xl my-4">Download</h1>
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center">
                <p className="text-white mr-3">
                  <FaFilePdf className="w-8 h-8" />
                </p>
                <div>
                  <p className="text-white font-bold text-xl mb-3">
                    Our Brochure
                  </p>
                  <p className="text-gray-500 font-bold text-xl">Download</p>
                </div>
              </div>
              <button className="btn btn-md bg-red-500 btn-square text-white hover:text-black">
                <FaArrowRight />
              </button>
            </div>
            <div className="flex justify-between items-center mt-5">
              <div className="flex justify-between items-center">
                <p className="text-white mr-3">
                  <FaFilePdf className="w-8 h-8" />
                </p>
                <div>
                  <p className="text-white font-bold text-xl mb-3">
                    Company Details
                  </p>
                  <p className="text-gray-500 font-bold text-xl">Download</p>
                </div>
              </div>
              <button className="btn btn-md text-white hover:text-black bg-red-500 btn-square">
                <FaArrowRight />
              </button>
            </div>
          </div>

          <div className="bg-black p-5 my-6 rounded-lg">
            <h3 className="text-center text-white text-xl font-bold mb-5">
              Dr. Auto
            </h3>
            <p className="text-center text-white text-sm font-bold mb-5">
              Need Help? We Are Here To Help You
            </p>

            <div className="bg-white rounded-lg p-5 w-1/2 mx-auto mb-10">
              <p className="text-lg mb-4 font-bold text-center">
                <span className="text-red-400">Dr. Auto</span> Special
              </p>
              <p className="text-lg mb-4 font-bold text-center">
                Save up to <span className="text-red-400">60%</span>
              </p>
              <div className="text-center">
                <button className="btn btn-secondary">Get quote</button>
              </div>
            </div>
          </div>

          <h3 className="text-4xl font-bold mb-8">Price: ${price}</h3>

          <Link to={`/checkout/${_id}`}>
            <button className="btn btn-secondary btn-block font-bold">
              CheckOut
            </button>
          </Link>
        </article>
      </div>
    </section>
  );
};

export default ServiceDetails;
