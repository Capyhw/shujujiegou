var reconstructQueue = function (people) {
  people.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]));
  const res = new Array();
  for (let i = 0; i < people.length; i++) {
    res.splice(people[i][1], 0, people[i]);
  }
  return res;
};
