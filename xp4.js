// le tableau de livres
let Books = [
    {
        title: 'Harry Potter',
        author: 'J.K. Rowling',
        image: 'https://www.imdb.com/title/tt1201607/mediaviewer/rm3857085952/?ref_=tt_ov_i',
        alreadyRead: false
    },
    {
        title: 'Robin Hood',
        author: 'Thomas Love Peacock',
        image: 'https://fr.web.img3.acsta.net/pictures/18/10/22/15/48/3920832.jpg',
        alreadyRead: true
    }
];

  // sélectionner le div
    let div = document.querySelector('.listBooks');

  // parcourir le tableau de livres et générer du HTML pour chaque livre
  Books.forEach((book) => {
    // créer le HTML pour chaque livre
    let bookHTML = `
        <div class="book">
            <h2>${book.title}</h2>
            <p>Written by ${book.author}</p>
            <img src="${book.image}" width="100" />
            <p>${book.alreadyRead ? 'Already read' : 'Not read yet'}</p>
        </div>
    `;

    // ajouter le HTML généré au div
    div.innerHTML += bookHTML;
    });

  // sélectionner tous les éléments p du div
    const ptext = div.querySelectorAll('p');

  // mettre en surbrillance en rouge tous les éléments p qui indiquent que le livre a déjà été lu
    ptext.forEach((p) => {
        if (p.textContent === 'Already read') {
            p.style.color = 'red';
        }
    });