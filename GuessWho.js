// These are the variables
const characters = [];
let remainingCharacters = {};
let userResponse = ''
//Sex variables
let females = [];
let males = [];
//Hair Variables
let blondes = [];
let nonBlondes = [];
let brownHair = [];
let nonBrownHair = [];
let blackHair = [];
let nonBlackHair = [];
let redHair = [];
let nonRedHair = [];
let whiteHair = [];
let nonWhiteHair = [];
//Name variables
let startsWithA = [];
let notA = [];
let startsWithD = [];
let notD = [];
let startsWithE = [];
let notE = [];
let startsWithJ = [];
let notJ = [];
let startsWithL = [];
let notL = [];
let startsWithM = [];
let notM = [];
let startsWithS = [];
let notS = [];
//Eye variables
let blueEyes = [];
let nonBlueEyes =[];
let brownEyes = [];
let nonBrownEyes = [];
let greenEyes = [];
let nonGreenEyes = [];
//Eyeglasses variable
let hasGlasses = [];
let noGlasses = [];
//Smile-type variable
let showingTeeth = [];
let notShowingTeeth = [];
//Hat variable
let hasHat = [];
let noHat = [];
//Fascial hair variable
let hasFacialHair = [];
let noFacialHair = [];
//Earring variable
let hasEarrings = [];
let noEarrings = [];



// Function used to create character objects
const characterFactory = (name, sex, hairColor, startsWith, eyeColor, glasses, teeth, hat, facialHair, earrings) => {
  return {
    characterName: name,
    characterSex: sex,
    characterHairColor: hairColor,
    nameStartsWith: startsWith,
    characterEyeColor: eyeColor,
    chracterGlasses: glasses,
    characterTeeth: teeth,
    characterHat: hat,
    characterFacialHair: facialHair,
    characterEarrings: earrings,
  }
}

// Creates the characters
characters.push(characterFactory('Laura', 'female', 'black', 'L', 'green', false, true, false, false, true));

characters.push(characterFactory('Mike', 'male', 'black', 'M', 'brown', false, true, true, false, false));

characters.push(characterFactory('Lily', 'female', 'brown', 'L', 'green', false, true, false, false, false));

characters.push(characterFactory('Sam', 'male', 'black', 'S', 'green', false, false, true, false, false));

characters.push(characterFactory('Ben', 'male', 'brown', 'B', 'brown', true, false, false, false, false));

characters.push(characterFactory('Carmen', 'female', 'white', 'C', 'brown', false, true, false, false, true));

characters.push(characterFactory('Jordan', 'male', 'black', 'J', 'brown', false, false, false, true, true)); 

characters.push(characterFactory('Rachel', 'female', 'brown', 'R', 'blue', true, false, false, false, true));

characters.push(characterFactory('Katie', 'female', 'blonde', 'K', 'blue', false, false, true, false, false));

characters.push(characterFactory('Joe', 'male', 'white', 'J', 'brown', true, true, false, true, false));

characters.push(characterFactory('Amy', 'female', 'black', 'A', 'brown', true, false, false, false, false));

characters.push(characterFactory('Gabe', 'male', 'black', 'G', 'brown', false, false, false, false, false));

characters.push(characterFactory('Emma', 'female', 'red', 'E', 'brown', false, false, false, false, false));

characters.push(characterFactory('Al', 'male', 'white', 'A', 'blue', true, false, true, false));

characters.push(characterFactory('Mia', 'female', 'black', 'M', 'brown', false, true, false, false, false));

characters.push(characterFactory('Leo', 'male', 'white', 'L', 'brown', false, true, false, true, false));

characters.push(characterFactory('David', 'male', 'blonde', 'D', 'brown', false, true, true, true, false));

characters.push(characterFactory('Farah', 'female', 'black', 'F', 'blue', false, false, false, false, false));

characters.push(characterFactory('Daniel', 'male', 'red', 'D', 'green', false, false, false, true, false));

characters.push(characterFactory('Sofia', 'female', 'brown', 'S', 'green', false, true, false, false, true));

characters.push(characterFactory('Olivia', 'female', 'brown', 'O', 'brown', false, false, false, false, false));

characters.push(characterFactory('Eric', 'male', 'black', 'E', 'blue', false, false, false, false, false));

characters.push(characterFactory('Liz', 'female', 'white', 'L', 'blue', true, true, false, false, false));

