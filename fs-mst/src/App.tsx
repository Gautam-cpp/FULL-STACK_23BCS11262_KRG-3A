import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shopping from "./Shopping";
import Todo from "./Todo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shopping />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </Router>
  );
}

export default App;
