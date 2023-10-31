import { useEffect, useState } from "react";
import ServiceCard from "../../../components/Cards/ServiceCard/ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(
      "https://dr-auto-server-gbfvaf9px-developer-sahariar-reza.vercel.app/services"
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <section className="container mx-auto my-12">
      <h1 className="text-center font-extrabold text-4xl">Our Service Area</h1>
      <p className="text-center my-5 font-semibold">
        The majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.{" "}
      </p>

      <div className="my-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Service;
