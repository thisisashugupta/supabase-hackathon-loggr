// views/mainWindow.js
import Task from "../components/task"
import tasks from "../utils/mockTasks"
export default function Group({groupData}) {
  const tasksByGroup = tasks.filter(task => task.tg_id === groupData.tg_id);
  console.log(tasksByGroup);
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
            {
              tasksByGroup.map(task=>(
                

                <Task key={task.task_id} taskData={task}/>
                
                
              ))
            }
            
        </div>
      </div>
    );
  }