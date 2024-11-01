"use strict";
function mostFrequentCharacter(s) {
    var frequencyMap = {};
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }
    var maxChar = '';
    var maxCount = 0;
    for (var char in frequencyMap) {
        if (frequencyMap[char] > maxCount) {
            maxChar = char;
            maxCount = frequencyMap[char];
        }
    }
    return [maxChar, maxCount];
}
function runProgram() {
    var inputElement = document.getElementById("input");
    var resultElement = document.getElementById("result");
    if (inputElement && resultElement) {
        var userInput = inputElement.value;
        var _a = mostFrequentCharacter(userInput), char = _a[0], count = _a[1];
        resultElement.innerText = "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ['".concat(char, "', ").concat(count, "]");
    }
}
window.runProgram = runProgram;
