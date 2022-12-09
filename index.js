// Code your solution in this file!

const blocksFromHq = 42;
let num1;
let num2;
let amountPayable;

//THE DISTANCE IN BLOCKS.
function distanceFromHqInBlocks (valueInBlocks) {
    num1= Math.abs(valueInBlocks - blocksFromHq);
        return num1;
}
distanceFromHqInBlocks(43);
console.log(num1);

//THE DISTANCE IN FEET.
function distanceFromHqInFeet(valueInBlocks) {
    distanceFromHqInBlocks(valueInBlocks)
    num2 = num1*264;
    return num2;
}
distanceFromHqInFeet(50);
console.log(num2);

//CALCULATE DISTANCE TRAVELLED IN FEET.
function distanceTaveledInFeet(start, destination) {
    let num3 = Math.abs (destination-start)* 264;
    console.log(num3);
    return num3;
}
distanceTaveledInFeet(42, 45);

//CALCULATE FARE PRICES.
function calculatesFarePrice(start, destination)
 {let num4= Math.abs(((destination - start)*264));
    if (num4 <= 400) {
        return 0;
      } else 
            if (num4 > 400 && num4 < 2000) {
         amountPayable = ((num4 - 400) * 0.02);
        return amountPayable;
      } 
      else 
            if(num4>=2000 && num4<2500){
        return 25;
      }
      else 
            if (num4 > 2500) {
        return 'cannot travel that far';
      }
    }
    calculatesFarePrice(44, 47);
    console.log(amountPayable);