const LinkedList = require('./LL');

//Question One
//A: The first pair was created e.g. ([ 21, 1 ])
//B: [ 1, 2, 9, 21, 26, 28, 29, 45, 16, 49, 39, 27, 43, 34, 46, 40 ]
//C:[ 1, 21, 26, 45 ]
//D:[ 1, 2, 9, 21, 26, 28, 29, 45 ] AND [ 16, 27, 34, 39, 40, 43, 46, 49 ]


//QUESTION Two
    //PART ONE:
    // The pivot could have been 17, but could not have been 14
    //False, everything to the left of 14 is lesser and everything to its right is larger
    // The pivot could have been either 14 or 17
    //True, the pivot can be any number in a  list, and in this case both follow the above rule
    // Neither 14 nor 17 could have been the pivot
    //False, refer above.
    // The pivot could have been 14, but could not have been 17
    //False, everything to the left of 17 is less and to the right is larger

    //PART TWO: 
    //   1: 10, 3, 13, 15, 19, 14, 17, 16, 9, 12
    //   2: 13, 10, 14, 15, 19, 17, 3, 16, 9, 12

//Question Three:

function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

function qSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    array = qSort(array, start, middle);
    array = qSort(array, middle + 1, end);
    return array;
};

function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end - 1, j);
    return j++;
};

const sortArray=[89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7,46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];


//Question Four:
function mSort(array) {
    if (array.length <= 1) {
        return array;
    }
    console.log(array)
    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mSort(left);
    right = mSort(right);
    return merge(left, right, array);
};

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    console.log(array)
    return array;
};


//Question Five:

function display(list) {
    while (list.head !== null) {
      console.log(list.head.value);
      list.head = list.head.next;
    }
  }

    const LL = new LinkedList();
    sortArray.forEach(element => {
        LL.insertLast(element)
    });
    display(LL)

function mSortLL(ll) {
    if (ll.size <= 1) {
        return ll;
    }
    
    const middle = middle(ll);
    let left = findPrevious(ll.findPrevious(middle));
    let right = array.slice(middle, array.length);

    left = mSort(left);
    right = mSort(right);
    return merge(left, right, array);
};

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    console.log(array)
    return array;
};

function middle(list) {
    let end = list.head;
    let middle = list.head;

    while (end.next !== null && end.next.next !== null) {
      end = end.next.next;
      middle = middle.next;
    }
    return middle.value;
  }
  function findPrevious(node, list) {
  
  
    let currNode = list.head;
    if (!list.head) {
      return null;
    }

    while (currNode.next.value !== node) {
      if (currNode.next === null) {
        return null;

      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  // console.log(findPrevious('Starbucks', SLL));

  function findLast(list) {
    let currNode = list.head;
    if (!list.head) {
      return null;
    }

    while (currNode.next !== null) {
      currNode = currNode.next;
    }
    return currNode;
  }

  function bucketSort(arr, min, max) {
    const buckets = Array(max - min + 1).fill(0); 
    let bucket; 
    for (let i = 0; i < arr.length; i++) {
      bucket = arr[i] - min; 
      buckets[bucket] += 1; 
    }
    const result = [];
    for (let i = 0; i < buckets.length; i++) { 
      let total = buckets[i]; 
      let num = i + min; 
      for (let j = 0; j < total; j++) {
        result.push(num); 
      }
    }
    return result;
  }

  function randomArray(arr) {
    let i = 0
    while (i < arr.length) {
        let index = Math.floor(Math.random() * Math.floor(arr.length))
        swap(arr, arr[i], arr[index])
        i++
    }
  
    return arr
  }

  //8. Use quick sort to sort books by alphabetical
  
main();