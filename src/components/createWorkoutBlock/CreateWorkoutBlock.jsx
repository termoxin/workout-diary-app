import React from "react";

import "../../styles/createWorkoutBlock.css";

const CreateWorkoutBlock = ({ onCreateWorkout }) => {
  const onSubmitHandler = event => {
    event.preventDefault();

    const { name, reps, date } = event.target.elements;

    if (name.value && reps.value && date.value) {
      onCreateWorkout(name.value, reps.value, date.value);
    }

    name.value = "";
    reps.value = "";
    date.value = "";
  };

  return (
    <form onSubmit={onSubmitHandler} className="createWorkout-block">
      <input type="text" placeholder="Name" name="name" />
      <input type="number" placeholder="Reps" name="reps" />
      <input type="date" name="date" />
      <button className="saveButton">Save</button>
    </form>
  );
};

export default CreateWorkoutBlock;
