import { useState } from "react";

export default function Todo() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 p-8">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Todo List
        </h1>

        {/* Input + Add button */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter a new task..."
          />
          <button
            onClick={addTask}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow transition"
          >
            Add
          </button>
        </div>

        {tasks.length === 0 ? (
          <p className="text-center text-gray-500 italic">
            No tasks added yet.
          </p>
        ) : (
          <ul className="space-y-2">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded-lg shadow-sm"
              >
                <span className="text-gray-700">{task}</span>
                <button
                  onClick={() => removeTask(index)}
                  className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md text-sm shadow transition"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
