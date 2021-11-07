/*  some things to REMEMBER! 
1- pop() is just the opposite of push() -instead of ADDING to the last spot, it removes
2- shift() is the pendulum fn of pop() - it removes from FIRST instead of last, and returns a new array with that element removed
3- unshift() is the opposite of shift(), and the  endulum oppostite of push() - adding to the FIRST
4- slice() just removes, returns new array w/ that stuff sliced out
5- splice() can remove and add- uses params (position, number, optional element to add)
6- join() concatenates elements into a Strgin
7- split() breaks up string into array
8- sort() sorts elements alphabetically (for a number, you have to use a fn)
9- sort() for number: sort(function(a, b){
                        return a-b
                        });
10- reverse() reverses the sorting
*/


/* Asymptotic analysis
suppress leading constant factors
suppress lower-order terms (these become increasingly irrelevant as your n gets bigger)
    def: result of log2 n is to find the number X so that 2 power X equals n
    
    example1: log2 n 25 equals 5 because 5 to the 2nd power is 25
    example2  log2 n 8 equals 3, since 2 to the 3rd power equals 8.
6n log 2 n   0(nlogn)
*/
function createRandomNumbersArray() {
   var i = 300000;
   tempArray = [];

   while (i--) {
    tempArray.push(Math.round(Math.random() * i))
   } 
console.log('our random array is now'+tempArray);
}
//createRandomNumbersArray();

//showMeRecursion();

function showMeRecursion() {
    var littleArray = [3,8,1,5,2,9];
    var inversions4 = 0;

mergeSort(littleArray);
console.log('inversions4 is now '+inversions);

    function mergeSort(tempArray) {

console.log('array is now '+JSON.stringify(tempArray));
  if (tempArray.length < 2) {
    return tempArray
  }

  var half = Math.floor(tempArray.length / 2);
  var left = mergeSort(tempArray.slice(0, half));
  var right = mergeSort(tempArray.slice(half, tempArray.length));

  return merge(left, right);

}

function merge(left, right) {
  var result = [];
console.log('our left is '+JSON.stringify(left));
console.log('our right is '+JSON.stringify(right));
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
       console.log('left is: '+JSON.stringify(left)+' '+ left[0]+' is smaller than '+JSON.stringify(right) + ' ' + right[0]+', pushing left into result ');
       result.push(left.shift());
       console.log('result is now '+JSON.stringify(result));
    } else {
       console.log('INVERSION! right is: '+JSON.stringify(right)+' '+ right[0]+' is smaller than '+JSON.stringify(left) + ' ' + left[0]+', pushing right into result ');
       result.push(right.shift());
       console.log('result is now '+JSON.stringify(result));
       inversions4 += (left.length - 1);
    }
  }

  while (left.length) {
    result.push(left.shift());
       console.log('still some left items, result is now '+JSON.stringify(result));
   }

  while (right.length) {
    result.push(right.shift());
       console.log('still some right items, result is now '+JSON.stringify(result));
}
console.log('our result is now '+JSON.stringify(result));
  return result;
}
}

var inversions = 0;
var inversions2 = 0;
var inversions3 = 0;
var inversions4 = 0;

function mergeAndCount( left, right ) {
    var list = [], l = 0, r = 0;
    for (i = 0; l < left.length || r < right.length; i++) {
        if (l < left.length && r < right.length) {
            if (left[l] < right[r])
                list.push(left[l++]);
            else {
                list.push(right[r++]);
                // so this is tricky - we don't just add 1!!! you add the amount of the left minus one, as that is how many elements we know that right is inverted to 
              //  console.log('we are adding '+ (left.length - l)+' inversions');

                inversions += (left.length - l);
            }
        }
        else if (l < left.length)
            list.push(left[l++]);
        else if (r < right.length)
            list.push(right[r++]);
    }

    return list
}


function inversionCounter( list ) {
    if (list.length == 1)
        return list;

    var mid = list.length / 2;
    var left  = inversionCounter( list.slice(0, mid) );
    var right = inversionCounter( list.slice(mid, list.length) );
   
    return mergeAndCount( left, right ); 
}

