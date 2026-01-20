import { useNavigate } from "react-router-dom";
import { gymData } from "../data";

export default function BodyParts() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Choose a Body Part</h1>

      {Object.keys(gymData).map((part) => (
        <div
          key={part}
          className="card"
          onClick={() => navigate(`/workouts/${part}`)}
        >
          {part}
        </div>
      ))}
    </div>
  );
}
