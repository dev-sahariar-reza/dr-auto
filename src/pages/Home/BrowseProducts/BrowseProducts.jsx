import image1 from "../../../assets/products/1.png";
import image2 from "../../../assets/products/2.png";
import image3 from "../../../assets/products/3.png";
import image4 from "../../../assets/products/4.png";
import image5 from "../../../assets/products/5.png";
import image6 from "../../../assets/products/6.png";

const BrowseProducts = () => {
  return (
    <section className="container mx-auto my-10">
      <h1 className="text-center text-3xl font-bold mb-5">
        Browse Our Products
      </h1>
      <p className="mt-5 mb-10 mx-auto text-center">
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.{" "}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-3 gap-y-8 items-center justify-center">
        <div className="card w-72 bg-base-100 shadow-xl flex flex-col justify-center items-center border-4 pt-5">
          <figure>
            <img
              src={image6}
              alt="Product -1"
              className="w-[150px] h-[150px]"
            />
          </figure>
          <div className="card-body">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
            </div>
            <h2 className="card-title">Car Engine Plug</h2>
            <p>$20.00</p>
          </div>
        </div>
        <div className="card w-72 bg-base-100 shadow-xl flex flex-col justify-center items-center border-4 pt-5">
          <figure>
            <img src={image3} alt="Product-2" className="w-[150px] h-[150px]" />
          </figure>
          <div className="card-body">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
            </div>
            <h2 className="card-title">Car Air Filter</h2>
            <p>$20.00</p>
          </div>
        </div>
        <div className="card w-72 bg-base-100 shadow-xl flex flex-col justify-center items-center border-4 pt-5">
          <figure>
            <img
              src={image1}
              alt="Product -1"
              className="w-[150px] h-[150px]"
            />
          </figure>
          <div className="card-body">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
            </div>
            <h2 className="card-title">Cools Led Light</h2>
            <p>$20.00</p>
          </div>
        </div>
        <div className="card w-72 bg-base-100 shadow-xl flex flex-col justify-center items-center border-4 pt-5">
          <figure>
            <img
              src={image2}
              alt="Product -1"
              className="w-[150px] h-[150px]"
            />
          </figure>
          <div className="card-body">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
            </div>
            <h2 className="card-title">Cools Led Light</h2>
            <p>$20.00</p>
          </div>
        </div>
        <div className="card w-72 bg-base-100 shadow-xl flex flex-col justify-center items-center border-4 pt-5">
          <figure>
            <img
              src={image5}
              alt="Product -1"
              className="w-[150px] h-[150px]"
            />
          </figure>
          <div className="card-body">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
            </div>
            <h2 className="card-title">Cools Led Light</h2>
            <p>$20.00</p>
          </div>
        </div>
        <div className="card w-72 shadow-xl flex flex-col justify-between items-center border-4 pt-5">
          <figure>
            <img
              src={image4}
              alt="Product -1"
              className="w-[150px] h-[150px]"
            />
          </figure>
          <div className="card-body">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
            </div>
            <h2 className="card-title">Cools Led Light</h2>
            <p>$20.00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseProducts;