// the above 2 functions were taken from https://github.com/Risto-Stevcev/javascript-inversion-counter/blob/master/inversion-counter.js -
/*
The basic idea is to find a “pivot” item in the array to compare
 all other items against, then shift items such that all of the items 
 before the pivot are less than the pivot value and all the items after 
 the pivot are greater than the pivot value. After that, recursively
  perform the same operation on the items before and after the pivot. 
  There are many different algorithms to achieve a quicksort and this
   post explores just one of them.
   While the value at the left pointer in the array is less than the pivot value, 
   move the left pointer to the right (add 1). Continue until the value 
   at the left pointer is greater than or equal to the pivot value.
   
   */
console.log('lets quickSortMedian this! '+ quickSortMedian([3,6,1,2,96,77,82,13,15,62,43,10,3,4,3,7,2,9,8,7,9,12,14,15]));

function quickSortMedian(arr) {
  
  if (arr.length <= 1) {
    return arr
  }
  var randomNumber = Math.floor(Math.random()* arr.length)
  var medianArray = [
    arr[0],
    arr[Math.floor((arr.length)/2)],
    arr[(arr.length)-1]
  ]

/* here we run a 2 pass bubble sort to find the median number...*/
    var temp;
    if (medianArray[0] > medianArray[1]) {
      temp = medianArray[1]
      medianArray[1] = medianArray[0]
      medianArray[0] = temp
    }
        if (medianArray[1] > medianArray[2]) {
      temp = medianArray[2]
      medianArray[2] = medianArray[1]
      medianArray[1] = temp
    }

/* now we take the median number and grab the actual value of that 
number in our current arr */

    median = medianArray[1]
    median = arr[median]
  var pivotNumber =  arr.splice(median, 1)
  var left = []
  var right = []
  var x = arr.length;

    while (x--) { 

    if (arr[x] <= pivotNumber) {
      left.push(arr[x])
    }
    else {
      right.push(arr[x])
    }
  }
  var leftSorted = quickSort(left)
  var rightSorted = quickSort(right)
  return leftSorted.concat(pivotNumber).concat(rightSorted)
}   
console.log('lets quickSort this! '+ quickSort([3,6,1,2,9,10,3,4,3,7,2,9,8,7,9,12,14,15]));

function quickSort(array) {
// step 1 choose a pivot point, then we'll put stuff in left or right depending on which side of the pivot it falls

  if (array.length <= 1) {
    return array
  }
  var randomNumber = Math.floor(Math.random()* array.length)
  var pivotNumber =  array.splice(randomNumber, 1)

  var left = []
  var right = []
  var x = array.length;

    while (x--) { 

    if (array[x] <= pivotNumber) {
      left.push(array[x])
    }
    else {
      right.push(array[x])
    }
  }
  // this is where the recursion trick trips me up, as left and right are already sorted 
  // by the time they hit new_array - 
  console.log('left is '+left);
  console.log('right is '+right);
  var leftSorted = quickSort(left)
  var rightSorted = quickSort(right)
var new_array = leftSorted.concat(pivotNumber).concat(rightSorted)
console.log('our pivotNum is '+pivotNumber);
console.log('our OLD array is '+array);
console.log('our new array is '+new_array);
  return new_array
}

function quickSort2(arr) {
  if (arr.length <= 1) {
    return arr
  }
  var randomNumber = Math.floor(Math.random()* arr.length)
  var pivotNumber = arr.splice(randomNumber, 1)
  var left = []
  var right = []
  
  for (var x=0;x<arr.length;x++) {
    if (arr[x] <= pivotNumber) {
      left.push(arr[x])
    }
    else {
      right.push(arr[x])
    }
  }
  var leftSorted = quickSort(left)
  var rightSorted = quickSort(right)
  return leftSorted.concat(pivotNumber).concat(rightSorted)
}

