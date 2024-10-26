import { useState } from "react";

type CardProps = {
  item: string;
  price: number;
  imgdat: string;
};

const Card = ({ item, price, imgdat }: CardProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      className="w-full max-w-sm bg-white border  border-gray-200 rounded-lg shadow dark:border-none hover:scale-105 transform transition-transform duration-300 "
      onClick={handleClick}
    >
      <a>
        <img className="p-8 rounded-t-lg" src={imgdat} alt="product image" />
      </a>
      <div className="px-5 pb-5">
        <a>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white ">
            {item}
          </h5>
        </a>

        <p className="text-gray-700 dark:text-gray-400 mt-2">
          {isClicked
            ? `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
    ex totam facilis incidunt ea accusamus esse vero tenetur hic labore
    nulla maxime, necessitatibus sequi eum dicta earum. Numquam, nihil
    dolores.`
            : `Lorem ipsum dolor sit amet consectetur adipisicing elit...`}
        </p>
        {!isClicked && (
          <span className="text-blue-500 cursor-pointer  mt-2">Show More</span>
        )}

        <div className="flex items-center justify-between mt-4">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
