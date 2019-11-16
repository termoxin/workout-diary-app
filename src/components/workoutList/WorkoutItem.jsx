import React from "react";

import "../../styles/workoutItem.css";

const WorkoutItem = ({ name, reps, id, date, onDelete }) => (
  <li onClick={() => onDelete(id)}>
    <div className="workout-item">
      <span className="workout-item__name">{name}</span>
      <span className="workout-item__count">{reps} reps</span>
      <span className="workout-item__date">{date}</span>
      <span className="cross">X</span>
    </div>
  </li>
);

export default WorkoutItem;
