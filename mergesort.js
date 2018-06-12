function mergeSort(array){
  if (array.length === 1){
    return array;
  }
  let splits = split(array);
  let firstHalf = splits[0];
  let secondHalf = splits[1];
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function split(wholeArray) {

 let midpoint = Math.floor(wholeArray.length / 2);
 let firstHalf = wholeArray.slice(0, midpoint);
 let secondHalf = wholeArray.slice(midpoint, wholeArray.length);

  return [firstHalf, secondHalf];
}

function merge(firstHalf, secondHalf) {
const finalArr = [];

let firstCounter = 0;
let secondCounter = 0;


while (firstCounter < firstHalf.length && secondCounter < secondHalf.length){
  if (firstHalf[firstCounter] < secondHalf[secondCounter]){
    finalArr.push(firstHalf[firstCounter]);
    firstCounter++;
  }
  else {
    finalArr.push(secondHalf[secondCounter]);
    secondCounter++;
  }

}
while (firstCounter < firstHalf.length){
  finalArr.push(firstHalf[firstCounter]);
  firstCounter++;
}
while (secondCounter < secondHalf.length){
  finalArr.push(secondHalf[secondCounter]);
  secondCounter++;
}
return finalArr;
}


let array = [4, 3, 7, 1, 9, 2];

console.log(mergeSort(array));
