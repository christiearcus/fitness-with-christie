import dataShuffler from "../lib/dataShuffler";

const stretches = [
  "forward fold",
  "frog pose",
  "pigeon pose",
  "splits",
  "child's pose",
  "lotus forward fold",
  "lizard lunge twist",
  "hip flexor wall stretch",
  "yogi squat",
  "folded cow face pose",
  "puppy pose",
  "downward dog stretch",
  "scandasana stretch",
  "wrist stretch",
  "wall shoulder stretch",
  "half frog",
  "sitting middle splits fold",
];

export default dataShuffler(stretches).slice(0, 5);
