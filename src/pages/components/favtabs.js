import Tab from "./tab"
export default function FaveTabs() {
    return (
      <div className="w-[90%] space-y-4">
        <h1 className="text-4xl">Fav Tabs</h1>
        <div className="flex flex-wrap space-x-4 justify-around">
            <Tab/>
            <Tab/>
            <Tab/>
            <Tab/>
            <Tab/>
            <Tab/>
            <Tab/>
        </div>
      </div>
    );
  }