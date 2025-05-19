import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const handleClickOutside = (e) => {
    //Close sidebar if clicked outside
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    // Add event listner to your clicks
    document.addEventListener("mousedown", handleClickOutside);

    //clean event listener
     return ()=>{
       document.removeEventListener("mousedown", handleClickOutside);
      }
  });

  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
          _id: 2,
          name: "Air Jordan Icon",
          price: 250,
          images: [{ url: "https://imgnike-a.akamaihd.net/branding/home-sbf/touts/icone-air-jordan.png" }],
        },
        {
          _id: 3,
          name: "Buna Beige GT",
          price: 180,
          images: [{ url: "https://dochaa.com/wp-content/uploads/2025/01/Buna-Beige-GT-front-300x300.png" }],
        },
        {
          _id: 4,
          name: "Dunk Icon",
          price: 210,
          images: [{ url: "https://imgnike-a.akamaihd.net/branding/home-sbf/touts/icone-dunk.png" }],
        },
        {
          _id: 1,
          name: "Air Max Icon",
          price: 230,
          images: [{ url: "https://imgnike-a.akamaihd.net/branding/home-sbf/touts/icone-air-max.png" }],
        },
        {
          _id: 5,
          name: "Jordan 12 Retro",
          price: 270,
          images: [{ url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/dc2833bd-74bd-4612-a45f-9badad47dc28/AIR+JORDAN+12+RETRO.png" }],
        },
        {
          _id: 6,
          name: "Nike Vomero 18",
          price: 190,
          images: [{ url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4e5a3c2f-79f2-46f1-94f2-682b6eeba044/NIKE+VOMERO+18.png" }],
        },
        {
          _id: 7,
          name: "Jordan 1 Retro High OG",
          price: 260,
          images: [{ url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/957eb85a-3503-4d0d-bb26-d613379f6d2b/AIR+JORDAN+1+RETRO+HIGH+OG.png" }],
        },
        {
          _id: 8,
          name: "Pegasus Premium",
          price: 200,
          images: [{ url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a041165-cef8-4f82-96b3-7db0000a0b0b/NIKE+PEGASUS+PREMIUM.png" }],
        },
      ];
      setProducts(fetchedProducts);
    }, []);
  });

  return (
    <div className="flex flex-col lg:flex-row ">
      {/* Mobile Filter button */}

      <button
        onClick={toggleSidebar}
        className="lg:hidden border p-2 flex justify-center items-center "
      >
        <FaFilter className="mr-2" />
        Filters
      </button>

      {/* Filter Sidebar */}
      <div
        ref={sidebarRef}
        className={`${
          isSidebarOpen ? "translate-x-0 " : "-translate-x-full "
        } fixed inset-y-0 z-50 left-0 pl-10 lg:w-96  overflow-y-auto bg-white transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        <FilterSidebar />
      </div>
      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase mb-4 ">All Collection</h2>

        {/* Sort Options */}
        <SortOptions />

        {/* Product Grid */}
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default CollectionPage;
