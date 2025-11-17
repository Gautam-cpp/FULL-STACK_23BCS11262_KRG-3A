import  { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <p className="text-2xl font-semibold">Count: {count}</p>

      <button
        onClick={() => setCount(count + 1)}
        className="px-6 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition"
      >
        Increment
      </button>
    </div>
  );
}