/* this one below ranks quite a bit faster than the slowest one in IE - and a little faster in chrome, it's quite a bit different than the others, I got it from
http://www.ollcorrect.com/index.php/2013-12-31-09-01-55/js-fun/javascript-merge-sort-implementation-with-inversion-calculations */
  
console.log('splitMeArray: '+splitMeArray([4,2,7,2,1]));

function splitMeArray(array) {
     var arrayArrays = []
     var i=0;
  // lets say we have an array of 5, [4,2,7,2,1]
// split from this index to this index
  splitMe(0, array.lengthy-1)   // we'll take everything above
  // splitMe 0, 4

  function splitMe(left, right)  {
  // ok let's find the middle point by diving the sum of all our index spots /2 and round down 
    // left is 0, right is 4, middle is 2
    var middle = Math.floor((left+right)/2)
// if 2 is greater than 0, split the left half into 2 and the right half into 2
    if (middle > left) {
// split 0, 2     // left is 0, right is 4, middle is 2
      splitMe(left, middle);
      arrayArrays[i] = [];
      arrayArrays[i].push(left,middle)
      i++   
// split 2+1,4     // left is 0, right is 4, middle is 2
      splitMe(middle + 1, right);
      arrayArrays[i] = [];
      arrayArrays[i].push(middle + 1, right) 
      i++   
    }
  }  // end splitMe
return arrayArrays
}
     var count = 0;
     var perf = 0;
// YET another way to do a merge sort
 function countInverse(array) {

     split(0, array.length - 1);
   //  console.log("Result:" + array);
     //console.log(count);
     //console.log(perf + ' ' + array.length * Math.log(array.length));

     function split(left, right) {
        // console.log('Split ' + left + " " + right)
         var middle = Math.floor((right + left) / 2);

         if (middle > left) {
             split(left, middle);
             split(middle + 1, right);
         }
         merge(left, middle, right)
     }

     function merge(left, middle, right) {
         //console.log("Merge" + left + ',' + middle + ',' + right);
         var leftArr = array.slice(left, middle + 1);
         var rightArr = array.slice(middle + 1, right + 1);
        // console.log(leftArr);
        // console.log(rightArr);
         while (leftArr.length > 0 && rightArr.length > 0) {
             perf++;
             if (leftArr[0] < rightArr[0]) {
                 array[left++] = leftArr.shift();
             } else {
                 count = (count+leftArr.length);
                 array[left++] = rightArr.shift();
             }
         }
         leftArr.concat(rightArr);
         while (leftArr.length > 0) {
             array[left++] = leftArr.shift();
         }
     }
     return count;
 }



function findInversions() {
    var tempArray = [];
   $.get('IntegerArray.txt', function(data){
    // should be 3 inversions
    tempArray =  data.split(/\r\n|\r|\n/) //regex to split on line ending
    console.log('length of data is '+tempArray.length);
    //tempArray = [11,12,4,1,7,2,3,15,9,5,16,8,6,13,10,14] //data;
  // this is the array from the UW algorithms course, 

//    console.log('tempArray is now'+JSON.stringify(tempArray));
//inversionCounter(tempArray);
//console.log('invCount() inv are '+inversions); 

//countInverse(tempArray);
//console.log('count is '+count);
//mergeSort4(tempArray)
//console.log('mergeSort() inv are '+inversions2); 
 //  console.log(mergeSort(tempArray) +'mergeSort() inv are '+inversions2); // 44 invs
     //console.log('inversions are '+inversions+ ' of length '+tempArray.length);
   })

//    var inversions = 0;


function mergeSort4(tempArray) {

  if (tempArray.length < 2) {
    return tempArray
  }

  var half = Math.floor(tempArray.length / 2);
  var left = tempArray.slice(0, half);
  var right = tempArray.slice(half, tempArray.length);

  return merge2(mergeSort4(left), mergeSort4(right));

}

function merge2(left, right)
{
    var result = [];
 
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
 
    while (left.length)
        result.push(left.shift());
 
    while (right.length)
        result.push(right.shift());
 
    return result;
}
 

    function mergeSort(tempArray) {

    if (tempArray.length < 2) {
       return tempArray
    }

    var half = Math.floor(tempArray.length/2);
    var left = tempArray.slice(0, half);
    var right = tempArray.slice(half, tempArray.length);
    
    return merge(mergeSort(left),mergeSort(right));

    }

    function merge(left,right) {
      // ok we need to see if this number is 
        result = [];

        il = 0,
        ir = 0;

        while(il < left.length && ir < right.length) {

       if(parseInt(left[il]) > parseInt(right[ir])) {

       }
            if(parseInt(left[il]) < parseInt(right[ir])) {
                result.push(parseInt(left[il++]));
            } else{
                result.push(parseInt(right[ir++]));
               inversions2 += parseInt((left.length - il));
            }
        }

        while (il < left.length){
            result.push(parseInt(left[il++]));
        }

        while (ir < right.length){
            result.push(parseInt(right[ir++]));
        }
    
    return result
    
    }

}
//findInversions();



