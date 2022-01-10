let array = [25,86,41,51,65,"Dog",2,12,23,8,];

function sumMaxMin(array){
    let min=array[0];
    let max = array[0];
    for (let num of array) {
        if(isNaN(num)){
            continue;
        }
        else if(min>num){
            min=num;
        }else if(max<num){
            max=num;
        }
    }
    let sum=min+max;
    console.log("MAX: "+max+ "\nMIN: "+min+"\nSUM: "+sum);
}
sumMaxMin(array);