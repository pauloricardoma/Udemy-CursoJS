const elementos = [
  { tag: 'p', texto: 'Frase 1' },
  { tag: 'div', texto: 'Frase 2' },
  { tag: 'footer', texto: 'Frase 3' },
  { tag: 'seection', texto: 'Frase 4' },
];

const section = document.querySelector('.container');
const div = document.createElement('div');
const query = [];

for (let i = 0; i < elementos.length; i++) {
  query[i] = document.createElement(`${elementos[i].tag}`);
  div.appendChild(query[i]);
  query[i].textContent = `${elementos[i].texto}`;
}

section.appendChild(div);

// de outro aluno, ficou ainda menor...

// const div = document.createElement('div');
// for (let i = 0; i < elementos.length; i++) {
//   let { tag, texto } = elementos[i];
//   div.innerHTML += `<${tag}>${texto}</${tag}>`;
// }
// section.appendChild(div);
