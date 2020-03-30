const exercises = [
  "calf raises",
  "burpees",
  "plank star jumps",
  "toe points",
  "plank taps",
  "squat lift or jump",
  "crunches",
  "regular push up",
  "bicycle crunches",
  "shrimp or pistol squat",
  "pop ups",
  "mountain climbers",
  "lunges",
  "tricep dips or push up",
  "courtsies",
  "bend leg toe taps",
  "wall sit",
];

export default exercises.slice(0, 10).sort(() => {
  return 0.5 - Math.random();
});
