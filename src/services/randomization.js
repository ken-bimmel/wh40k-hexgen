// Adapted from: https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
  const arrayCopy = [...array];
  let arrayLength = arrayCopy.length;
  let swapSpace = null;
  let index = null;

  // While there remain elements to shuffle…
  while (arrayLength) {
    // Pick a remaining element…
    arrayLength -= 1;
    index = Math.floor(Math.random() * arrayLength);

    // And swap it with the current element.
    swapSpace = arrayCopy[arrayLength];
    arrayCopy[arrayLength] = arrayCopy[index];
    arrayCopy[index] = swapSpace;
  }

  return arrayCopy;
}

function shuffleAndSelect(array, number) {
  return shuffle(array).slice(0, number);
}

function getRandomFromArray(array) {
  if (array === undefined || array === null || array.length < 1) {
    return null;
  }
  return array[Math.floor(Math.random() * array.length)];
}

export { shuffleAndSelect, getRandomFromArray };
