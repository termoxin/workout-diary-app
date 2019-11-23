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

  const deleteItemHandler = id => {
    const newExercises = exercises.filter(ex => ex.id !== id);
    setExercises(newExercises);
  };

  const calculateProgress = (name, id) => {
    const currentExercises = exercises.filter(
      exercise => exercise.name === name
    );

    const index = currentExercises.findIndex(e => e.id === id);

    if (index) {
      const previousExercise = currentExercises[index - 1];
      const currentExercise = currentExercises[index];
      const repsImprovements = currentExercise.reps - previousExercise.reps;

      return Math.round((+repsImprovements / +previousExercise.reps) * 100);
    }
  };

  return (
    <div className="container">
      <Header />
      <CreateWorkoutBlock onCreateWorkout={createWorkoutSession} />
      <WorkoutList>
        {exercises.map(({ id, name, reps, date }) => (
          <WorkoutItem
            key={id}
            id={id}
            name={name}
            progress={calculateProgress(name, id)}
            reps={reps}
            date={date}
            onDelete={deleteItemHandler}
          />
        ))}
      </WorkoutList>
    </div>
  );
};

export default App;
