function findLongestWordLength(str) {
  const tempArray = str.split(' ')
  const myWord = tempArray.reduce((accum, item) => {
    if (accum.length > item.length) {
      return accum
    }
    return item
  }, 0)
  console.log(myWord.length)

  return myWord.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");