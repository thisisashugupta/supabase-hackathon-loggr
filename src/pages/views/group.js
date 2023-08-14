// views/mainWindow.js
import Task from "../components/task"
export default function Group() {
    return (
      <div className="w-[48%] h-[100%] border-solid border-white border-4 rounded flex flex-col items-center ">
        <div className="w-[90%] flex justify-between py-4">
        <span className="text-4xl text-white ">Group 1</span>
        <div className="flex">
          <h1 className="text-2xl font-bold px-2">+</h1>
          <h1 className="text-2xl font-bold px-2">^</h1>
        </div>
        </div>
        <div className="flex flex-col w-[100%] justify-center items-center space-y-4">
            <Task/>
            <Task/>
            <Task/>
        </div>
      </div>
    );
  }