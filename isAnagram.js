// var isAnagram = function (s, t) {
//   for (let char of t) {
//     if (!s.includes(char)) {
//       return false;
//     }
//   }
//   return true;
// };

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  s = s.split("").sort();
  t = t.split("").sort();
  for (let i = 0; i < s.length; i++) {
    if (s[i] != t[i]) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("hfhfhfh", "fhhfhfh"));
