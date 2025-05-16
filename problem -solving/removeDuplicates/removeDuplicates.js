// function removeDuplicates(names){
//     let uniqueNames = [];

//     for(let i = 0; i <names.length; i++){
//         if(!uniqueNames.includes(names[i])){
//             uniqueNames.push(names[i]);
//         }
//     }

//     return uniqueNames;
// }

// const studets =
// [  "Alamin", "Sadia", "Nayeem", "Tania", "Rifat", "Alamin" ];

// console.log(removeDuplicates(studets));

function removeDuplicates(names, additionalNames = []) {
  const allName = [...names, ...additionalNames];
  return [...new Set(allName)];
}
const newName = ["Sumaiya", "Rubel", "Rony", "Alamin"];
const students = ["Alamin", "Sadia", "Nayeem", "Tania", "Rifat", "Alamin"];
newName.splice(1,1)
console.log(removeDuplicates(students ,newName));
