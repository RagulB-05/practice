import { useState } from "react";
import "./App.css";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");

  const date = new Date();
  const newTask = {
    id: date.getTime(),
    name: task,
    time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newTask.name) {
      setTaskList((taskList) => [...taskList, newTask]);
    }
    setTask("");
  };

  const handleDelete = (id) => {
    const updatedTaskList = taskList.filter((todo) => todo.id !== id);
    setTaskList(updatedTaskList);
  };

  return (
    <>
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

      <div>
        {taskList.map((tasks) => (
          <ul key={tasks.id}>
            <div className="flex gap-5 justify-around p-2">
              <li className="bg-blue-200 rounded-2xl p-5 text-2xl text-gray-500 flex flex-col">
                {tasks.name},{tasks.time}
              </li>
              <button
                className="bg-red-500 rounded px-5"
                onClick={() => handleDelete(tasks.id)}
              >
                delete
              </button>
            </div>
          </ul>
        ))}
      </div>
    </>
  );
}

export default App;
