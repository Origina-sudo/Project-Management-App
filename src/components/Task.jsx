import React from "react";
import Newtask from "./Newtask";
const Task = ({ tasks, onAdd, onDelete }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <Newtask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This Project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li className="flex justify-between my-4" key={task.id}>
              <span>{task.text}</span>
                  <button
                      className="text-stone-700 hover:text-red-500" onClick={() => onDelete(task.id)}
                  >Clear
                  </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Task;
