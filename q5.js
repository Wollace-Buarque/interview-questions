function reverseString(source) {
  const sourceLength = source.length;

  if (sourceLength == 0) {
    return "";
  }

  let reversedString = "";

  for (let index = sourceLength - 1; index >= 0; index--) {
    reversedString += source[index];
  }

  return reversedString;
}

console.log(reverseString("Hello World"));
console.log(reverseString("Olá!"));