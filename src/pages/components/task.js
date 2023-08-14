// views/mainWindow.js
export default function Task() {
    return (
      <div className="w-[90%] flex justify-center bg-white rounded-lg py-4">
        <div className="flex w-[90%] justify-between">
            <input type="checkbox" className="w-[15%]"></input>
            <div className="w-[80%] flex">
                <p className="text-black text-2xl">Twitter</p>
            </div>

        </div>
      </div>
    );
  }