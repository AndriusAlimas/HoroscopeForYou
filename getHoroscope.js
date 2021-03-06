// this variable is for result we will store all 3 sentences later on to form horoscope
let result = "";

// array of ending words where you should put to create ending of your sentence
let endingWords = ['good luck','bad luck','super coming days','good health','poor money','bad relationship with friends','argue with someone close to you','visitor that will suprise you'];

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

// function that only change ending, first argument is static never change string, and this function combine those to create
// sentence and simply return to the caller
const changeEnding = (beginning,ending) =>{
    let   index = Math.floor(Math.random() * ending.length);
    return beginning + " " + ending[index];
}

// testing our method
let firstSentence = makeSentence(startPlanet,planet);
let secondSentence = changeEnding("You are having",endingWords);
console.log(firstSentence);
console.log(secondSentence);