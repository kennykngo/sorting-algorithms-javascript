// bubbleSort = (array) => {
//   let swapped = false;
//   do {
//     swapped = false;
//     array.forEach((current, i) => {
//       console.log(array.join(" "));
//       if (current > array[i + 1]) {
//         const temp = current;
//         // console.log(array.join(" "));

//         array[i] = array[i + 1];
//         array[i + 1] = temp;
//         swapped = true;
//       }
//     });
//   } while (swapped);
//   console.log(array.join(" "));
//   return array;
// };

// const numbers = [8, 5, 6, 9, 3, 1, 4, 2, 7, 10];
// bubbleSort(numbers);

// using an auxillary variable to hold the value to not overwrite the past value
function swap(arr, firstIndex, secondIndex) {
  var aux = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = aux;
}

function bubbleSort(arr) {
  var length = arr.length,
    i,
    j;

  for (i = length - 1; i >= 0; i--) {
    for (j = 0; j <= i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

function randomTen() {
  let k = 0;
  let array = [];
  while (k < 10) {
    let random = Math.floor(Math.random() * 10);
    array.push(random);
    k++;
  }
  return array;
}

randomTen();
console.log(bubbleSort(randomTen()));
