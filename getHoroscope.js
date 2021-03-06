// this variable is for result we will store all 3 sentences later on to form horoscope
let result = "";

// array of ending words where you should put to create ending of your sentence, combine with start have
let havingEndingWords = ['good luck','bad luck','super coming days','good health','poor financial','bad relationship with friends','argue with someone close to you','visitor that will suprise you'];

// array of ending words where you should put to create ending of your sentence, combine with start should
let shouldEndingWords = ['trust no one', 'believe what you doing', 'carefully avoid people', 'save money for upcoming events','leave the house','buy lotery ticket','avoid conversations','speak with your family','go to the party' ];

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
  result = makeSentence(startPlanet,planet);
  result += "\n\n" + changeEnding("You are having",havingEndingWords);
  result += "\n\n" + changeEnding("You should: ",shouldEndingWords);   
console.log(result);
