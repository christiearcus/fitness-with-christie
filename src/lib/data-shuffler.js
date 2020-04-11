const dataShuffler = (data) =>
  data.sort(() => {
    return 0.5 - Math.random();
  });

export default dataShuffler;
