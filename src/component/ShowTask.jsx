import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteTask } from "../store/TaskSlice";

const ShowTask = () => {
  const taskList = useSelector((state) => state.task.taskList);
  const dispatch = useDispatch();

  return (
    <div>
      {taskList.map((tasks) => (
        <ul key={tasks.id}>
          <div className="flex gap-5 justify-around p-2">
            <li className="bg-blue-200 rounded-2xl p-5 text-2xl text-gray-500 flex flex-col">
              {tasks.name}
            </li>
            <button
              className="bg-red-500 rounded px-5"
              onClick={() => dispatch(deleteTask(tasks.id))}
            >
              delete
            </button>
          </div>
        </ul>
      ))}
    </div>
  );
};

export default ShowTask;