characters.push(characterFactory('Nick', 'male', 'blonde', 'N', 'brown', false, false, false, false, true));

remainingCharacters = characters;

//Updates the characters remaining
const remainingCharacterFunc = (workingArr) => {
  remainingCharacters = [];  
  for (let o = 0; o < characters.length; o++){
    for (let i = 0; i < workingArr.length; i++){
      if(workingArr[i] === characters[o].characterName){
        remainingCharacters.push(characters[o]);
    }
   }
  }
};

// The following functions separate the characters based on the question asked and pushes their names to their corresponding variables
const findSex = (sexVar,sexArr1, sexArr2) => { 
  for (let sex in characters){
    if (characters[sex].characterSex === sexVar){
      sexArr1.push(characters[sex].characterName);
    } else if (characters[sex].characterSex !== sexVar){
      sexArr2.push(characters[sex].characterName);
    }
   }
 };

const findHair = (hairVar,hairArr1, hairArr2) => {
   for (let hair in remainingCharacters){
    if (remainingCharacters[hair].characterHairColor === hairVar){
      hairArr1.push(remainingCharacters[hair].characterName);
    } else if (remainingCharacters[hair].characterHairColor !== hairVar){
      hairArr2.push(remainingCharacters[hair].characterName);
    } 
  }
};


const findName = (nameVar,nameArr1, nameArr2) => {
   for (let name in remainingCharacters){
    if (remainingCharacters[name].nameStartsWith === nameVar){
      nameArr1.push(remainingCharacters[name].characterName);
    } else if (remainingCharacters[name].nameStartsWith !== nameVar){
      nameArr2.push(remainingCharacters[name].characterName);
    } 
  }
};


const findEyeColor = (eyeVar, eyeArr1, eyeArr2) => {
   for (let eyes in remainingCharacters){
    if (remainingCharacters[eyes].characterEyeColor === eyeVar){
      eyeArr1.push(remainingCharacters[eyes].characterName);
    } else if (remainingCharacters[eyes].characterEyeColor !== eyeVar){
      eyeArr2.push(remainingCharacters[eyes].characterName);
    } 
  }
};

const findGlasses = (glassesVar, glassesArr1, glassesArr2) => {
   for (let glasses in remainingCharacters){
    if (remainingCharacters[glasses].chracterGlasses === glassesVar){
      glassesArr1.push(remainingCharacters[glasses].characterName);
    } else if (remainingCharacters[glasses].chracterGlasses !== 
    glassesVar){
      glassesArr2.push(remainingCharacters[glasses].characterName);
    } 
  }
};

const findSmile = (smileVar, smileArr1, smileArr2) => {
   for (let smile in remainingCharacters){
    if (remainingCharacters[smile].characterTeeth === smileVar){
      smileArr1.push(remainingCharacters[smile].characterName);
    } else if (remainingCharacters[smile].characterTeeth !== smileVar){
      smileArr2.push(remainingCharacters[smile].characterName);
    } 
  }
};

const findHat = (hatVar, hatArr1, hatArr2) => {
   for (let hat in remainingCharacters){
    if (remainingCharacters[hat].characterHat === hatVar){
      hatArr1.push(remainingCharacters[hat].characterName);
    } else if (remainingCharacters[hat].characterHat !== hatVar){
      hatArr2.push(remainingCharacters[hat].characterName);
    } 
  }
};

const findBeard = (beardVar, beardArr1, beardArr2) => {
   for (let beard in remainingCharacters){
    if (remainingCharacters[beard].characterFacialHair === beardVar){
      beardArr1.push(remainingCharacters[beard].characterName);
    } else if (remainingCharacters[beard].characterFacialHair !== beardVar)
    {
      beardArr2.push(remainingCharacters[beard].characterName);
    } 
  }
};

const findEarrings = (earringVar, earringArr1, earringArr2) => {
   for (let earrings in remainingCharacters){
    if (remainingCharacters[earrings].characterEarrings === earringVar){
      earringArr1.push(remainingCharacters[earrings].characterName);
    } else if (remainingCharacters[earrings].characterEarrings !== 
    earringVar){
      earringArr2.push(remainingCharacters[earrings].characterName);
    } 
  }
};

