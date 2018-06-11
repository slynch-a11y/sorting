function bubbleSort(array) {


let toggle = false;

while (!toggle){

  toggle = true;
  for (let i = 0; i < array.length; ++i){


      if (array[i] > array[i + 1]){
    swap(array, i);

    toggle = false;
    }

  }
}
return array;
}

function swap(j, i){
  if (j[i] > j[i+1]){
    let smallVal = j[i+1];
    let largeVal = j[i];
    j[i] = smallVal;
    j[i+1] = largeVal;
    return j;
  }
}


