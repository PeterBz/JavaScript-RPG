let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterhealth;
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
];

// Weapons 

const weapon = [
  {
  name: "stick", 
  power: 5
}, 
{
  name: "dagger", 
  power: 30
},
{
  name: "clawhammer", 
  power: 50
},

{
  name: "sword",
  power: 100
}
];

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

function fightDragon() {
  console.log("Going to fight the Dragon.");
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
  if(gold >= 30){
    
  }
}
function fightSlime() {}
function fightBeast() {}
