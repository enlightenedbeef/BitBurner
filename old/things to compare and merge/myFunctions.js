 /**
  * returns random value from array
  * @param {Array} array_input the array to take values from
  * @return Randomly chosen result
  */
 export function Quirkpicker(array_input) {
    let randNum = Math.random();
    let randScaled = randNum * array_input.length;
    let randIndex = Math.floor(randScaled);
    let randValue = array_input[randIndex];
    return randValue;
  }
  