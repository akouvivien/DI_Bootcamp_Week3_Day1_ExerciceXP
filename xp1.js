/**
 * @author: Akou Jean Vivien
 * Exercice XP
 * @week: Week3
 * @day: day1
 */

  /** Exercice 1 */
// Utilisation de Javascript :
// Récupérez le div et console.log it
let div= document.getElementById("container")
console.log(div)

// Changez le nom "Pete" en "Richard".

let lists = document.querySelectorAll('.list > li');

for (const elem of lists) {
    if (elem.textContent == 'Pete') {
        elem.textContent = 'Richard';
      }
      console.log(elem)
}

// Remplacez chaque prénom dans les deux <ul> par votre nom
let ullists = document.querySelectorAll('ul');
let Name = 'vivien';
for (const elem of ullists) {
    elem.firstElementChild.textContent = Name ;
      console.log(elem)
}


// Supprimez le <li> qui contient le nœud de texte "Sarah"
for (const elem of lists) {
    if (elem.textContent === 'Sarah') {
        elem.remove()
    }
}

  // Bonus : Ajoutez une classe appelée student_list aux deux <ul>
  const Classlists = document.querySelectorAll('.list');
  for (const elem of Classlists) {

    elem.classList.add('student_list');
  }

  // Bonus : Ajoutez les classes university et attendance au premier <ul>
  const List1 = document.querySelectorAll('.list')[0]
  List1.classList.add('university', 'attendance');

  const List2 = document.querySelector('.list') //pour retourner que la premiere liste ayant la class="list"
  List2.classList.add('university', 'attendance');