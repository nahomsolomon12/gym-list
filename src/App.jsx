import { Routes, Route } from "react-router-dom";
import BodyParts from "./pages/BodyParts";
import Workouts from "./pages/Workouts";
import WorkoutDetail from "./pages/WorkoutDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BodyParts />} />
      <Route path="/workouts/:part" element={<Workouts />} />
      <Route path="/workout/:part/:name" element={<WorkoutDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
