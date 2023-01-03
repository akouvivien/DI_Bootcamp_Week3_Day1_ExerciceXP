/* <html>
    <head>

    </head>
    <body>  
        <div>Users:</div>
        <ul>
            <li>John</li>
            <li>Pete</li>
        </ul>
        <script src="xp2.js"></script>
    </body>
</html> */

let DIV = document.querySelector('div');

// ajouter une couleur d'arrière-plan "bleu clair" et un peu de rembourrage à la div
DIV.style.backgroundColor = 'lightblue';
DIV.style.padding = '10px';

// cacher le premier élément li

// ajouter une bordure au second élément li
let borderli = document.querySelectorAll('li')[1];
borderli.style.border = '1px solid red';

// modifier la taille de la police de tout le corps
document.body.style.fontSize = '20px';

// bonus : afficher une alerte si la couleur de fond de la div est "bleu clair"
if (DIV.style.backgroundColor === 'lightblue') {
  alert(`un des div possede une couleur de fond en bleue claire`);
}