/*The askQuestion function will first attempt to find a characteristic that will eliminate at least 50% of the remaining characters. If it
cannot eliminate exactly 50% of the remaining characters, it will then find a characteristic that will eliminate 40-60% of the remaining
characters. */

const askQuestion = () => {
  blondes = [];
  nonBlondes = [];
  brownHair = [];
  nonBrownHair = [];
  blackHair = [];
  nonBlackHair = [];
  redHair = [];
  nonRedHair = [];
  whiteHair = [];
  nonWhiteHair = [];
  startsWithA = [];
  notA = [];
  startsWithD = [];
  notD = [];
  startsWithE = [];
  notE = [];
  startsWithJ = [];
  notJ = [];
  startsWithL = [];
  notL = [];
  startsWithM = [];
  notM = [];
  startsWithS = [];
  notS = [];
  blueEyes = [];
  nonBlueEyes =[];
  brownEyes = [];
  nonBrownEyes = [];
  greenEyes = [];
  nonGreenEyes = [];
  hasGlasses = [];
  noGlasses = [];
  showingTeeth = [];
  notShowingTeeth = [];
  hasHat = [];
  noHat = [];
  hasFacialHair = [];
  noFacialHair = [];
  hasEarrings = [];
  noEarrings = [];
  findHair('blonde', blondes, nonBlondes);
  findHair('brown', brownHair, nonBrownHair);
  findHair('black', blackHair, nonBlackHair);
  findHair('red', redHair, nonRedHair);
  findHair('white', whiteHair, nonWhiteHair);
  findName('A', startsWithA, notA);
  findName('D', startsWithD, notD);
  findName('E', startsWithE, notE);
  findName('J', startsWithJ, notJ)
  findName('L', startsWithL, notL);
  findName('M', startsWithM, notM);
  findName('S', startsWithS, notS);
  findEyeColor('blue', blueEyes, nonBlueEyes);
  findEyeColor('brown', brownEyes, nonBrownEyes);
  findEyeColor('green', greenEyes, nonGreenEyes);
  findGlasses(true, hasGlasses, noGlasses);
  findSmile(true, showingTeeth, notShowingTeeth);
  findHat(true, hasHat, noHat);
  findBeard(true, hasFacialHair, noFacialHair);
  findEarrings(true, hasEarrings, noEarrings);

if(remainingCharacters.length > 1){
   if(blondes.length === (remainingCharacters.length / 2)){
      return 'Does your character have blonde hair?';
    } else if(brownHair.length === (remainingCharacters.length / 2)){
      return 'Does your character have brown hair? (this includes Olivia)';
    } else if(blackHair.length === (remainingCharacters.length / 2)){
      return 'Does your character have black hair? (this includes Jordan, Amy, and Eric)';
    } else if(redHair.length === (remainingCharacters.length / 2)){
      return 'Does your character have red hair?';
    } else if(whiteHair.length === (remainingCharacters.length / 2)){
      return 'Does your character have white hair? (this includes Joe and Al)';
    } else if(startsWithA.length === (remainingCharacters.length / 2)){
      return 'Does your character\'s name start with \'A\'?';
    } else if(startsWithD.length === (remainingCharacters.length / 2)){
      return 'Does your character\'s name start with \'D\'?';
    } else if(startsWithE.length === (remainingCharacters.length / 2)){
      return 'Does your character\'s name start with \'E\'?';
    } else if(startsWithJ.length === (remainingCharacters.length / 2)){
      return 'Does your character\'s name start with \'J\'?';
    } else if(startsWithL.length === (remainingCharacters.length / 2)){
      return 'Does your character\'s name start with \'L\'?';
    } else if(startsWithM.length === (remainingCharacters.length / 2)){
      return 'Does your character\'s name start with \'M\'?';
    } else if(startsWithS.length === (remainingCharacters.length / 2)){
      return 'Does your character\'s name start with \'S\'?';
    } else if(blueEyes.length === (remainingCharacters.length / 2)){
      return 'Does your character have blue eyes?';
    } else if(brownEyes.length === (remainingCharacters.length / 2)){
      return 'Does your character have brown eyes?'; 
    } else if(greenEyes.length === (remainingCharacters.length / 2)){
      return 'Does your character have green eyes?';
    } else if(hasGlasses.length === (remainingCharacters.length / 2)){
      return 'Does your character have glasses?';
    } else if(showingTeeth.length === (remainingCharacters.length / 2)){
      return 'Does your character\'s smile show his or her teeth?';
    } else if(hasHat.length === (remainingCharacters.length / 2)){
      return 'Is your character wearing a hat?';
    } else if(hasFacialHair.length === (remainingCharacters.length / 2)){
      return 'Does your character have facial hair?';
    } else if(hasEarrings.length === (remainingCharacters.length / 2)){
      return 'Does your character have earrings?';
    } else if(blondes.length >= ((remainingCharacters.length / 2) - 1) && blondes.length <= ((remainingCharacters.length / 2) + 1)){
      return 'Does your character have blonde hair?';
    } else if(brownHair.length >= ((remainingCharacters.length / 2) - 1) && brownHair.length <= ((remainingCharacters.length / 2) + 1)){
      return 'Does your character have brown hair? (this includes Olivia)';
    } else if(blackHair.length >= ((remainingCharacters.length / 2) - 1) && blackHair.length <= ((remainingCharacters.length / 2) + 1)){
      return 'Does your character have black hair? (this includes Jordan, Amy, and Eric)';
    } else if(redHair.length >= ((remainingCharacters.length / 2) - 1) && redHair.length <= ((remainingCharacters.length / 2) + 1)){
      return 'Does your character have red hair?';
    } else if(whiteHair.length >= ((remainingCharacters.length / 2) - 1) && whiteHair.length <= ((remainingCharacters.length / 2) + 1)){
      return 'Does your character have white hair? (this includes Joe and Al)';
    } else if(startsWithA.length >= ((remainingCharacters.length / 2) - 1) && startsWithA.length <= ((remainingCharacters.length / 2) + 1)){
      return 'Does your character\'s name start with \'A\'?';
    } else if(startsWithD.length >= ((remainingCharacters.length / 2) - 1) && startsWithD.length <= ((remainingCharacters.length / 2) + 1)){
      return 'Does your character\'s name start with \'D\'?';
    } else if(startsWithE.length >= ((remainingCharacters.length / 2) - 1) && startsWithE.length <= ((remainingCharacters.length / 2) + 1)){
      return 'Does your character\'s name start with \'E\'?';
    } else if(startsWithJ.length >= ((remainingCharacters.length / 2) - 1) && startsWithJ.length <= ((remainingCharacters.length / 2) + 1)){
      return 'Does your character\'s name start with \'J\'?';
    } else if(startsWithL.length >= ((remainingCharacters.length / 2) - 1) && startsWithL.length <= ((remainingCharacters.length / 2) + 1)){
      return 'Does your character\'s name start with \'L\'?';
    } else if(startsWithM.length >= ((remainingCharacters.length / 2) - 1) && startsWithM.length <= ((remainingCharacters.length / 2) + 1)){
      return 'Does your character\'s name start with \'M\'?';
    } else if(startsWithS.length >= ((remainingCharacters.length / 2) - 1) && startsWithS.length <= ((remainingCharacters.length / 2) + 1)){
      return 'Does your character\'s name start with \'S\'?';
    } else if(blueEyes.length >= ((remainingCharacters.length / 2) - 1) && blueEyes.length <= ((remainingCharacters.length / 2) + 1)){
      return 'Does your character have blue eyes?';
    } else if(brownEyes.length >= ((remainingCharacters.length / 2) - 1) && brownEyes.length <= ((remainingCharacters.length / 2) + 1)){
      return 'Does your character have brown eyes?'; 
    } else if(greenEyes.length >= ((remainingCharacters.length / 2) - 1) && greenEyes.length <= ((remainingCharacters.length / 2) + 1)){
      return 'Does your character have green eyes?';
    } else if(hasGlasses.length >= ((remainingCharacters.length / 2) - 1) && hasGlasses.length <= ((remainingCharacters.length / 2) + 1)){
      return 'Does your character have glasses?';
    } else if(showingTeeth.length >= ((remainingCharacters.length / 2) - 1) && showingTeeth.length <= ((remainingCharacters.length / 2) + 1)){
      return 'Does your character\'s smile show his or her teeth?';
    } else if(hasHat.length >= ((remainingCharacters.length / 2) - 1) && hasHat.length <= ((remainingCharacters.length / 2) + 1)){
      return 'Is your character wearing a hat?';
    } else if(hasFacialHair.length >= ((remainingCharacters.length / 2) - 1) && hasFacialHair.length <= ((remainingCharacters.length / 2) + 1)){
      return 'Does your character have facial hair?';
    } else if(hasEarrings.length >= ((remainingCharacters.length / 2) - 1) && hasEarrings.length <= ((remainingCharacters.length / 2) + 1)){
      return 'Does your character have earrings?';
    } else {
      return 'Error'
    };
  } else {
    return 'Your character must be ${remainingCharacters[0].characterName}'
  }
};

