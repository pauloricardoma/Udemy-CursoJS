let varA = "A"; // B
let varB = "B"; // C
let varC = "C"; // A

let varD = varA;
varA = varB;
varB = varC;
varC = varD;

console.log(varA, varB, varC);

// mesmo resultado de maneira mais moderna
[varA, varB, varC] = [varB, varC, varA];
