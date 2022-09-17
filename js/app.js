const app = {
    // Méthode appelée au chargement de la page
    init: function() {
       const inputText = document.getElementById('text');
       const inputLine = document.getElementById('number_lines');
       inputText.addEventListener('keyup', app.addText);
       inputLine.addEventListener('keyup', app.addLine);
    },
    addText: function() {
        const content = document.getElementById('text').value;
        const line = document.getElementById('number_lines').value;
        const board = document.querySelector('.text-board');
        board.innerHTML = "";
        for (let index = 1; index <= line; index++) {
        const pElement = document.createElement('p');
            pElement.innerHTML = content + '<br>';
            board.appendChild(pElement);
        }
    },
    addLine: function() {
        const content = document.getElementById('text').value;
        const line = document.getElementById('number_lines').value;
        const board = document.querySelector('.text-board');
        board.innerHTML = "";
        for (let index = 1; index <= line; index++) {
        const pElement = document.createElement('p');
            pElement.innerHTML = content + '<br>';
            board.appendChild(pElement);
        }
    },
}

document.addEventListener('DOMContentLoaded', app.init);