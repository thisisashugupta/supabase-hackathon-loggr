// views/task.js
import { supabase } from "../../supabaseClient";

export default function Task({ taskData }) {
  let isChecked = taskData.checked;
  const t_id = taskData.task_id;

  async function handleCheckboxChange(event) {
    console.log(typeof Date.now());

    isChecked = event.target.checked;
    console.log(taskData.task_id);

    const { data, error } = await supabase
      .from("tasks")
      .update({ checked: isChecked })
      .eq("task_id", t_id)
      .select()
      .single();

    console.log(data);

    console.log("checked?", isChecked);
  }

  // Function to handle checkbox state change

  return (
    <div className="w-[90%] flex justify-center bg-white rounded-lg py-4">
      <div className="flex w-[90%] justify-between">
        <input
          type="checkbox"
          className="w-[15%]"
          defaultChecked={taskData.checked}
          onChange={(e) => handleCheckboxChange(e)}
        ></input>

        <div className="w-[80%] flex">
          <p className="text-black text-2xl">{taskData.title}</p>
        </div>
      </div>
    </div>
  );
}
