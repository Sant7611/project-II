import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  return (
    <>
      <div className="py-4 px-6 container mx-auto ">
        {/* left  - logo  */}
        <div className="flex items-center justify-between">
          <div>
            <Link to="/" className="text-2xl font-medium">
              ShoeFits
            </Link>
          </div>

          {/* center - Navigation Links  */}
          <div className="hidden md:flex space-x-6 ">
            <Link
              to="#"
              className="text-gray-700 hover:text-black text-sm font-medium uppercase"
            >
              {" "}
              Men
            </Link>
            <Link
              to="#"
              className="text-gray-700 hover:text-black text-sm font-medium uppercase"
            >
              {" "}
              Women
            </Link>
            <Link
              to="#"
              className="text-gray-700 hover:text-black text-sm font-medium uppercase"
            >
              {" "}
              Kids
            </Link>
            <Link
              to="#"
              className="text-gray-700 hover:text-black text-sm font-medium uppercase"
            >
              {" "}
              Unisex
            </Link>
          </div>

          {/* right icons */}
          <div className="flex items-center space-x-4">
            <Link to="/profile" className="hover:text-black">
              {" "}
              <HiOutlineUser className="h-6 w-6 text-gray-700" />{" "}
            </Link>
            <button
              onClick={toggleCartDrawer}
              className="relative hover:text-black"
            >
              <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
              <span className="absolute -top-1 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                4
              </span>
            </button>

            {/* Search  */}
            <div className="overflow-hidden">
              <SearchBar />
            </div>

            <button onClick={toggleNavDrawer} className="md:hidden">
              <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
            </button>
          </div>
          <CartDrawer
            drawerOpen={drawerOpen}
            toggleCartDrawer={toggleCartDrawer}
          />

          {/* mobile navigtaion  */}

          <div
            className={`fixed top-0 left-0 duration-300 transition-transform transform bg-white h-full w-3/4 sm:w-1/2 md:w-1/3 ${
              navDrawerOpen ? "translate-x-0" : "-translate-x-full"
            } `}
          >
            <div className="flex justify-end p-4 ">
              <button onClick={toggleNavDrawer} >
                <IoMdClose className="h-6 w-6 text-gray-600 " />
              </button>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-4 " > Menu</h2>
              <nav className="space-y-4 " >
                <Link to="#" onClick={toggleNavDrawer} className="block text-gray-600 hover:text-black" >
                Men
                </Link>
                <Link to="#" onClick={toggleNavDrawer} className="block text-gray-600 hover:text-black" >
                Women
                </Link>
                <Link to="#" onClick={toggleNavDrawer} className="block text-gray-600 hover:text-black" >
                Kids
                </Link>
                <Link to="#" onClick={toggleNavDrawer} className="block text-gray-600 hover:text-black" >
                Unisex
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
