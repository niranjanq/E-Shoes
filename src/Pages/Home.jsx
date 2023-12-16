import React from "react";
import Navbar from "../components/Navbar.jsx";
import "../App.css";
import { Link } from "react-router-dom";
import Card from "../components/Card";

const data = [
  {
    name: "Men’s Navy Running",
    img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-008-400x400.jpg",
    price: 104.09,
    canceledPrice: "",
    star: 5,
    sale: false,
  },
  {
    name: "Men’s Navy Running",
    img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-008-400x400.jpg",
    price: 104.09,
    canceledPrice: 130.58,
    star: 4,
    sale: true,
  },
  {
    name: "Men’s Navy Running",
    img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-008-400x400.jpg",
    price: 104.09,
    canceledPrice: "",
    star: 3,
    sale: false,
  },
  {
    name: "Men’s Navy Running",
    img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-008-400x400.jpg",
    price: 104.09,
    canceledPrice: "",
    star: 4,
    sale: false,
  },
  {
    name: "Men’s Navy Running",
    img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-008-400x400.jpg",
    price: 104.09,
    canceledPrice: "",
    star: 4,
    sale: true,
  },
  {
    name: "Men’s Navy Running",
    img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-008-400x400.jpg",
    price: 104.09,
    canceledPrice: "",
    star: 4,
    sale: false,
  },
  {
    name: "Men’s Navy Running",
    img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-008-400x400.jpg",
    price: 104.09,
    canceledPrice: "",
    star: 4,
    sale: false,
  },
  {
    name: "Men’s Navy Running",
    img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-008-400x400.jpg",
    price: 104.09,
    canceledPrice: "",
    star: 4,
    sale: false,
  },
  {
    name: "Men’s Navy Running",
    img: "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-008-400x400.jpg",
    price: 104.09,
    canceledPrice: "",
    star: 4,
    sale: true,
  },
  // {
  //   name: "",
  //   img: "",
  //   price: "",
  //   canceledPrice: "",
  //   star: "",
  //   sale: false,
  // },
];

