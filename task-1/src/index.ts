function mostFrequentCharacter(s: string): [string, number] {
    const frequencyMap: { [key: string]: number } = {};
    for (const char of s) {
      frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }
    let maxChar = '';
    let maxCount = 0;
    for (const char in frequencyMap) {
      if (frequencyMap[char] > maxCount) {
        maxChar = char;
        maxCount = frequencyMap[char];
      }
    }
    return [maxChar, maxCount];
  }
  function runProgram(): void {
    const inputElement = document.getElementById("input") as HTMLInputElement;
    const resultElement = document.getElementById("result") as HTMLParagraphElement;
    if (inputElement && resultElement) {
      const userInput = inputElement.value;
      const [char, count] = mostFrequentCharacter(userInput);
      resultElement.innerText = `Результат: ['${char}', ${count}]`;
    }
  }
  (window as any).runProgram = runProgram;
  