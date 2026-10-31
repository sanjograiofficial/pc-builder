import { useState } from "react";
import BuildSummary from "./components/Build";
import ComponentSelector from "./components/CpuSelector";
import Sidebar from "./components/Sidebar";
import Topic from "./components/Topic";

const App = () => {
  const [showComponent, setShowComponent] = useState(false);
  const [brand, setBrand] = useState("");
  return (
    <div className="bg-gray-900 flex flex-col h-screen">
      <Topic />
      <div className="flex w-screen flex-1 my-2 max-w-full">
        <Sidebar setShowComponent={setShowComponent} setBrand={setBrand} />
        {showComponent ? <ComponentSelector brand={brand} /> : null}
        <BuildSummary />
      </div>
    </div>
  );
};

export default App;
