function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun']// Change this line
  console.log(sentence)
  return sentence;
}

console.log(spreadOut());