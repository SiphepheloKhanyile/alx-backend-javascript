export default function appendToEachArrayValue(array, appendString) {
  // eslint-disable-next-line prefer-const
  let newArray = [];

  // eslint-disable-next-line prefer-const
  for (let value of array) {
    newArray.push(appendString + value);
  }

  return newArray;
}
