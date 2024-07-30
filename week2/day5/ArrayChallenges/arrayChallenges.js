// //Always Hungry
// function alwaysHungry(arr) {
//      var i=0;
//     while(i<arr.length && arr[i]!="food"){
//      i++;
//     }
//     if(i<arr.length){console.log("yammy")}
//     else {console.log("I'm hangry")}
// }

// alwaysHungry([3.14, "food", "pie", true, "food"]);
// // this should console log "yummy", "yummy"
// alwaysHungry([4, 1, 5, 7, 2]);
// // this should console log "I'm hungry"



// 
// function highPass(arr, index) {

//      if ((index >= 0) && (index < arr.length))
//       {var filteredArr = [];
//           for (var i = 0; i < arr.length; i++) {
//                if (arr[i] != arr[index]) { filteredArr.push(arr[i]); }
//           }
//       return [filteredArr,arr[index]];
//      }
//      else return [null,arr];


// }
// var result = highPass([6, 8, 3, 10, -2, 5, 9], -3);
// console.log(result); // we expect back [6, 8, 10, 9]
//
// ***********move the minimum to the front in place*************//
// function minValueFirst(arr) {
//      var min = arr[0];
//      var newarry = [];
//      var indMin =0;
//      for (var i = 1; i < arr.length; i++) {
//           if (arr[i] < min) {
//                min = arr[i];
//                indMin = i;
//           }
//      }
//      newarry.push(arr[indMin]);
//      for (var j = 0; j < arr.length; j++) {
//           if (j != indMin) {
//                newarry.push(arr[j]);
//           }
//      }
//      return newarry;
// }
// var arr1=[6,4,5,1,3,2];
// console.log(minValueFirst(arr1));
// var arr2=[1,5,2,9];
// console.log(minValueFirst(arr2));
// var arr3=[5,1,0,2,3,0];
// console.log(minValueFirst(arr3));

// ***********High Pass Filter*************//

// function highPass(arr, cutoff) {
//      var filteredArr = [];
//      for (var i = 0; i < arr.length; i++) {
//           if (arr[i] > cutoff) { filteredArr.push(arr[i]); }
//      }
//      return filteredArr;
// }
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // we expect back [6, 8, 10, 9]

// ***********Better than average*************//
// function betterThanAverage(arr) {
//      var sum = 0;
//      for(var i=0;i<arr.length;i++){sum+=arr[i]}
//      var avrg=sum/arr.length;
//      var count = 0
//      // count how many values are greated than the average
//      for(var i=0;i<arr.length;i++){if(arr[i]>avrg){count++}}
//      return count;
//  }
//  var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
//  console.log(result); // we expect back 4
 
// ***********Array Reverse*************//

// function reverse(arr) {
//      // your code here
//      var temp;
//      for(i=0;i<arr.length/2;i++)
//      {
//           temp=arr[i];
//           arr[i]=arr[arr.length-i-1];
//           arr[arr.length-i-1]=temp;
//      }
//      return arr;
//  }
    
//  var result = reverse(["a", "b", "c", "d", "e"]);
//  console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// ************Fibonacci Array************//

function fibonacciArray(n) {
     // the [0, 1] are the starting values of the array to calculate the rest from
     var fibArr = [0, 1];
     // your code here
     var i=2;
     while(i<n)
     {fibArr[i]=fibArr[i-1]+fibArr[i-2];
    i++;}
     return fibArr;
 }
    
 var result = fibonacciArray(10);
 console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
 
