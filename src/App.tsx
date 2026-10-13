import BuildSummary from "./components/BuildSummary"
import ComponentSelector from "./components/ComponentSelector"
import Sidebar from "./components/Sidebar"
import Topic from "./components/Topic"

const App = () => {
  return (
    <div className="bg-gray-900 flex flex-col h-screen">
      <Topic/>
      <div className="flex w-screen flex-1 my-2 max-w-full">
        <Sidebar/>
        <ComponentSelector/>
        <BuildSummary/>
      </div>
    </div>
  )
}

export default App