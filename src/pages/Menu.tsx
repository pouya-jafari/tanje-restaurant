import { useState } from "react";
import { APPETIZER_DATA } from "../data/appetizer";
import { MAINCOURSES_DATA } from "../data/mainCourses";
import { KEBAB_DATA } from "../data/kebabData";
import { CloseOutlined } from "@ant-design/icons";

const Menu = () => {
  const [activeTab, setActiveTab] = useState("Appetizers");
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const tabs = ["Appetizers", "Main Courses", "Kebab Entrée"];

  const menuContent = {
    Appetizers: APPETIZER_DATA,
    "Main Courses": MAINCOURSES_DATA,
    "Kebab Entrée": KEBAB_DATA,
  };

  // @ts-ignore
  const handleCardClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <div>
      <div className="menu-container lg:w-[80%] md:max-w-[1170px] md:mx-auto md:px-4">
        {/* Tabs Navigation */}
        <div className="flex flex-col sm:flex-row justify-center mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-lg font-semibold focus:outline-none mb-2 sm:mb-0 ${
                activeTab === tab
                  ? "text-white bg-[#d8ad63]"
                  : "text-gray-600 bg-gray-100"
              } rounded-md mx-0 sm:mx-2`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* @ts-ignore */}
          {menuContent[activeTab].map((item, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(item)}
              className="menu-item-card bg-white shadow-md rounded-lg p-4 mb-6 flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
            >
              <img
                alt={item.title}
                src={item.image}
                className="w-full h-40 object-cover rounded-lg"
              />
              <div className="flex-1 mt-4">
                <div className="flex flex-col justify-between">
                  <h3 className="menu-item-title text-lg font-semibold">
                    {item.title}
                  </h3>
                  <div className="menu-item-price text-amber-500 text-lg font-semibold mt-2">
                    {item.price}
                  </div>
                </div>
                <p className="menu-item-description text-gray-600 mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {showModal && selectedItem && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-lg overflow-hidden w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl relative transform transition-transform duration-300 scale-100 hover:scale-105"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-xl text-gray-700 hover:text-gray-900"
                onClick={closeModal}
              >
                <CloseOutlined />
              </button>
              {/* Modal Content */}
              <img
                // @ts-ignore
                alt={selectedItem.title}
                // @ts-ignore
                src={selectedItem.image}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                {/*  @ts-ignore */}
                <h3 className="text-xl font-semibold">{selectedItem.title}</h3>
                <p className="text-lg text-[#d8ad63] mt-2">
                  {/*  @ts-ignore */}
                  {selectedItem.price}
                </p>
                {/*  @ts-ignore */}
                <p className="mt-4 text-gray-600">{selectedItem.description}</p>
              </div>

              <a
                href="https://www.ubereats.com/ca/store/tanje-restaurant/mIK8QDhDQGyf4zBqOwHxNQ?srsltid=AfmBOoqGfXhz5TmzZaij1ppvMr4OAgxHXX05cyXrd3llT7cdtf65Y8Ub"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#d8ad63] text-white py-2 px-4 mt-4 w-full block text-center"
              >
                Order on Uber Eats
              </a>
            </div>
          </div>
        )}
      </div>
      {/* Footer */}
      <h3 className="text-center bg-slate-800 text-white">
        © 2024 Tanje Takeout. All Rights Reserved.
      </h3>
    </div>
  );
};

export default Menu;
