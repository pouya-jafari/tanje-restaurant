import { Carousel } from "antd";
import imgTe from "../assets/pic3.jpg";
import baghPimg from "../assets/baghlavaPlatter.jpg";
import Card from "../components/Card";
import doordashLogo from "../assets/doordashlogo.png";
import GoogleReviewsWidget from "../components/googleReview";
import { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import Icon from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { KEBAB_DATA } from "../data/kebabData";
import { MAINCOURSES_DATA } from "../data/mainCourses";

const CustomIcon1 = () => {
  return (
    <img
      src={doordashLogo}
      alt="custom icon"
      style={{
        width: "100px",
        height: "50px",
        marginRight: "10px",
      }}
    />
  );
};

const customIcon2 = () => {
  return (
    <img
      src={
        "https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Logo-700x394.png"
      }
      alt="UberEats Logo"
      style={{
        width: "100px",
        height: "50px",
        marginRight: "10px",
      }}
    />
  );
};

const DoorDIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={CustomIcon1} {...props} />
);

const UberIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={customIcon2} {...props} />
);

const contentStyle: React.CSSProperties = {
  height: "700px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Home = () => {
  const navigate = useNavigate();
  const navigateMenu = () => {
    navigate("/home/menu");
  };
  const navigateContact = () => {
    navigate("/home/contact");
  };

  return (
    <div className="Home overflow-hidden">
      <Carousel autoplay arrows infinite>
        {KEBAB_DATA.map((item, index) => (
          <div key={index}>
            <h3
              style={{
                ...contentStyle,
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></h3>
          </div>
        ))}
      </Carousel>
      <div>
        {/* About Restaurant */}

        <div>
          <div
            id="featuredMenu"
            className="w-[80%] max-w-[1170px] flex flex-col justify-center items-center text-center mx-auto px-20 pt-10 pb-10"
          >
            <div className="flex justify-center items-center max-sm:text-[18px]">
              <span className="inline-block bg-[#383f47] w-[70px] h-[5px]"></span>
              <h1 className="text-8xl px-4 ">Tanje</h1>
              <span className="inline-block bg-[#383f47] w-[70px] h-[5px]"></span>
            </div>

            <p className="pt-5">
              At Tanje, we bring the authentic flavors of Persian cuisine to
              North Vancouver. Our commitment is to provide a unique dining
              experience, combining high-quality ingredients with traditional
              recipes. Every dish is crafted with care to offer you the taste of
              home-cooked Persian food, perfect for a quick bite or a family
              meal.
            </p>
          </div>
        </div>

        {/* Featured Menu Section */}

        <div className="bg-[#d8ad63]" id="featuredMenu">
          <div className="w-[90%] max-w-[1170px] flex flex-col mx-auto px-5 sm:px-20 pt-10 pb-10">
            <div className="flex flex-row justify-start items-center">
              <span className="inline-block bg-[#383f47] w-[70px] h-[5px]"></span>
              <h1 className="text-3xl sm:text-5xl text-amber-400">
                Featured Menu
              </h1>
            </div>
            <div className="pt-10">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 pt-10 max-sm:flex max-sm:overflow-x-auto max-sm:space-x-4 max-sm:scrollbar-hide">
                <div className="max-sm:flex-shrink-0 max-sm:w-[250px]">
                  <Card
                    price={12.99}
                    item="Koubideh"
                    imgdat={KEBAB_DATA[0].image}
                    description={KEBAB_DATA[0].description}
                  />
                </div>
                <div className="max-sm:flex-shrink-0 max-sm:w-[250px]">
                  {" "}
                  <Card
                    price={12.99}
                    item="Chicken Kebab"
                    imgdat={KEBAB_DATA[1].image}
                    description={KEBAB_DATA[1].description}
                  />
                </div>
                <div className="max-sm:flex-shrink-0 max-sm:w-[250px]">
                  {" "}
                  <Card
                    price={14.99}
                    item="Walnut Stew"
                    imgdat={MAINCOURSES_DATA[0].image}
                    description={MAINCOURSES_DATA[0].description}
                  />
                </div>
                <div className="max-sm:flex-shrink-0 max-sm:w-[250px]">
                  {" "}
                  <Card
                    price={11.99}
                    item="Mixed Herb Stew"
                    imgdat={MAINCOURSES_DATA[3].image}
                    description={MAINCOURSES_DATA[3].description}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center pb-10">
            <a
              onClick={navigateMenu}
              className="rounded-lg inline-block no-underline uppercase bg-[#383f47] text-[#fff] py-[15px] px-[40px] tracking-[1px] select-none max-sm:text-[15px] max-sm:py-[10px] max-sm:px-[20px] hover:text-amber-400 hover:scale-105 transform transition-transform duration-300"
            >
              View All Products
            </a>
          </div>
        </div>

        {/* Two Detail Section */}
        {/* First Detail Section */}

        <div id="AboutMenu" dir="ltr">
          <div className="row w-[80%] max-w-[1170px] grid grid-cols-2 gap-[50px] overflow-x-hidden p-[5rem] max-lg:grid-cols-1 max-md:w-[90%] ">
            <div className="imgWrapper overflow-hidden rounded-md">
              <img
                src={imgTe}
                alt="Delivery Service"
                className="w-[100%] h-[100%] object-cover transition-transform duration-300 hover:scale-125"
              />
            </div>
            <div className="contentWrapper w-[100%] flex justify-center items-center pl-[30px] max-md:pl-0">
              <div className="content">
                <span className="textWrapper text-[20px] capitalize flex justify-start items-center gap-[15px] mb-[20px] max-sm:text-[18px] ">
                  <span className="inline-block bg-[#383f47] w-[70px] h-[5px]"></span>
                  Fast & Convenient
                </span>
                <h2
                  id="firstDivH2"
                  className="text-[40px] font-[700] pb-[20px] max-md:text-[30px] max-md:pb-[20px] max-sm:text-[25px]"
                >
                  Enjoy Tanje’s Persian Cuisine Delivered to Your Door
                </h2>
                <p className="text-[16px] leading-[25px] pb-[25px] max-md:leading-[24px] max-sm:text-[15px] max-sm:leading-[22px]">
                  Craving the flavors of Tanje but can’t visit us in person? No
                  problem! Order our authentic Persian dishes through UberEats
                  or DoorDash and enjoy a delicious meal at home. With fast,
                  reliable delivery, your favorite dishes are just a click away.
                </p>

                <iframe src="https://lottie.host/embed/cddbd957-5c97-400f-a8e6-80f4875eafe6/2fyUdfxwz3.json"></iframe>
                <div className="flex flex-row max-sm:flex-col">
                  <a
                    href="https://www.ubereats.com/ca/store/tanje-restaurant/mIK8QDhDQGyf4zBqOwHxNQ?srsltid=AfmBOoqGfXhz5TmzZaij1ppvMr4OAgxHXX05cyXrd3llT7cdtf65Y8Ub"
                    className="rounded-md inline-block no-underline uppercase bg-[#383f47] text-[#fff] text-center py-[15px] px-[40px] tracking-[1px] select-none max-sm:text-[15px] max-sm:py-[10px] max-sm:px-[20px] hover:text-amber-400 hover:scale-105 transform transition-transform duration-300"
                  >
                    <UberIcon />
                  </a>
                  <a
                    href="https://www.doordash.com/en-CA/store/tanje-takeout-north-vancouver-25143990/?srsltid=AfmBOoqAA0RnXYuIaQwJPqBTVuOF0GqVncEfLqgUrtsGcKy9ESIppcwh"
                    className="rounded-md inline-block no-underline uppercase bg-[#383f47] text-[#fff] py-[15px] text-center px-[40px] tracking-[1px] select-none max-sm:text-[15px] max-sm:py-[10px] max-sm:px-[20px] hover:text-amber-400 hover:scale-105 transform transition-transform duration-300 ml-5 max-sm:ml-0 max-sm:mt-4"
                  >
                    <DoorDIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Detail Section */}

        <div className="bg-[#d8ad63]">
          <div id="AboutMenu2" dir="rtl">
            <div className="row w-[80%] max-w-[1170px] grid grid-cols-2 gap-[50px] overflow-x-hidden p-[5rem] max-lg:grid-cols-1 max-md:w-[90%]">
              <div className="imgWrapper overflow-hidden rounded-md">
                <img
                  src={baghPimg}
                  alt="Baghlava Platter"
                  className="w-[100%] h-[100%] object-cover transition-transform duration-300 hover:scale-125"
                />
              </div>
              <div className="contentWrapper w-[100%] flex justify-center items-center pl-[30px] max-md:pl-0">
                <div className="content">
                  <span className="textWrapper text-[20px] capitalize flex justify-start items-center gap-[15px] mb-[20px] max-sm:text-[18px]">
                    <span className="inline-block bg-[#383f47] w-[70px] h-[5px]"></span>
                    Services
                  </span>
                  <h2 className="text-[40px] font-[700] text-white pb-[20px] max-md:text-[30px] max-md:pb-[20px] max-sm:text-[25px]">
                    Exceptional Service, Authentic Taste
                  </h2>
                  <p className="text-[16px] leading-[25px] pb-[25px] max-md:leading-[24px] max-sm:text-[15px] max-sm:leading-[22px]">
                    At Tanje Takeout, we believe that great food deserves great
                    service. Our team is dedicated to ensuring that every meal
                    is not only delicious but also crafted with care and
                    attention. From savory entrees to sweet treats like our
                    signature baghlava, each item is a reflection of our passion
                    for authentic Persian flavors. Experience the rich taste of
                    traditional cuisine with the convenience of modern takeout.
                  </p>
                  <a
                    onClick={navigateContact}
                    className="rounded-lg inline-block no-underline uppercase bg-[#383f47] text-[#fff] py-[15px] px-[40px] tracking-[1px] select-none max-sm:text-[15px] max-sm:py-[10px] max-sm:px-[20px] hover:text-amber-400 hover:scale-105 transform transition-transform duration-300"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Review Section */}
        <div id="review" className=" py-10 max-sm:px-10">
          <div className="flex justify-center items-center max-sm:text-[18px]">
            <span className="inline-block bg-[#383f47] w-[70px] h-[5px]"></span>
            <h1 className="text-8xl px-4 text-[#375b3b] font-[Ubuntu]">
              Reviews
            </h1>
            <span className="inline-block bg-[#383f47] w-[70px] h-[5px]"></span>
          </div>
          <GoogleReviewsWidget />
        </div>
        {/* Map and Address */}
        <div className="bg-[#d8ad63]">
          <div
            id="map"
            className="w-full max-w-[1170px] mx-auto px-5 sm:px-20 py-10 flex flex-row  "
          >
            <div className="text-[#4d7c0f]  lg:pr-40 font-[Ubuntu] ">
              <h2 className="font-bold text-3xl pb-2  max-sm:text-xl">
                Address
              </h2>
              <p className="text-black">
                1366 Marine Dr, North Vancouver, BC V7P 1T4
              </p>
              <h2 className="font-bold text-3xl pb-2 pt-2 max-sm:text-xl">
                Phone Number
              </h2>
              <p className="text-black">+12365512230</p>
              <a
                href="tel:+12365512230"
                className="rounded-lg inline-block no-underline uppercase bg-[#383f47] text-[#fff] py-[15px] px-[40px] tracking-[1px] select-none max-sm:text-[15px] max-sm:py-[10px] max-sm:px-[20px] hover:text-amber-400 hover:scale-105 transform transition-transform duration-300 max-sm:my-[10px]"
              >
                Call the store
              </a>

              <h2 className="font-bold text-3xl pb-2 pt-2 max-sm:text-xl">
                Hours
              </h2>
              <p className="text-black">
                Monday - Sunday 11:00 a.m. - 9:00 p.m.
              </p>
            </div>
            <div className="flex-grow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5200.971977551456!2d-123.1159098!3d49.3240172!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486712e596dafe5%3A0x99912f662b8064f1!2zVGFuamUgVGFrZW91dCBQZXJzaWFuIGZvb2Qv2KjbjNix2YjZhiDYqNixINi62LDYp9uMINin24zYsdin2YbbjCDYt9mG2KzZhw!5e0!3m2!1sen!2sca!4v1729759496728!5m2!1sen!2sca"
                width="100%"
                height="450"
                className="border-0"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          {/* Footer Of Page */}
          <h3 className="text-center bg-slate-800 text-white">
            © 2024 Tanje Takeout. All Rights Reserved.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
