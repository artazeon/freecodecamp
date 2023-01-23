function howMan(...args) {
    return "You have passed " + args.length + " arguments.";
  }
  console.log(howMan(0, 1, 2));
  console.log(howMan("string", null, [1, 2, 3], { }));