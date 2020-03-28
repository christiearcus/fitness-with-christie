const exercises = [
  "calf raises",
  "burpees",
  "plank star jumps",
  "toe points",
  "plank taps",
  "squat lift",
  "crunches",
  "regular push up",
  "bikes",
  "shrimp or pistol squat",
  "pop ups",
  "mountain climbers",
  "lunges",
  "tricep dips or push up",
  "courtsies",
  "bend leg toe taps",
];

export default exercises.sort(() => {
  return 0.5 - Math.random();
});
