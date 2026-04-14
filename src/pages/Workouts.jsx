import { useParams, useNavigate } from "react-router-dom";
import { gymData } from "../data";

export default function Workouts() {
  const { part } = useParams();
  const navigate = useNavigate();

  if (!gymData[part]) {
    return (
      <div className="container">
        <button aria-label="Go back" onClick={() => navigate("/")}>⬅ Back</button>
        <h1>Unknown body part: {part}</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <button aria-label="Go back" onClick={() => navigate("/")}>⬅ Back</button>
      <h1>{part} Workouts</h1>

      {gymData[part].map((workout) => (
        <div
          key={workout.id}
          className="card"
          role="button"
          tabIndex={0}
          onClick={() => navigate(`/workout/${part}/${workout.name}`)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              navigate(`/workout/${part}/${workout.name}`);
            }
          }}
        >
          {workout.name}
        </div>
      ))}
    </div>
  );
}
