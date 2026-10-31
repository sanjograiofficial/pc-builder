import { useState } from "react";

type propType = {
  brand: string;
};

const ComponentSelector = ({ brand }: propType) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleSelection = () => {
    setIsSelected(!isSelected);
  };
  return (
    <div className="bg-gray-700 p-4 flex-3 mx-1">
      <div>Component Selector</div>
      {brand == "Intel" ? (
        <div className=" p-2 w-50">
          <ul>
            <li
              className={isSelected ? "flex flex-col cursor-pointer border-green-500 border p-2" :"flex flex-col cursor-pointer border p-2"} 
              onClick={handleSelection}
            >
              <span>Intel Core i5-12400F</span>
              <span>6 cores, 12 threads</span>
              <span>LGA1700</span>
            </li>
          </ul>
        </div>
      ) : null}
      {brand == "AMD" ? (
        <div className="border p-2 w-50">
          <ul>
            <li className="flex flex-col cursor-pointer">
              <span>Ryzen 5 5600</span>
              <span>6 cores, 12 threads </span>
              <span>AM4</span>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default ComponentSelector;
