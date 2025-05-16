// function countPairs(str) {
//   let count = 0;

//   for (let i = 0; i < str.length - 1; i++) {
//     let first = str[i];
//     let second = str[i + 1];

//     if (!isNaN(first) && !isNaN(second)) {
//       let firstVal = parseInt(first);
//       let secondVal = parseInt(second);
//       if ((firstVal + secondVal) % 2 === 0) {
//         count++;
//       }
//     }
//   }

//   return count;
// }

// console.log(countPairs("a1b2c3d4e5f6"));


function countPairs(str) {
    let count = 0;
  
    for (let i = 0; i < str.length - 1; i++) {
      let first = str[i];
      let second = str[i + 1];
  
      // Check if both are digits
      if (!isNaN(first) && !isNaN(second)) {
        let firstVal = parseInt(first);
        let secondVal = parseInt(second);
        if ((firstVal + secondVal) % 2 === 0) {
          count++;
        }
      }
    }
  
    return count;
  }
  
  console.log(countPairs("486789"));  // Output: 3
  