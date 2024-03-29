var countSubstrings = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    for (let l = i, r = i; l >= 0 && s[l] === s[r]; l--, r++) count++;
    for (let l = i, r = i + 1; l >= 0 && s[l] === s[r]; l--, r++) count++;
  }
  return count;
};
