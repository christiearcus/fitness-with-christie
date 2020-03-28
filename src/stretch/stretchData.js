const stretches = [
  "seated forward fold",
  "frog pose",
  "pigeon pose",
  "splits",
  "wide child's pose",
  "crossed legs",
  "lizard lunge twist",
  "shin to shin",
  "forward folded cow face pose",
];

export default stretches.sort(() => {
  return 0.5 - Math.random();
});
