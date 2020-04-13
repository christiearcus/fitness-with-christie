import dataShuffler from "../lib/dataShuffler";

const stretches = [
  "forward fold",
  "frog pose",
  "pigeon pose",
  "splits",
  "child's pose",
  "lotus forward fold",
  "lizard lunge twist",
  "forward folded cow face pose",
  "puppy pose",
  "downward dog stretch",
];

export default dataShuffler(stretches).slice(0, 5);