function doesArrayContainInteger(a) {
    var array = [9,6,3,4,6,8,9,2,1,8,3,1,6,9,0,1,2,3,4,6,7,8,9,9,6,3,4,6,8,9,2,1,8,3,1,6,9,0,1,2,3,4,6,7,8,99,6,3,4,6,8,9,5,2,1,8,3,1,6,9,0,1,2,3,4,6,7,8,9]
    var compare = 0;
    var i = array.length;

    while (i--)
    {   compare++
        if (array[i] == a) {
        compare++
            return true + ' compares is: ' + compare
        }
    }
    return false
}

// SLOWER...

// function doesSplitArrayContainInteger(a) {
//     var array = [9,6,3,4,6,8,9,2,1,8,3,1,6,9,0,1,2,3,4,6,7,8,9,9,6,3,4,6,8,9,2,1,8,3,1,6,9,0,1,2,3,4,6,7,8,99,6,3,4,6,8,9,5,2,1,8,3,1,6,9,0,1,2,3,4,6,7,8,9]
//     var half = array.length/2

//     var compare = 0;

//     var i = arr1.length;
//     while (i++)
//     { 
//         if (arr1[0] === a) {
//             console.log('1 we got a match!!!!');
//             compare++
//             return true + ' compares is: ' + compare
//         } 
//         if (arr2[0] === a) {
//                    console.log('2 we got a match!!!!');
//             compare++            
//             return true + ' compares is: ' + compare
//         }
//             arr1.shift();
//             arr2.shift();
//             compare+=2
//     }
//     return false
// }

console.log('arrayContainInteger test! '+doesArrayContainInteger(5));
//console.log('arraySplitContainInteger test! '+doesSplitArrayContainInteger(5));

//# 8 Swap Numbers with no temp variable!  Tricky :) from http://www.thatjsdude.com/interview/js1.html#swapTemp

function swapNumbers(a,b) {
    console.log('number swap: our old values are - a:' + a + ' b:' +b);
    // we begin wih a = 2, b = 3

    b = b-a;   // 1  // we temporarily change b's value
    a = a+b;   // 3  // we've now switched a to b's former value
    b = a-b;   // 2  // now we now switch b to a's former value

    console.log('number swap: our new values are - a:' + a + ' b:' +b);
}
swapNumbers(50,84);

// #7 Splitting Strings

function splitMeIntoWords(sentence) {
    words = sentence.split(' ')
    return words
}

var sentence = 'Hey this is a great day! I hope to see you soon.'
console.log('Lets split a sentence now... '+splitMeIntoWords(sentence));

// #6 Splice verus Slice testing

function addElementToIndex(arr) {

    /*  ok so in this splice, the 3 params tell it to do this:
            1- add this to position 1
            2- take ZERO away in its place
            3- element to add 'luis'
    */
    arr.splice(4, 0, 'luis')
    // this this increases our array by a number, and sticks luis in there
    return arr
}

