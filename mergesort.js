function split(wholeArray) {
  if (wholeArray.length === 1){
    return wholeArray;
  }

 let midpoint = Math.floor(wholeArray.length/2);
 let firstHalf = wholeArray.slice(0, midpoint);
 let secondHalf = wholeArray.slice(midpoint, wholeArray.length);

  return [firstHalf, secondHalf];
}

function mergeSort(array) {
const finalArr = [];
let firstCounter = 0;
let secondCounter = 0;
let firstHalf = array[0];
let secondHalf = array[1];


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
// let finalAns = finalArr.concat(firstHalf.slice(firstCounter)).concat(secondHalf.slice(secondCounter));

mergeSort(split(firstHalf));
mergeSort(split(secondHalf));


}

console.log(mergeSort([3, 2, 1, 4, 5]));
