import React from "react";

import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-[95%] ">
      {/* First Half */}
      <div className="flex gap-9 font-medium font-sans items-center h-[50px]">
        <div className="tracking-[7px] font-semibold text-3xl">SEC-C-SHOES</div>
        <div className="menu flex gap-5 items-center h-full">
          <div className="cursor-pointer text-sm font-medium text-gray-500 hover:text-black  duration-300">
            MEN
          </div>
          <div className="cursor-pointer text-sm font-medium text-gray-500 hover:text-black  duration-300">
            WOMEN
          </div>
          <div className="cursor-pointer text-sm font-medium text-gray-500 hover:text-black  duration-300">
            COLLECTION
          </div>
          <div className="cursor-pointer text-sm font-medium text-gray-500 hover:text-black  duration-300">
            LOOKBOOK
          </div>
          <div className="cursor-pointer text-sm font-medium text-gray-500 hover:text-black  duration-300">
            SALE
          </div>
        </div>
      </div>
      {/* Second Half */}
      <div className="second flex gap-7 items-center">
        <div className="menu flex gap-5 items-center h-full">
          <div className="cursor-pointer font text-sm-medium text-gray-500 hover:text-black  duration-300">
            OUR STORY
          </div>
          <div className="cursor-pointer text-sm font-medium text-gray-500 hover:text-black  duration-300">
            CONTACT
          </div>
          <ShoppingCartOutlined className="text-xl" />
          <UserOutlined className="text-xl" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