/*The playTurn function looks at the user's response of "yes" or "no" and the question asked and updates the remaining characters
accordingly. It will then prompt the user with the next question. */

const playTurn = (userResponse) => {
if (remainingCharacters.length === 1){
  console.log(askQuestion())
}
else {
if(userResponse === 'yes' && askQuestion() === 'Does your character have blonde hair?'){
    remainingCharacterFunc(blondes);
    console.log(askQuestion());
  } else if (userResponse === 'no' && askQuestion() === 'Does your character have blonde hair?'){
    remainingCharacterFunc(nonBlondes);
    console.log(askQuestion());
  } else if(userResponse === 'yes' && askQuestion() === 'Does your character have brown hair? (this includes Olivia)'){
    remainingCharacterFunc(brownHair);
    console.log(askQuestion());
  } else if (userResponse === 'no' && askQuestion() === 'Does your character have brown hair? (this includes Olivia)'){
    remainingCharacterFunc(nonBrownHair);
    console.log(askQuestion());
  } else if(userResponse === 'yes' && askQuestion() ==='Does your character have black hair? (this includes Jordan, Amy, and Eric)'){
    remainingCharacterFunc(blackHair);
    console.log(askQuestion());
  } else if (userResponse === 'no' && askQuestion() === 'Does your character have black hair? (this includes Jordan, Amy, and Eric)'){
    remainingCharacterFunc(nonBlackHair);
    console.log(askQuestion());
  } else if(userResponse === 'yes' && askQuestion() === 'Does your character have red hair?'){
    remainingCharacterFunc(redHair);
    console.log(askQuestion());
  } else if (userResponse === 'no' && askQuestion() === 'Does your character have red hair?'){
    remainingCharacterFunc(nonRedHair);
    console.log(askQuestion());
  } else if(userResponse === 'yes' && askQuestion() === 'Does your character have white hair? (this includes Joe and Al)'){
    remainingCharacterFunc(whiteHair);
    console.log(askQuestion());
  } else if (userResponse === 'no' && askQuestion() === 'Does your character have white hair? (this includes Joe and Al)'){
    remainingCharacterFunc(nonWhiteHair);
    console.log(askQuestion());
  } else if(userResponse === 'yes' && askQuestion() === 'Does your character\'s name start with \'A\'?'){
    remainingCharacterFunc(startsWithA);
    console.log(askQuestion());
  } else if (userResponse === 'no' && askQuestion() === 'Does your character\'s name start with \'A\'?'){
    remainingCharacterFunc(notA);
    console.log(askQuestion());
  } else if(userResponse === 'yes' && askQuestion() === 'Does your character\'s name start with \'D\'?'){
    remainingCharacterFunc(startsWithD);
    console.log(askQuestion());
  } else if (userResponse === 'no' && askQuestion() === 'Does your character\'s name start with \'D\'?'){
    remainingCharacterFunc(notD);
    console.log(askQuestion());
  } else if(userResponse === 'yes' && askQuestion() === 'Does your character\'s name start with \'E\'?'){
    remainingCharacterFunc(startsWithE);
    console.log(askQuestion());
  } else if (userResponse === 'no' && askQuestion() === 'Does your character\'s name start with \'E\'?'){
    remainingCharacterFunc(notE);
    console.log(askQuestion());
  } else if(userResponse === 'yes' && askQuestion() === 'Does your character\'s name start with \'J\'?'){
    remainingCharacterFunc(startsWithJ);
    console.log(askQuestion());
  } else if (userResponse === 'no' && askQuestion() === 'Does your character\'s name start with \'J\'?'){
    remainingCharacterFunc(notJ);
    console.log(askQuestion());
  } else if(userResponse === 'yes' && askQuestion() === 'Does your character\'s name start with \'L\'?'){
    remainingCharacterFunc(startsWithL);
    console.log(askQuestion());
  } else if (userResponse === 'no' && askQuestion() === 'Does your character\'s name start with \'L\'?'){
    remainingCharacterFunc(notL);
    console.log(askQuestion());
  } else if(userResponse === 'yes' && askQuestion() === 'Does your character\'s name start with \'M\'?'){
    remainingCharacterFunc(startsWithM);
    console.log(askQuestion());
  } else if (userResponse === 'no' && askQuestion() === 'Does your character\'s name start with \'M\'?'){
    remainingCharacterFunc(notM);
    console.log(askQuestion());
  } else if(userResponse === 'yes' && askQuestion() === 'Does your character\'s name start with \'S\'?'){
    remainingCharacterFunc(startsWithS);
    console.log(askQuestion());
  } else if (userResponse === 'no' && askQuestion() === 'Does your character\'s name start with \'S\'?'){
    remainingCharacterFunc(notS);
    console.log(askQuestion());
  } else if(userResponse === 'yes' && askQuestion() === 'Does your character have blue eyes?'){
    remainingCharacterFunc(blueEyes);
    console.log(askQuestion());
  } else if (userResponse === 'no' && askQuestion() === 'Does your character have blue eyes?'){
    remainingCharacterFunc(nonBlueEyes);
    console.log(askQuestion());
  } else if(userResponse === 'yes' && askQuestion() === 'Does your character have brown eyes?'){
    remainingCharacterFunc(brownEyes);
    console.log(askQuestion());
  } else if (userResponse === 'no' && askQuestion() === 'Does your character have brown eyes?'){
    remainingCharacterFunc(nonBrownEyes);
    console.log(askQuestion());
  } else if(userResponse === 'yes' && askQuestion() === 'Does your character have green eyes?'){
    remainingCharacterFunc(greenEyes);
    console.log(askQuestion());
  } else if (userResponse === 'no' && askQuestion() === 'Does your character have green eyes?'){
    remainingCharacterFunc(nonGreenEyes);
    console.log(askQuestion());
  } else if(userResponse === 'yes' && askQuestion() === 'Does your character have glasses?'){
    remainingCharacterFunc(hasGlasses);
    console.log(askQuestion());
  } else if (userResponse === 'no' && askQuestion() === 'Does your character have glasses?'){
    remainingCharacterFunc(noGlasses);
    console.log(askQuestion());
  } else if(userResponse === 'yes' && askQuestion() === 'Does your character\'s smile show his or her teeth?'){
    remainingCharacterFunc(showingTeeth);
    console.log(askQuestion());
  } else if (userResponse === 'no' && askQuestion() === 'Does your character\'s smile show his or her teeth?'){
    remainingCharacterFunc(notShowingTeeth);
    console.log(askQuestion());
  } else if(userResponse === 'yes' && askQuestion() === 'Is your character wearing a hat?'){
    remainingCharacterFunc(hasHat);
    console.log(askQuestion());
  } else if (userResponse === 'no' && askQuestion() === 'Is your character wearing a hat?'){
    remainingCharacterFunc(noHat);
    console.log(askQuestion());
  } else if(userResponse === 'yes' && askQuestion() === 'Does your character have facial hair?'){
    remainingCharacterFunc(hasFacialHair);
    console.log(askQuestion());
  } else if (userResponse === 'no' && askQuestion() === 'Does your character have facial hair?'){
    remainingCharacterFunc(noFacialHair);
    console.log(askQuestion());
  } else if(userResponse === 'yes' && askQuestion() === 'Does your character have earrings?'){
    remainingCharacterFunc(hasEarrings);
    console.log(askQuestion());
  } else if (userResponse === 'no' && askQuestion() === 'Does your character have earrings?'){
    remainingCharacterFunc(noEarrings);
    console.log(askQuestion());
  }
}
};

console.log('Is your character a boy?')

//You will enter your first response below

//userResponse = 'yes';

if(userResponse === 'yes'){
  findSex('male', males, females);
  remainingCharacterFunc(males);
 } else if (userResponse === 'no'){
  findSex('female', females, males);
  remainingCharacterFunc(females);
  };

if(userResponse){
console.log(askQuestion())
};

//All subsequent responses will be passed as an argument in the playTurn function below. These must be manually entered at this time.

//playTurn('yes');
//playTurn('no');
//playTurn('yes');
//playTurn('no');