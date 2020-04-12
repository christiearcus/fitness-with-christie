import dataShuffler from "../lib/dataShuffler";

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
  "shrimp squat",
  "pop ups",
  "mountain climbers",
  "lunges",
  "tricep dips / push up",
  "courtsies",
  "bend leg toe taps",
  "wall sit",
  "prayer squat to fold",
  "surfer squats",
  "kick through burpees",
];

export default dataShuffler(exercises).slice(0, 10);
