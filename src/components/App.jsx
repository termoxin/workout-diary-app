import React, { useState } from "react";

import Header from "../components/header/Header";
import WorkoutList from "./workoutList/WorkoutList";
import WorkoutItem from "./workoutList/WorkoutItem";
import CreateWorkoutBlock from "./createWorkoutBlock/CreateWorkoutBlock";
import { ID } from "../helpers/id";

const App = () => {
  const [exercises, setExercises] = useState([]);

  const createWorkoutSession = (name, reps, date) => {
    const newWorkoutSession = { id: ID(), name, reps, date };
    const newState = [...exercises];

    newState.push(newWorkoutSession);

    setExercises(newState);
  };

  return (
    <div className="container">
      <Header />
      <CreateWorkoutBlock onCreateWorkout={createWorkoutSession} />
      <WorkoutList>
        {exercises.map(({ id, name, reps, date }) => (
          <WorkoutItem key={id} name={name} reps={reps} date={date} />
        ))}
      </WorkoutList>
    </div>
  );
};

export default App;
