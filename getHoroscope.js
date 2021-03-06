// this variable is for result we will store all 3 sentences later on to form horoscope
let result = "";

// array of planets, where we can use with startPlanet arrays to make sentence
let planet = ['mars','venus','jupiter','new moon','the sun','mercury'];

// array of starting words with planets
let startPlanet = ['Your sign is ','Wrong planet for you ','Better place ','Colliding planet ', 'Reach limit your sign ','Be aware this is '];

// function that will accept two arguments beginning sentence and ending sentence ,
// randomly get single string from arrays and returning combining those strings to full sentence
const makeSentence = (beginning,ending) =>{
    let result = "";
    let index = Math.floor(Math.random() * beginning.length);
    result += beginning[index];
    index = Math.floor(Math.random() * ending.length);
    result += ending[index];
    return result;
}

// testing our method
let firstSentence = makeSentence(startPlanet,planet);
console.log(firstSentence);