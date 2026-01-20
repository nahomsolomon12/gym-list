import { useParams, useNavigate } from "react-router-dom";
import { gymData } from "../data";

export default function WorkoutDetail() {
  const { part, name } = useParams();
  const navigate = useNavigate();

  const workout = gymData[part].find(
    (w) => w.name === name
  );

  return (
    <div className="container">
      <button onClick={() => navigate(-1)}>⬅ Back</button>

      <h1>{workout.name}</h1>

      <div style={{ aspectRatio: "16 / 9" }}>
        <iframe
          width="100%"
          height="100%"
          src={workout.video}
          title={workout.name}
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
}
