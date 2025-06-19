import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/TaskSlice";

const AddTask = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const date = new Date();
  const newTask = {
    id: date.getTime(),
    name: task,
    time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(newTask));
    setTask("");
  };

  return (
    <div className=" text-center p-10 ">
      <h2 className="py-5 font-bold text-3xl">Add Task</h2>
      <form
        className="flex gap-5 justify-center text-2xl"
        onSubmit={handleSubmit}
      >
        <label title="task">Task : </label>
        <input
          className=" outline-1 px-2 f"
          autoComplete="off"
          type="text"
          name="task"
          value={task}
          onChange={(e) => setTask(e.target.value.trimStart())}
        />
        <button
          className="rounded bg-green-500 px-5 text-white hover:bg-green-800 "
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTask;
