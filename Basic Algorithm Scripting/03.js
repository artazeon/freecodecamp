function factorialize(num) {
  let temp = 1;
  for (let i = 2; i <= num; i++) {
    temp = temp * i;
  }
  num = temp
  return num;
}

factorialize(5);