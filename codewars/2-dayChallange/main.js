//   }

// function dulicate(n) {
//   //   console.log(n.split(""));
//   //   //   console.log(arr);
//   let arr = [];
//   n = n.split("");
//   for (i = 0; i < n.length; i++) {
//     for (j = 1; j < n.length; j++) {
//       if (n[i] == n[j + i]) {
//         arr.push(n[j + i]);
//       }else
//     }

//   return arr;
//   //   return n;
//   //   console.log(n);
// }
// console.log(dulicate("assalomu alaykum"));

// let array = [6, 9, 15, 6, 13, 9, 11, 15];
// let index = 0,
//   newArr = [];
// const length = array.length; // to get length of array
// function findDuplicates(arr) {
//   for (let i = 0; i < length - 1; i++) {
//     for (let j = i + 1; j < length; j++) {
//       if (arr[i] === arr[j]) {
//         newArr[index] = arr[i];
//         index++;
//       }
//     }
//   }
//   return newArr;
// }
// console.log(findDuplicates("assalomu alaykum"));
// let a = "assalomualaykum";
// a = a.split("").sort();
// console.log(a);
// const uniqueArray = a.filter(function (item, pos) {
//   return a.indexOf(item) == pos;
// });
// console.log(uniqueArray);
// const counts = {};
// let str = "salomlar";
// str = str.split("");
// str.forEach(function (x) {
//   //   console.log(counts[x]);
//   counts[x] = (counts[x] || 0) + 1;
// });
/////////////////////////////////duplicate function//////////////////////// simple solution
const sampleArray = "assalomu alaykum";
function duplicateCount(text) {
  text = text.split("");
  let map = text.reduce(function (prev, cur) {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
  }, {});
  let arr = Object.entries(map);
  console.log(arr.map((v) => (v[1] > 1 ? `${v[0]}:${v[1]}` : false)));

  console.log(arr);
  //
  return map;
}
// function key(n) {}
// // console.log(Object.entries(counts));

console.log(duplicateCount(sampleArray));

// // function(currentValue, index, arr), thisValue

////////////////////2- REVERSE FUNCTION///////////////
// console.log(arr);
//   //   return arr;
//   let res;
//   //   for () {
//   //     // res +=
//   //     //   arr[v].length > 5 ? arr[v].split("").reverse().join("") : arr[v] + " ";
//   //     // console.log(arr[v].split("").reverse().join(""));
//   //     console.log(v);
//   //   }
// function spinWords(string) {
//   let arr = string.split(" ");
//   //
//   arr = arr.map((v) => {
//     return v.length >= 5 ? v.split("").reverse().join("") : v;
//   });

//   return arr.join(" ");
// }
// console.log(spinWords("hisds i am Jamshid"));
//ishladi /////////////////////////////////////////
