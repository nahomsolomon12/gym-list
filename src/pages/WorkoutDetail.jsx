import { useParams, useNavigate } from "react-router-dom";
import { gymData } from "../data";

export default function WorkoutDetail() {
  const { part, name } = useParams();
  const navigate = useNavigate();

  const workout = gymData[part]?.find((w) => w.name === name);

  if (!workout) {
    return (
      <div className="container">
        <button aria-label="Go back" onClick={() => navigate(-1)}>⬅ Back</button>
        <h1>Workout not found</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <button aria-label="Go back" onClick={() => navigate(-1)}>⬅ Back</button>

      <h1>{workout.name}</h1>

      <div style={{ aspectRatio: "16 / 9" }}>
        <iframe
          width="100%"
          height="100%"
          src={workout.video}
          title={workout.name}
          style={{ border: "none" }}
          allowFullScreen
        />
      </div>
    </div>
  );
}
