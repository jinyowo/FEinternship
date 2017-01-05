/* airbnb javascript style guide : 연습 */

const lukeSkywalker = "abc";
const anakinSkywalker = "def";

const obj = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  episodeThree: 3,
  mayTheFourth: 4,
  addValue(value) {
    return atom.value + value;
  },
};

for(var key in obj) {
  console.log(key + "\n" + obj[key]);
};
