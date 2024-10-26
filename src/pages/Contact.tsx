import {
  CarryOutOutlined,
  CoffeeOutlined,
  SmileOutlined,
} from "@ant-design/icons";

const Contact = () => {
  return (
    <div className="flex flex-col">
      {/* Main Section */}
      <div className="flex-grow">
        <div
          id="featuredMenu"
          className="w-[80%] max-w-[1170px] flex flex-col justify-center items-center text-center mx-auto px-20 pt-10 pb-10"
        >
          <div className="flex justify-center items-center max-sm:text-[18px]">
            <span className="inline-block bg-[#383f47] w-[70px] h-[5px]"></span>
            <h1 className="text-8xl px-4">Tanje</h1>
            <span className="inline-block bg-[#383f47] w-[70px] h-[5px]"></span>
          </div>

          <p className="pt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor qui
            maiores dolores. Magnam, accusantium. Quo, distinctio? Autem, ab
            quam quae exercitationem nobis cupiditate natus? Quasi tenetur
            doloremque quibusdam sunt illo.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full py-10 bg-[#d8ad63]">
        <div className="w-[80%] max-w-[1170px] mx-auto text-center">
          <h2 className="text-5xl font-bold pb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 duration-300">
              <CarryOutOutlined className="text-6xl text-[#383f47] mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Takeout</h3>
              <p>
                Convenient takeout options that allow you to grab your favorite
                meals on the go without the wait.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 duration-300">
              <CoffeeOutlined className="text-6xl text-[#383f47] mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Catering</h3>
              <p>
                Delicious catering options to make your events memorable with
                flavors that satisfy every guest.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 duration-300">
              <SmileOutlined className="text-6xl text-[#383f47] mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Unique Taste</h3>
              <p>
                Discover a unique taste experience that combines authentic
                flavors and modern techniques.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Address and Map Section */}
      <div>
        <div
          id="map"
          className="w-full max-w-[1170px] mx-auto px-5 sm:px-20 py-10 flex flex-row"
        >
          <div className="text-[#4d7c0f] lg:pr-40 font-[Ubuntu]">
            <h2 className="font-bold text-3xl pb-2 max-sm:text-xl">Address</h2>
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
            <p className="text-black">Monday - Sunday 11:00 a.m. - 9:00 p.m.</p>
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
        <h3 className="text-center bg-slate-800 text-white py-4">
          © 2024 Tanje Takeout. All Rights Reserved.
        </h3>
      </div>
    </div>
  );
};

export default Contact;
