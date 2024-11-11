type CardProps = {
  item: string;
  price: number;
  imgdat: string;
  description: string;
};

const Card = ({ item, price, imgdat, description }: CardProps) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-none hover:scale-105 transform transition-transform duration-300 h-[430px] flex flex-col">
      <a>
        <img className="p-8 rounded-t-lg" src={imgdat} alt="product image" />
      </a>
      <div className="px-5 pb-5 flex flex-col flex-grow justify-between">
        <div>
          <a>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">
              {item}
            </h5>
          </a>
          <p className="text-gray-700 dark:text-gray-400 mt-2">{description}</p>
        </div>
        <div className="mt-4">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
