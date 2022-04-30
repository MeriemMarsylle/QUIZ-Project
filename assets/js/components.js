import Header from './header.js';

customElements.define('main-header', Header);

let box = document.querySelector(' #btn  button');
let b = document.querySelector(' #btn ');
let tables = [
  {
    question: 'Quel est le surnom du tractopelle au Québec?',
    answer: 'tt',
    name: 'question1',
  },
  {
    question: 'Quel est le fabrcant qui ne produit pas de tractopelle?',
    answer: 'Tesla',
    name: 'question2',
  },
  {
    question: "Est ce qu'un tractopelle est un engin génial?",
    answer: 'Vrai',
    name: 'question3',
  },
  {
    question: 'Tractopelle, un engin de chantier[...]',
    answer: 'génial',
    name: 'question4',
  },
  {
    question: 'En quelle année a été inventé le tractopelle?',
    answer: '1947',
    name: 'question5',
  },
];
console.log(box);

box.addEventListener('click', function (e) {
  e.preventDefault();
  box.remove();

  let form = document.createElement('form');
  b.appendChild(form);

  let title = document.createElement('h2');
  title.innerText = 'Tractopelle Quizz';
  form.appendChild(title);

  const cc = tables.map((tab) => {
    let doc = document.createElement('div');
    const template = `<div class="flex flex-col "><label for="question1">${tab.question}</label>
      <input type="text" name="${tab.name}"> </div>`;
    doc.innerHTML = template;
    form.appendChild(doc);
  });

  let but = document.createElement('button');
  but.innerHTML = `<input class="submit " type="submit" value="Soumettre ">`;
  form.addEventListener('submit', generate);
  form.appendChild(but);
});

function generate(event) {
  event.preventDefault();
  var item = this.question5.value;
  console.log(item);
}

// function fct(e) {
//   e.preventDefault();
//   console.log(but.tab.name);
// }

//   const template = `
//   <div  class="wrapper2 border-4 border-indigo-600 p-5">
//    <h2 class= "text-2xl font-mono font-bold text-center">Tractopelle Quizz </h2>
//    <form>

//         <div class="flex flex-col ">
//         <label for="question1">Quel est le surnom du tractopelle au Québec?</label>
//         <input type="text" id="question1">
//         </div>

//         <p> Quel est le fabricant qui ne produit pas de tractopelle </p>
//         <div class=" flex items-center gap-4 ">
//         <div><input type="radio" name="choise" id="" value="Caterpillar"><label for="1">Caterpillar</label></div>
//         <div><input type="radio" name="choise" id="" value="Volvo"><label for="2">Volvo</label></div>
//         <div><input type="radio" name="choise" id="" value="Tesla"><label for="3">Tesla</label></div>
//         <div><input type="radio" name="choise" id="" value="JCB"><label for="4">JCB</label></div>
//         </div>

//         <p> Est ce qu'un tractopelle est un engin génial? </p>
//         <div class=" flex items-center gap-4 ">
//         <div><input type="radio" name="choise1" id="" value="Vrai"><label for="1">Vrai</label></div>
//         <div><input type="radio" name="choise1" id="" value="Faux"><label for="2">Faux</label></div>
//         </div>

//         <div class="flex flex-col ">
//         <label for="question2">Tractopelle, un engin de chantier[...]</label>
//         <input type="text" id="question2">
//         </div>

//         <p> En quelle année a été inventé le tractopelle? </p>
//         <div class=" flex items-center gap-4 ">
//         <div><input type="radio" name="choise2" id="" value="1947"><label for="1">1947</label></div>
//         <div><input type="radio" name="choise2" id="" value="1953"><label for="2">1953</label></div>
//         <div><input type="radio" name="choise2" id="" value="1967"><label for="3">1967</label></div>
//         <div><input type="radio" name="choise2" id="" value="2025"><label for="4">2025</label></div>
//         </div>
//         <div  class= "flex justify-center border-4 border-indigo-600 m-8 co" >
//         <input class="submit " type="submit" value="Soumettre ">
//         </div>
//     </form>
//  </div>
// `;

//   b.innerHTML = template;
