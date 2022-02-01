const rulesBtn = document.getElementById('rulesBtn');
const submitBtn = document.getElementById('submitBtn');
//Keep track of current room
let currentRoom = 'roomOne';
//For changing descriptions
let text = document.getElementById('text');
//For checking user input
const form = document.forms['form'];


const GameData = {
    roomOne: {
        room: 'You find yourself in a house. The hardwood floors are pristine. Someone must be taking care of this place, as there is no dust in here and the room feels inviting. In front of you is a <b>door</b>. A coffee <b>table</b> sits in between a rug and a couch to your left. An electronic lock <b>box</b> sits beside the couch. To your right, a rocking chair sits in the corner. <b>Paintings</b> adorn the wall.',
        door: 'door',
        table: 'Covered with broken glass, blood, and is that a tooth?',
        box: 'An electronic lock box. This doesn\'t seem to use numbers. It requires a word. Maybe there is a clue around here to help me open this...',
        paintings: 'Provide descriptions of paintings depicting historical Dalton / Georgia events'
    },
    roomTwo: {
        room: 'A large rug covers most of the concrete floor. A thick layer of dust covers nearly everything, even the cobwebs in the corner. In front of you is an ornate <b>chest</b> that is locked. To your left is a metal <b>table</b> with fake plants on either side. To your right is a metal <b>bookshelf</b> that covers the entire wall.',
        chest: 'chest',
        table: 'table',
        bookshelf: 'bookshelf'
    },
    answers: {
        roomOne: '',
        roomTwo: ''
    },
    images: {

    }
};

let UserData = {
    inventory: []
};

const GameLogic = {
    checkAnswer: function () {
       let inputArr = userInput.split(' ');
        if (!UserData.inventory.includes('key')) {
            const answer = 'answer1';
        } else {
            const answer2 = 'answer2';
        }
    },
    checkInput: function(input) {
        // Check if input is falsy / undefined
        if (!input) {
            text.innerHTML = GameData[currentRoom].room;
        } else if (GameData[currentRoom][input]) {
            //Check if entering answer for puzzle
            // if (input === GameData.answers.roomOne) else if
            
            // Check if user input matches item in room
            text.innerHTML = GameData[currentRoom][input];
         } else if (!GameData[currentRoom][input]) {
            text.innerHTML = 'Item not found...';
        }     
    },
    incrementRoom: function() {
        currentRoom = 'roomTwo';
    }
};

form.onsubmit = e => {
    e.preventDefault();
    let input = form.userInput.value.toLowerCase();
    GameLogic.checkInput(input);
    form.reset();
};

const showRules = function() {
    const rules = document.getElementById('rules');
    if (rules.style.display === 'block') {
        rules.style.display = 'none';
    } else {
        rules.style.display = 'block';
    }
};

window.onload = function() {
    text.innerHTML = GameData[currentRoom].room;
    rulesBtn.addEventListener('click', e => {
        console.log('rulesBtn event');
        e.preventDefault();
        showRules();
    });
};