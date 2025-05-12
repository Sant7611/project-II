import { Link } from "react-router-dom";

const FeaturedCollection = () => {
  return (
    <section className="py-16 px-4 lg:px-0 ">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-500 rounded-3xl ">
        {/* Left Content */}
        <div className="lg:w-1/2 p-8 text-center lg:text-left ">
          <h2 className="text-lg font-semibold text-gray-700 mb-2 ">
            Comfort and Style
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold m-6 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis.
          </h2>
          <p className="text-lg text-gray-600 mb-6 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt,
            magnam eum rem nobis tenetur officia harum ipsam necessitatibus iure
            deserunt?
          </p>

          <Link
            to="/collections/all"
            className="bg-black text-white px-6 rounded-lg text-lg hover:bg-gray-800"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
