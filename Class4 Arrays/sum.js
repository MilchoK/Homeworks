let numbers = [];

for(let i=0;i<5;i++){
    numbers[i]= parseInt(prompt("Enter a number"));
}



function sumOfNumbers(array){
    let sum=0;
for(let i=0;i<5;i++){
    sum=sum+array[i];
}
console.log(sum);
}

sumOfNumbers(numbers);