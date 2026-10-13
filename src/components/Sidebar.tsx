import { useState } from "react";
import { cpus } from "../data/cpus";
import { gpus } from "../data/gpus";
import { mobo } from "../data/motherboards";

const Sidebar = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setOpenCategory((prev) => (prev === category ? null : category));
  };

  return (
    <div className="bg-gray-700 p-4 min-w-4 flex-1 mx-2">
      <div>
        <button
          onClick={() => toggleCategory("cpu")}
          className="flex w-full items-center gap-3 p-3 cursor-pointer"
        >
          <span>{openCategory === "cpu" ? "−" : "+"}</span>
          <span>CPU</span>
        </button>
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            openCategory === "cpu"
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="pl-8 bg-gray-600">
              <ul>
                {cpus.map((el) => {
                  return <li className="cursor-pointer">{el.brand}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => toggleCategory("gpu")}
          className="flex w-full items-center gap-3 p-3 cursor-pointer"
        >
          <span>{openCategory === "gpu" ? "−" : "+"}</span>
          <span>GPU</span>
        </button>

        <div
          className={`grid transition-all duration-300 ease-in-out ${
            openCategory === "gpu"
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="pl-8 bg-gray-600">
              <ul>
                {gpus.map((el) => {
                  return <li className="cursor-pointer">{el.brand}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => toggleCategory("mobo")}
          className="flex w-full items-center gap-3 p-3 cursor-pointer"
        >
          <span>{openCategory === "mobo" ? "−" : "+"}</span>
          <span>MOBO</span>
        </button>
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            openCategory === "mobo"
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="pl-8 bg-gray-600">
              <ul>
                {mobo.map((el) => {
                  return <li className="cursor-pointer">{el.brand}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
