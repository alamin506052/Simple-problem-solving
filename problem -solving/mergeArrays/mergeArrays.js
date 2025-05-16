// let arry1 = [1,2,1,32];
// let arry2 = [3,2,3,4,5,8];
// let arry3 = [4,5,69,19,87]
// let mergeArry = arry3.concat(arry1,arry2);
// 
// console.log(mergeArry);
// 

// let arry1 = [1, 3, 5, 7, 9];
// let arry2 = [2, 4, 6, 8, 10];
// 
// let mergeArry = [...arry1, ...arry2];
// 
// console.log(mergeArry);


// let arry1 = [1,2,1,32];
// let arry2 = [3,2,3,4,5,8];
// let arry3 = [4,5,69,19,87];
// 
// let mergedArry = [...arry1, ...arry2, ...arry3]
// let mergedArry1 = [...arry1, ...arry2, ...arry3]
// 
// mergedArry.sort((a, b) => b - a);
// mergedArry1.sort((a, b) => a - b);  //ascendin sort
// 
// console.log(mergedArry , mergedArry1);
// 


// let arry1 = [1,2,1,32];
// let arry2 = [3,2,3,4,5,8];
// let arry3 = [4,5,69,19,87];
// 
// let mergeArry = [...arry1, ...arry2 ,...arry3];
// let uniqueArry = [...new Set(mergeArry)];
// 
// ascendingArry = [...uniqueArry].sort((a, b) => a - b );
// descendingArry = [...uniqueArry].sort((a, b) => b - a);

// console.log(ascendingArry ,descendingArry); 
// 

let arry = [1,2,3];

// arry.push(4); //value add in last index.
// arry.unshift(4); // valus add in 1st index.


// splice() দিয়ে any position এ add করা সম্ভব!
// Format: arr.splice(index, 0, value);

// arry.splice(1,0,4); 

// splice() দিয়ে any;position এ delete করা সম্ভব!
// arry.splice(1,1);
arry.shift();
console.log(arry);