import { useLoaderData } from "react-router-dom";

const BookService = () => {
  const service = useLoaderData();
  const { title, img, price } = service;

  const handleBookService = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const bookingDate = form.date.value;
    const price = form.price.value;

    const booking = {
      customerName: name,
      email,
      bookingDate,
      price: price,
      service: title,
      img,
    };

    console.log(booking);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <section className="container mx-auto my-12">
      <div className="h-[300px] bg-cover bg-center bg-no-repeat bg-[url(https://i.ibb.co/XfBjN3h/banner.png)] rounded-lg hidden md:block mb-10">
        <div className="relative h-[300px] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%] rounded-lg">
          <h1 className="absolute top-[125px] left-[100px] text-white text-4xl font-bold ">
            Checkout
          </h1>
          <p className="text-white bg-red-500 absolute p-5 md:left-1/2 lg:left-[550px] bottom-0">
            Home/Checkout
          </p>
        </div>
      </div>

      <h1 className="text-3xl font-bold mt-10 mb-6">{title}</h1>

      <form onSubmit={handleBookService}>
        <div className="grid grid-cols-2 gap-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Full Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Enter your Name"
              name="name"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Email Address</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Enter your email address"
              name="email"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Booking Date</span>
            </label>
            <input
              type="date"
              className="input input-bordered w-full"
              name="date"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Price</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              defaultValue={"$" + price}
              name="price"
            />
          </div>
        </div>
        <button className="btn btn-neutral btn-block my-8">Checkout</button>
      </form>
    </section>
  );
};

export default BookService;
