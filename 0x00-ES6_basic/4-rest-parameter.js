export default function returnHowManyArguments(...args) {
  let counter = 0;
  // eslint-disable-next-line no-unused-vars, prefer-const
  for (let x of args) {
    counter += 1;
  }
  return counter;
}
