function reverseString(str){
    let reversed = "";
    for(let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// let inputStr = ['hello', '1234565','rotator', 'racecar', 'peep' ]
// 
// console.log(reverseString(inputStr[0]))
// console.log(reverseString(inputStr[1]))
// console.log(reverseString(inputStr[2]))
// console.log(reverseString(inputStr[3]))
// console.log(reverseString(inputStr[4]))
// 

let inputStr = {
    first: "hello",
    secound: "racecar",
    third: "rotator"
   
}

// console.log(reverseString(inputStr.secound));

Object.values(inputStr).forEach(str => console.log(reverseString(str)));
