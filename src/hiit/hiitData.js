import dataShuffler from "../lib/dataShuffler";

const exercises = [
  "calf raises",
  "burpees",
  "reverse burpees",
  "plank star jumps",
  "toe points",
  "plank taps",
  "squat lift or jump",
  "crunches",
  "regular push up",
  "bicycle crunches",
  "shrimp squat",
  "shortboard pop ups",
  "longboard pop ups",
  "switch pop ups",
  "active scandasana",
  "mountain climbers",
  "lunges",
  "tricep dips / push up",
  "courtsies",
  "bend leg toe taps",
  "wall sit",
  "prayer squat to fold",
  "surfer squats",
  "kick through burpees",
  "hand stand",
  "kettle bell swings",
  "running high legs",
  "star jumps",
  "kettle bell dips",
  "bear walk",
];

export default dataShuffler(exercises).slice(0, 10);
