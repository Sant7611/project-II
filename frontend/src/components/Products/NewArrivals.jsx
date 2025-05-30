import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrivals = () => {

    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight]= useState(true);
    const [canScrollLeft, setCanScrollLeft] = useState(false);

  const newArrivals = [
    {
      _id: "1",
      name: "Boots",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "Boots",
        },
      ],
    },
    {
      _id: "2",
      name: "Boots",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
          altText: "Boots",
        },
      ],
    },
    {
      _id: "3",
      name: "Boots",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
          altText: "Boots",
        },
      ],
    },
    {
      _id: "4",
      name: "Boots",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
          altText: "Boots",
        },
      ],
    },
    {
      _id: "5",
      name: "Boots",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
          altText: "Boots",
        },
      ],
    },
    {
      _id: "6",
      name: "Boots",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=6",
          altText: "Boots",
        },
      ],
    },
    {
      _id: "7",
      name: "Boots",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=7",
          altText: "Boots",
        },
      ],
    },
  ];

const scroll = (direction) =>{
  const scrollAmount = direction === "left" ? -300: 300;
  scrollRef.current.scrollBy({left:scrollAmount, behavior: "smooth"})
}


// Update Scroll Buttons

  const updateScrollButtons = () =>{
    const container = scrollRef.current;

    // console.log({
    //   scrollLeft: container.scrollLeft,
    //   clientWidth: container.clientWidth,
    //   rightScrollable : container.clientWidth + scrollLeft          ,
    //   containerScrollWidth: container.scrollWidth,
    // });
    // console.log(container.scrollLeft);

    if(container){
      const leftScroll = container.scrollLeft;
      const rightScrollable = container.scrollWidth > leftScroll + container.clientWidth;
      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScrollable);
    }
  }

  useEffect(()=>{
    const container = scrollRef.current;
    if(container){
        container.addEventListener("scroll", updateScrollButtons);
    }
    updateScrollButtons();
  })

  return (
    <section>
      <div className="container mx-auto text-center mb-10 relative ">
        <h1 className="text-3xl font-bold mb-4 ">Explore new arrivals</h1>
        <p className="text-lg text-gray-900 mb-8">
          Discover the latst styles straight off the runway, freshly. Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Magni, blanditiis.
        </p>

        {/* scroll Buttons  */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2 ">
          <button onClick={()=> scroll("left")} disabled={!canScrollLeft} className={`rounded p-2 border ${canScrollLeft? "bg-white text-black " : "bg-gray-200 text-gray-400 cursor-not-allowed" } `}>
            <FiChevronLeft className="text-2xl" />
          </button>
          <button onClick={()=> scroll("right")} disabled={!canScrollRight} className={`rounded p-2 border ${canScrollRight? "bg-white text-black " : "bg-gray-200 text-gray-400 cursor-not-allowed" } `}>
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Product images / Scrollable content*/}
      <div 
      ref={scrollRef}
      className="container mx-auto overflow-x-hidden flex space-x-6 relative   ">
        {newArrivals.map((product) => (
          <div className="relative min-w-[100%] sm:m-w-[50%] lg:min-w-[30%] "  key={product._id}>
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
              className="w-full h-[500px] object-cover rounded-lg "
            />
            <div className="absolute bottom-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg  ">
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
