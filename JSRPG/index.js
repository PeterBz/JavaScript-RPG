let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

// alle Elemente aus dem html als const deklarieren damit wir sie updaten können
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const text = document.querySelector("#text");

const monsterName = document.querySelector("#monsterName");
const monsterHealth = document.querySelector("#monsterHealth");
const monsterStats = document.querySelector("#monsterStats");

const xpText = document.querySelector("#xpText");
const goldText = document.querySelector("#goldText");
const healthText = document.querySelector("#healthText");

// locations als array speichern
const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button function": [goStore, goCave, fightDragon],
    text: ['You are in the town. You see a sign that says "store".'],
  },
  {
    name: "store",
    "button text": [
      "Buy 10 health (10 gold)",
      "Buy weapon (30 gold)",
      "Go to town square",
    ],
    "button function": [buyHealth, buyWeapon, goTown],
    text: ["You are in the store."],
  },
  {
    name: "cave",
    "button text": ["Fight slime", "Fight beast", "Go to town square"],
    "button function": [fightSlime, fightBeast, goTown],
    text: ["You enter the cave and see some monsters"],
  },
  {
    name: "fight",
    "button text": ["Attack", "Dodge", "Run"],
    "button function": [attack, dodge, goTown],
    text: ["You are fighting a monster"],
  },


];

// Weapons

const weapons = [
  {
    name: "stick",
    power: 5,
  },
  {
    name: "dagger",
    power: 30,
  },
  {
    name: "clawhammer",
    power: 50,
  },

  {
    name: "sword",
    power: 100,
  },
];

// Monsters als array anlegen

const monsters = [
  {name: "slime",
    level: 2,
    health: 15
  }, 
  
  {name: "fanged beast",
    level: 8,
    health: 60
  }, 

  {name: "dragon",
    level: 20,
    health: 30
  }

]

// Button initialisieren onClick
button1.addEventListener("click", goStore);
button2.addEventListener("click", goCave);
button3.addEventListener("click", fightDragon);

function update(location) {
  //Town Square Buttons
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.addEventListener("click", location["button function"][0]);
  button2.addEventListener("click", location["button function"][1]);
  button3.addEventListener("click", location["button function"][2]);
  text.innerText = location.text;

  // store
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.addEventListener("click", location["button function"][0]);
  button2.addEventListener("click", location["button function"][1]);
  button3.addEventListener("click", location["button function"][2]);
  text.innerText = location.text;

  // cave
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.addEventListener("click", location["button function"][0]);
  button2.addEventListener("click", location["button function"][1]);
  button3.addEventListener("click", location["button function"][2]);
  text.innerText = location.text;
}

function goTown() {
  //update funnction aufrufen
  update(locations[0]);
}

function goStore() {
  update(locations[1]);
}

function goCave() {
  update(locations[2]);
}


function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = "You don't have enough gold to buy health";
  }
}
function buyWeapon() {
  if (currentWeapon < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name; // erstellen neue variable newWeapon und weisen dieser aus dem weapons array den namen der currentWeapon zu
      text.innerText = "You now have a " + newWeapon + ".";
      inventory.push(newWeapon);
      text.innerText += "In your Inventory you have: " + inventory + ".";
    } else {
      text.innerText = "You dont have enough gold to buy a weapon";
    }
  } else {
    text.innerText = "You already have the most powerful weapon!";
    button2.innerText = "Sell weapon for 15 gold";
    button2.addEventListener("click", sellWeapon);
  }
}

function sellWeapon() {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let currentWeapon = inventory.shift(); // shift removes first element of array and returns it into the currentWeapon variable
    text.innerText = "You sold a " + currentWeapon + ".";
    text.innerText += "You have " + inventory + "in your inventory";
  } else {
    text.innerText = "Don't sell your only weapon!";
  }
}

function fightSlime() {
  fighting = 0; 
  goFight();
}
function fightBeast() {
  fighting = 1; 
  goFight();
}

function fightDragon() {
  fighting = 2; 
  goFight();
}

function goFight() {
  update(locations[3]);
  monsterHealth = monsters[fighting].health; // wir setzen vorher fighting auf einen bestimmten index 0,1,2 und dieser index wählt dann aus unserem array monsters ein monster aus
  monsterStats.style.display = "block"; // updaten css stylen mit js 
  monsterNameText.innerText = monsters[fighting].name; 
  monsterHealthText.innerText = monsterHealth; 
}

function attack(){
  text.innerText = "The " + monsters[fighting].name + "attacks."; 
  text.innerText += " You attack it with your " + weapons[currentWeapon].name + "."; 
  health -= monsters[fighting].level; 
  monsterHealth -= weapons[currentWeapon].power; 
  monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1; 
}

function dodge() {}