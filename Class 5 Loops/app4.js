let first = ["Michael", "Tony", "Thomas", "Grace", "Harvey"];
let last = ["Jordan", "Jones", "Shelby", "Gray", "Specter"];

function fullName(array1, array2) {
  let firstLast = [];
  let counter = 1;
  for (let i = 0; i < first.length; i++) {
    firstLast.push(`${counter}. ${array1[i]} ${array2[i]}`);
    counter++;
  }
  for(let i=0;i<firstLast.length;i++){
    console.log(firstLast[i]);
  }
}

fullName(first, last);
