function isFibonacci(number) {
  let previous = 0;
  let current = 1;

  while (current < number) {
      let temp = previous;

      previous = current;
      current = temp + current;
  }

  const isFibonacci = current === number;

  if (isFibonacci) {
    console.log(`${number} pertence a uma sequência Fibonacci.`);
  } else {
    console.log(`${number} não pertence a uma sequência Fibonacci.`);
  }

  return isFibonacci;
}

isFibonacci(5);
isFibonacci(7);
isFibonacci(13);