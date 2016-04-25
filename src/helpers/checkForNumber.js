function checkForNumber(comment) {
  // separate the words
  const words = comment.split(' ');

  let answer;
  // words = {'hello', 'hi'};
  for (let y = 0; y < words.length; y ++) {
    let allNumbers = true;

    // check if the word is made of numbers
    for (let x = 0; x < words[y].length; x ++) {
      // if it is a number
      if (
        words[y].charCodeAt(x) !== 46 &&
        words[y].charCodeAt(x) < 48 ||
        words[y].charCodeAt(x) > 57
      ) {
        allNumbers = false;
      }
    }
    if (allNumbers) {
      answer = words[y];
    }
  }
  return parseInt(answer, 10);
}

export default checkForNumber;
