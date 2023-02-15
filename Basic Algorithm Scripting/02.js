function reverseString(str) {
  const myArr = str.split('')
  const myArrReverse = myArr.reverse()
  str = myArrReverse.join('')
  return str;
}

reverseString("hello");