function addElementToBeginning(arr) {

    /*  ok so in this splice, the 3 params tell it to do this:
            1- add this to position 1
            2- take ZERO away in its place
            3- element to add 'luis'
    */
    arr.unshift('luis')
    // this this increases our array by a number, and sticks luis in there
    return arr
}

function addElementInPlaceOf(arr) {

    /*  ok so in this splice, the 3 params tell it to do this:
            1- add this to position 1
            2- take ONE away in its place
            3- element to add 'luis'
    */
    arr.splice(4, 1, 'luis')
    // this this increases our array by a number, and sticks luis in place of arturo
    return arr
}


var arr3 = ['juan', 'diego','joe', 'pedro', 'arturo'];

//console.log('addElementToIndex check: '+addElementToIndex(arr3))
//console.log('addElementToBeginning check: '+addElementToBeginning(arr3))
console.log('addElementInPlaceOf check: '+addElementInPlaceOf(arr3))

//#5 DETERMINE IF THIS IS AN ODD OR EVEN NUMBER

function isEvenOrOdd(number) {
/* the modulus or percentage sign % is used to figure out what the remainder is if you divide the number on the LEFT by the number on the RIGHT of the modulus. I see it used a lot to figure out if something is an even or odd row in a table of elements */

// regular style

    if (number % 2 > 0) {
        return 'this is an odd number'
    }
    else {
        return 'this is an even number'
    }

// try using ternary operator
/*
var statement = number % 2 > 0 ? 'this is an odd number' : 'this is an even number'
return statement
*/
}
console.log('even or odd? '+ isEvenOrOdd(135));

//#4 DETERMINE IF IS PRIME NUMBER (taken from http://stackoverflow.com/questions/17389350/prime-numbers-javascript)

function isPrime(number) {
    var start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }

    return number > 1;
}

// #3 MUTATE ARRAY TO NEW VALUES ALGORITHM (created from scratch)
// this array changes the index values in array a to match those in b
var arr1 = ['joe','pete','ralph','steve','jim','chuck','tim','rob'];
var arr2 = [2,4,5,7,6,0,1,3];

function mutateArray(a,b) {

    var tempArray = new Array(b.length);
    var i = b.length;
// I can get away with a negative while loop here because we aren't doing any splitting
    while(--i) {    
        var element = a[i];
        var newIndex = b[i];
        tempArray[newIndex] = element;
    }
    return tempArray
}

console.log(JSON.stringify(mutateArray(arr1,arr2)));

// #2 SECOND HIGHEST ALGORITHM (created from scratch)

var e = 0; // highest number
var f = 0; // second highest number

function secondHighest(arr) {

    var i = 0;

    while (arr.length>i) {
    	// if (i==1) {
    	// 	e = arr[0];
    	//     f = arr[0];		
    	// }
    	if (arr[i] > e) {
   			f = e;
    		e = arr[i];		
    	}
    	else if (arr[i] < e && arr[i] > f) {
    		f = arr[i];
    	}
    i++
    }
  console.log('the original array is: '+ arr);
  console.log('our 2 highest numbers are ' +e +' and '+f);
  return f

}// end secondHighest()

var newArray = [3,7,5,9,54,62,33,0,23,48,13,99,34,57,9,88,11,20]

//#2 (faster?) SECOND HIGHEST ALGORITHM (created from scratch)

var calls = 0;

function secondHighestSplitting(arr) {
    calls++
    var arrayOfArrays = [];
    var highest = [0,0];
    var t=0
    var i=0;
  /*  4 comparisons for each split, as we are going through the array jumping
   by twos - so comparison total is 4 * (n/2);
/* since we know our length is a power of 2, we split these into arrays of 2 numbers each, adding the higher numbers on the left */

    while (arr.length>i) {

        var num1 = arr[t];
        var num2 = arr[t+1];

        if (num1 > num2) {
            arrayOfArrays.push([num1, num2])
            calls++
        }
        else {
            arrayOfArrays.push([num2, num1])
            calls++
        };

        var num3 = arrayOfArrays[i][0];
        var num4 = arrayOfArrays[i][1];

        if (num3>highest[0]) { 
            highest[0] = num3
            calls++
        }
        else if (num3>highest[1]) { 
            highest[1] = num3
            calls++
        }        
        if (num4>highest[1]) {             
            highest[1] = num4
            calls++
        };
        t+=2
        i++
    }

console.log('our array of Arrays is '+JSON.stringify(arrayOfArrays));
console.log('our highest array is '+JSON.stringify(highest))

  return highest[1]

}// end secondHighest()

