import _ from 'lodash';

const findLongestWord = (arr) => {
  let mostLongWord = '';
  for (const word of arr) {
    if (word.length > mostLongWord.length) {
        mostLongWord = word;
    }
  }
  return mostLongWord;
};

console.log(findLongestWord(["Java", "Python", "JavaScript"])); // "JavaScript"
console.log(findLongestWord(["football", "basketball", "tennis"])); // "basketball"
console.log(findLongestWord(["sun", "moon", "stars"])); // "stars"

const sumUniqueNumbers = (arr) => {
  let result = 0;
  const uniqArrElement = _.uniq(arr);
  for (const number of uniqArrElement) {
    result += number;
  }
  return result;
};

console.log(sumUniqueNumbers([1, 2, 3, 2, 4, 3, 5])); // 15
console.log(sumUniqueNumbers([10, 20, 10, 20, 30])); // 60
console.log(sumUniqueNumbers([0, -1, -2, -1, -3])); // -6

const mergeArrays = (...arrays) => (_.union(...arrays));

console.log(mergeArrays([1, 2, 3], [4, 5, 6], [7, 8, 9], [2, 3, 4])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(mergeArrays([1, 3, 5], [2, 4, 6], [3, 5, 7])); // [1, 3, 5, 2, 4, 6, 7]

const hasProperty = (obj, wantedCriminalElement) => {
  if (Object.hasOwn(obj, wantedCriminalElement)) {
    return true;
  }
  return false;
};

console.log(hasProperty({name: "Alice", age: 25}, "age")); // true
console.log(hasProperty({name: "Bob", country: "France"}, "gender")); // false
console.log(hasProperty({type: "fruit", color: "red"}, "color")); // true
