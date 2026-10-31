import { useState } from "react";
import { amdCpus, intelCpus } from "../data/cpus";

type propType = {
  brand: string;
};

const ComponentSelector = ({ brand }: propType) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="bg-gray-700 p-4 flex-3 mx-1">
      <div>Component Selector</div>
      {brand == "Intel" ? (
        <div className=" p-2 w-50">
          <ul>
            {intelCpus.map((el) => {
              return (
                <li
                  key={el.id}
                  className={`p-4 cursor-pointer border-2 rounded ${
                    selected === el.id ? "border-green-500" : "border-gray-500"
                  }`}
                  onClick={() => setSelected(el.id)}
                >
                  <span>{el.name}</span>
                  <span>
                    {el.cores} cores, {el.threads} threads
                  </span>
                  <span>{el.socket}</span>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
      {brand == "AMD" ? (
        <div className="p-2 w-50">
          <ul>
            {amdCpus.map((el) => {
              return (
                <li
                  key={el.id}
                  className={`p-4 cursor-pointer border-2 rounded ${
                    selected === el.id ? "border-green-500" : "border-gray-500"
                  }`}
                  onClick={() => setSelected(el.id)}
                >
                  <span>{el.name}</span>
                  <span>
                    {el.cores} cores, {el.threads} threads
                  </span>
                  <span>{el.socket}</span>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default ComponentSelector;
