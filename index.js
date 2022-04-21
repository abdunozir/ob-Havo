// satrni har bir harfiga ko'ra arrayga aylantirish
// function satrFunc(satr) {
//   return satr.split("");
// }

// console.log(satrFunc("salom"));

// tup sonni topish

// function getPrimeNumbersAsArray(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let m = true;
//     console.log(m);
//     for (let j = 2; j <= arr[i]; j++) {
//       if (arr[i] !== j) {
//         if (arr[i] % j == 0) {
//           m = false;
//         }
//       }
//     }
//     if (m) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// console.log(getPrimeNumbersAsArray([123, 5, 3, 11, 13, 7, 9, 6]));
let alfa = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
let arr = "g900 24n26 181223a 23129e 234243h";
function checked(arr) {
  let harflar = "";
  let newarr = [];
  arr = arr.split(" ");
  arr.forEach((el) => {
    el.split("").forEach((item) => {
      if (alfa.includes(item)) {
        harflar += item;
      }
    });
  });
  harflar = harflar.split("").sort();
  harflar.forEach((el) => {
    arr.forEach((l) => {
      if (l.includes(el)) {
        newarr.push(l);
      }
    });
  });
  console.log(newarr);
}

checked(arr);
