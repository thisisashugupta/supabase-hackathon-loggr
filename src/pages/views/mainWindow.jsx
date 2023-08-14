// views/mainWindow.js
import Group from "./group";
import FavTabs from "../components/favtabs.jsx";
import taskGroups2 from "../utils/mockTaskGroups";
import { supabase } from "../../supabaseClient";
import { useState, useEffect } from "react";

export default function MainWindow({ session }) {
  const [username, setUsername] = useState(null);
  const [taskGroups, setTaskGroups] = useState(taskGroups2);
  useEffect(() => {
    async function getTG() {
      const { data } = await supabase.from("taskgroups").select("*");
      console.log("tg.data", data);
      setTaskGroups(data);
    }
    getTG();
    async function getUsername() {
      const { data } = await supabase.from("users").select("username").single();
      setUsername(data.username);
    }
    getUsername();
  }, []);

  return (
    <div className="w-[90%] h-[80%] border-solid border-white border-4 rounded flex justify-center items-center">
      <div className="w-[90%] h-[90%]">
        <div className="flex justify-between">
          <div className="flex space-x-8">
            <h1 className="font-bold text-6xl">Tuesday 1 Jan</h1>
            <p className="bg-white text-black rounded-xl text-xl p-4">
              Add Group
            </p>
          </div>

          <div>
            <p className="bg-white text-black rounded-xl text-xl p-4">
              {username}
            </p>
          </div>
        </div>
        <div className="w-[100%] h-[94%] flex justify-between items-center">
          <div className="w-[60%] h-[90%]  flex items-center space-x-6">
            {taskGroups.map((taskGroup) => (
              <Group key={taskGroup.tg_id} groupData={taskGroup} />
            ))}
          </div>
          <div className="w-[40%] h-[90%] flex flex-col justify-between">
            <div className="h-[44%] border-solid border-white border-4 rounded flex flex-col items-center py-4">
              <FavTabs />
            </div>
            <div className="h-[54%] border-solid border-white border-4 rounded flex flex-col items-center py-4">
              <div className="w-[90%]">
                <h1 className="text-4xl mb-4">Choice News</h1>
                <p className="text-justify mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <a href="#">Link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