console.log(secondHighest(newArray));
//console.log(secondHighestSplitting(newArray));
console.log('calls is '+calls)


//#1 MERGE SORT ALGORITHM - created from online examples

var mergeCount = 0;
var mergeSortCount = 0;
var whileCount = 0;

function mergeSort(arr) {
    mergeSortCount++
    if (arr.length < 2) {
        return arr
    }

  var half = parseInt(arr.length/2);
  var left = arr.slice(0,half);
  var right = arr.slice(half,arr.length);

    return merge(mergeSort(left), mergeSort(right));

}// end mergeSort

function merge(left,right) {

    mergeCount++
    var result = [];


    while (left.length && right.length) {
        whileCount++
        if (left[0]<=right[0]) {
            result.push(left.shift());
        }
        else {
            result.push(right.shift());
        }
    }
    while (left.length) {
        whileCount++

        result.push(left.shift());
    }
    while (right.length) {
        whileCount++

        result.push(right.shift());
    }

    return result

}  // end merge()
console.log('our mergeSort result it '+ mergeSort(newArray)); 

console.log('our final mergeCount is '+ mergeCount); 
console.log('our final mergeSortCount is '+ mergeSortCount); 
console.log('our final whileCount is '+ whileCount); 


console.log('flashSorting! '+flashSort(newArray));

function flashSort(arr) {
    var n = arr.length;
    var i = 0, j = 0, k = 0, t;
    var m = ~~( n * 0.125 );
    var l = [];
    var anmin = arr[ 0 ];
    var nmax = 0;
    var nmove = 0;

    for ( i = 0; i < m; i++ ) {
            l[ i ] = 0;
    }

    for ( i = 1; i < n; ++i ) {
            if ( arr[ i ] < anmin ) anmin = arr[ i ];
            if ( arr[ i ] > arr[ nmax ] ) nmax = i;
    }

    if ( anmin == arr[ nmax ]) return;

    var c1 = ( m - 1 ) / ( arr[ nmax ] - anmin );

    for ( i = 0; i < n; ++i ) {
            k = ~~( c1 * ( arr[ i ] - anmin ) );
            ++l[ k ];
    }

    for ( k = 1; k < m; ++k ) {
            l[ k ] += l[ k - 1 ];
    }

    var hold = arr[ nmax ];
    arr[ nmax ] = arr[ 0 ];
    arr[ 0 ] = hold;

    var flash;
    j = 0;
    k = m - 1;
    i = n - 1;

    while ( nmove < i ) {
            while ( j > ( l[ k ] - 1 ) ) {
                    k = ~~( c1 * ( arr[ ++j ] - anmin ) );
            }
            flash = arr[ j ];

            while ( j != l[ k ] ) {
                    k = ~~( c1 * ( flash - anmin ) );
                    hold = arr[ ( t = l[ k ]-1) ];
                    arr[ t ] = flash;
                    flash = hold;
                    --l[ k ];
                    ++nmove;
            }
    }

    for( j = 1; j < n; ++j ) {
            hold = arr[ j ];
            i = j - 1;
            while( i >= 0 && arr[i] > hold ) {
                    arr[ i + 1 ] = arr[ i-- ];
            }
            arr[ i + 1 ] = hold;
    }
    return arr
}
document.addEventListener("DOMContentLoaded", function() {


var texty =  document.getElementById('main').textContent;
document.getElementById('main').innerHTML = marked(texty);

})
