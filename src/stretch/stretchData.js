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
];

export default stretches.slice(0, 5).sort(() => {
  return 0.5 - Math.random();
});
