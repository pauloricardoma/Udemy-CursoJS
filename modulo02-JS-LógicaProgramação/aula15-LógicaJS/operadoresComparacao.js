/*
Operadores de comparação
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade (valor) - não é recomendado o uso
=== igualdade estrita (valor e tipo)
!= diferente (valor) - não é recomendado o uso
!== diferente estrito (valor e tipo)
*/
const comp = 10 >= 5;
const comp2 = 10 === "10"; // false - tipo number diferente de tipo string
const comp3 = 10 !== "10"; // true - tipo number diferente de tipo string
console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(comp); // true
console.log(comp2);
console.log(comp3);
