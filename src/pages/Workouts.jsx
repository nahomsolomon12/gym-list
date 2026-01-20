import { useParams, useNavigate } from "react-router-dom";
import { gymData } from "../data";

export default function Workouts() {
  const { part } = useParams();
  const navigate = useNavigate();

  return (
    <div className="container">
      <button onClick={() => navigate("/")}>⬅ Back</button>
      <h1>{part} Workouts</h1>

      {gymData[part].map((workout) => (
        <div
          key={workout.name}
          className="card"
          onClick={() =>
            navigate(`/workout/${part}/${workout.name}`)
          }
        >
          {workout.name}
        </div>
      ))}
    </div>
  );
}
