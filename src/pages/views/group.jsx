// views/mainWindow.js
import Task from "../components/task";
import Bookmark from "../components/bookmark";
import tasks2 from "../utils/mockTasks";
import { supabase } from "../../supabaseClient";
import { useState, useEffect } from "react";

export default function Group({ groupData }) {
  const [tasks, setTasks] = useState(tasks2);

  useEffect(() => {
    async function getT() {
      const { data } = await supabase
        .from("tasks")
        .select("*")
        .eq("tg_id", groupData.tg_id);
      setTasks(data);
    }
    getT();
  }, []);

  return (
    <div className="w-[48%] h-[100%] border-solid border-white border-4 rounded flex flex-col items-center ">
      <div className="w-[90%] flex justify-between py-4">
        <span className="text-4xl text-white ">{groupData.tg_name}</span>
        <div className="flex">
          <h1 className="text-2xl font-bold px-2">+</h1>
          <h1 className="text-2xl font-bold px-2">^</h1>
        </div>
      </div>
      <div className="flex flex-col w-[100%] justify-center items-center space-y-4">
        {tasks.map((task) => {
          return (
            <div>
              {!task.b_url && <Task key={task.task_id} taskData={task} />}
              {task.b_url && (
                <a href={task.b_url} target="_blank">
                  <Bookmark key={task.task_id} taskData={task} />
                </a>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
