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
          role="button"
          tabIndex={0}
          onClick={() => navigate(`/workouts/${part}`)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              navigate(`/workouts/${part}`);
            }
          }}
        >
          {part}
        </div>
      ))}
    </div>
  );
}
