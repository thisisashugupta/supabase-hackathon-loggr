// views/bookmark.js
export default function Bookmark({ taskData }) {
  console.log("taskData.burl", taskData.b_url);
  return (
    <div className="w-[90%] flex justify-center bg-white rounded-lg py-4">
      <div className="flex w-[90%] justify-between">
        {/* fetch b_url and display favicon and title */}
        <div className="w-[80%] flex">
          <p className="text-black text-2xl">{taskData.title}</p>
        </div>
      </div>
    </div>
  );
}