const Home = () => {
  return (
    <main className="w-full flex flex-col items-center">
      <div className="top_declaration bg-[#f1f1ef] w-full text-black h-[40px] text-xs text-opacity-60 text-center flex items-center justify-center">
        Free Express Shipping on all orders with all duties included
      </div>
      <br />
      <Navbar />
      <br />
      <section className="main-bg w-[95%] h-screen flex flex-col items-start justify-center gap-7 p-28">
        <div className="heading text-[80px] leading-[105%] font-semibold text-white w-[50%]">
          Love the Planet we walk on
        </div>
        <div className="desc text-white w-[60%] text-xl">
          Bibendum fermentum, aenean donec pretium aliquam blandit tempor
          imperdiet arcu arcu ut nunc in dictum mauris at ut.
        </div>
        <div className="btn-grp flex gap-10 w-[50%]">
          <div className="btn1 px-7 py-3 bg-white hover:bg-gray-700 hover:text-white duration-300">
            SHOP MEN
          </div>
          <div className="btn1 px-7 py-3 bg-white hover:bg-gray-700 hover:text-white duration-300">
            SHOP WOMEN
          </div>
        </div>
      </section>
      <section className="w-[80%] py-10 flex flex-col items-center justify-start">
        <div className="logos w-full flex justify-between items-center">
          <div className="text">AS SEEN IN :</div>
          <img
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-5.svg"
            alt=""
          />
          <img
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-4.svg"
            alt=""
          />
          <img
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-3.svg"
            alt=""
          />
          <img
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-2.svg"
            alt=""
          />
          <img
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-1.svg"
            alt=""
          />
        </div>
        <div className="w-[85%] flex my-16 justify-between">
          <img
            className="object-contain w-[43%] h-auto"
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-home-about-image.jpg"
            alt=""
          />
          <div className="flex flex-col justify-center  w-[50%] pr-[10%] gap-8 font-Poppins">
            <span className="text-orange-500 text-[12px] font-medium -mb-2">
              ABOUT US
            </span>
            <div className="font-medium text-4xl">
              Selected materials designed for comfort and sustainability
            </div>
            <div className=" text-slate-400  ">
              Nullam auctor faucibus ridiculus dignissim sed et auctor sed eget
              auctor nec sed elit nunc, magna non urna amet ac neque ut quam
              enim pretium risus gravida ullamcorper adipiscing at ut magna
            </div>
            <Link to={"#"}>
              <span className=" text-black text-sm font-semibold mt-3 border-b-[3px] border-orange-400 hover:border-gray-900 duration-200">
                READ MORE
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className=" w-[95%] h-[90vh] bg-zinc-200 py-10 flex flex-col gap-12 items-center justify-start">
        <div className="maindiv font-medium text-3xl text-center">
          See how your shoes are made
          <div className="text-sm font-medium py-8 text-black text-opacity-40 px-[25%]">
            Urna, felis enim orci accumsan urna blandit egestas mattis egestas
            feugiat viverra ornare donec adipiscing semper aliquet integer risus
            leo volutpat nulla enim ultrices
          </div>
        </div>
        <div className="XYZ w-[70%] h-[50vh] flex flex-col gap-14">
          <div className=" flex justify-between">
            <div className="text-left w-[20%] flex flex-col gap-1">
              <span className="text-sm text-orange-400  ">01.</span>
              <div className="head text-lg font-medium">Pet canvas</div>
              <div className="desc text-black text-opacity-40 text-sm">
                Morbi eget bibendum sit adipiscing morbi ac nisl vitae maecenas
                nulla cursus
              </div>
            </div>
            <div className="text-right w-[20%]  flex flex-col gap-1">
              <span className="text-sm text-orange-400  ">03.</span>
              <div className="head text-lg font-medium">Pet canvas</div>
              <div className="desc text-black text-opacity-40 text-sm">
                Morbi eget bibendum sit adipiscing morbi ac nisl vitae maecenas
                nulla cursus
              </div>
            </div>
          </div>
          <div className=" flex justify-between">
            <div className="text-left w-[20%] flex flex-col gap-1">
              <span className="text-sm text-orange-400  ">02.</span>
              <div className="head text-lg font-medium">Pet canvas</div>
              <div className="desc text-black text-opacity-40 text-sm">
                Morbi eget bibendum sit adipiscing morbi ac nisl vitae maecenas
                nulla cursus
              </div>
            </div>
            <div className="text-right w-[20%]  flex flex-col gap-1">
              <span className="text-sm text-orange-400  ">04.</span>
              <div className="head text-lg font-medium">Pet canvas</div>
              <div className="desc text-black text-opacity-40 text-sm">
                Morbi eget bibendum sit adipiscing morbi ac nisl vitae maecenas
                nulla cursus
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[64%] flex justify-between py-9">
        <div className="font-medium text-xl">New Arrivals</div>
        <Link to={"#"}>
          <span className="text-black font-medium text-sm border-b-[2px] border-orange-400 hover:border-gray-900 duration-200">
            VIEW ALL NEW ARRIVALS
          </span>
        </Link>
      </section>
      <section className="w-[64%] flex justify-between flex-wrap gap-5">
        {data.slice(0, 6).map((item, ind) => {
          return (
            <Card
              img={item.img}
              name={item.name}
              canceledPrice={item.canceledPrice}
              price={item.price}
              star={item.star}
              sale={item.sale}
            />
          );
        })}
      </section>
      <section className="w-full flex justify-evenly py-16">
        <div className="w-[46.5%] relative flex items-center justify-center">
          <img
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-shop-men-image-thumbnail.jpg"
            alt=""
            className=""
          />
          <div className="content absolute flex items-center justify-center flex-col gap-5">
            <div className=" font-semibold text-3xl text-white">Men</div>
            <Link to={"#"}>
              <div className="border-2 border-white text-white text-lg font-medium px-3 py-1 hover:bg-white hover:text-black">
                Shop Men
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[46.5%] relative flex items-center justify-center ">
          <img
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-shop-women-image-tumbnail.jpg"
            alt=""
            className=""
          />
          <div className="content absolute flex items-center justify-center flex-col gap-5">
            <div className=" font-semibold text-3xl text-white">Women</div>
            <Link to={"#"}>
              <div className="border-2 border-white text-white text-lg font-medium px-3 py-1 hover:bg-white hover:text-black">
                Shop Women
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="w-[64%] flex justify-between py-9">
        <div className="font-medium text-xl">New Arrivals</div>
        <Link to={"#"}>
          <span className="text-black font-medium text-sm border-b-[2px] border-orange-400 hover:border-gray-900 duration-200">
            VIEW ALL NEW ARRIVALS
          </span>
        </Link>
      </section>
      <section className="w-[64%] flex justify-between flex-wrap gap-5">
        {data.map((item, ind) => {
          return (
            <Card
              img={item.img}
              name={item.name}
              canceledPrice={item.canceledPrice}
              price={item.price}
              star={item.star}
              sale={item.sale}
            />
          );
        })}
      </section>
      <section className="w-[95%] flex bg-gray-100 p-60 py-20">
        <div className="w-[50%] text-center text-slate-500">
          Eu eget felis erat mauris aliquam mattis lacus, arcu leo aliquam
          sapien pulvinar laoreet vulputate sem aliquet phasellus egestas felis,
          est, vulputate morbi massa mauris vestibulum dui odio.
          <div className="flex gap-20 py-10 justify-center ">
            <img
              className="image w-[18%]"
              src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-badge-3.svg"
              alt=""
            />
            <img
              className="image w-[18%]"
              src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-badge-2.svg"
              alt=""
            />
            <img
              className="image w-[18%]"
              src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-badge-1.svg"
              alt=""
            />
          </div>
        </div>
        <div className="w-[50%] text-center px-20 ">
          <img
            className="img2 w-[85%]"
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-recycled-circle-iamge.jpg"
            alt=""
          />
        </div>
      </section>
      <section>
        <div className="py-10 text-3xl font-semibold">
          Our Customers speak for us
        </div>
      </section>
    </main>
  );
};

export default Home;
