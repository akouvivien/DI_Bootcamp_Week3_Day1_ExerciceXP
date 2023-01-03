/* <html>
    <head>
    </head>
    <body>
        <div id="navBar">
            <ul>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">My Friends</a></li>
                <li><a href="#">Messenger</a></li>
                <li><a href="#">My Pics</a></li>
            </ul>
        </div>
        <script src="xp3.js"></script>
    </body>
</html> */
// Dans le <div>, modifiez la valeur de l'attribut id de navBar à socialNetworkNavigation , 
// à l'aide de la setAttributeméthode.

let DIV = document.querySelector('div');
DIV.setAttribute('id', "socialNetworkNavigation")

// Nous allons ajouter un nouveau <li>au <ul>.

// Tout d'abord, créez une nouvelle <li>balise (utilisez la createElementméthode).
const LI = document.createElement('li');

// créer un nouveau nœud de texte avec "Déconnexion" comme texte spécifié
const nœudDéconnexion = document.createTextNode('Déconnexion');

// ajouter le nœud de texte au nœud de liste nouvellement créé
LI.appendChild(nœudDéconnexion);

// ajouter ce nœud de liste mis à jour à la liste non ordonnée
const UL = document.querySelector('ul');
UL.appendChild(LI);