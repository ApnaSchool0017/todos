import { useState } from "react";

const App = () => {
  // states for tasks
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // add tasks ftn
  const addTasks = () => {
    if (task !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  // delete task ftn
  const deleteTasks = (index) => {
    const updatedList = [...tasks];
    updatedList.splice(index, 1);
    setTasks(updatedList);
  };

  return (
    // main div
    <div className=" flex flex-col items-center bg-violet-300 h-screen">

      {/* main heading */}
      <h1 className=" text-4xl m-10 font-bold ">Simple Todo App</h1>

      {/* todo div */}
      <div className="bg-slate-200 rounded-md mb-12 ">
        <div className="p-6 bg-slate-200 rounded-md">
          {/* todo input */}
          <input
            className=" bg-slate-100 rounded-md p-4 m-4"
            type="text"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
            placeholder="Create a new todo"
          />

          {/* add todo button */}
          <button
            onClick={addTasks}
            className=" bg-green-500 text-white p-3 m-3 rounded-md font-bold hover:bg-green-600"
          >
            Add Tasks
          </button>
        </div>

        {/* show all task list */}
        <div>
          {tasks?.length > 0 ? (
            <ul>
              {tasks.map((task, index) => (
                <div
                  className=" flex bg-slate-100 m-4 py-4 pl-12 pr-4 rounded-md"
                  key={index}
                >
                  <li className="self-center font-semibold pr-10 mr-6 grow">
                    {task}
                  </li>

                  {/* delete task button in list */}
                  <button
                    onClick={() => {
                      deleteTasks(index);
                    }}
                    className=" bg-red-500 text-white p-2 mx-1 rounded-md font-bold hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </ul>
          ) : (
            <div className="flex flex-col items-center mb-6">
              <p className="font-medium">No Task Found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
