import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import BodyParts from "./pages/BodyParts";
import Workouts from "./pages/Workouts";
import WorkoutDetail from "./pages/WorkoutDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BodyParts />} />
        <Route path="/workouts/:part" element={<Workouts />} />
        <Route path="/workout/:part/:name" element={<WorkoutDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
