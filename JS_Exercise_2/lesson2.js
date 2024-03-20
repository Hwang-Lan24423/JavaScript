var sachs = [
    {
        tacgia:'Harper Lee',
        tieude:'To Kill a Mockingbird',
        namxuatban:2020,
        trangthai:true,
    },
    {
        tacgia:'Ray Bradbury',
        tieude:'Fahrenheit 451',
        namxuatban:2022,
        trangthai:false,
    }
]
for (const key in sachs) {
    console.log(sachs[key]);
}


//bai 1
let arr = [100,5,15,25];
// while (true) {
//     let input = prompt("Nhập vào một số:");
//     if (input === null || input === "") {
//         break; 
//     }
// }

const timMinMax = (arr) => {
    let max_arr = Math.max(...arr);
    let min_arr = Math.min(...arr);
    return {max: max_arr, min: min_arr};
}

let result = timMinMax(arr);
console.log(`Số lớn nhất là ${result.max}, số nhỏ nhất là ${result.min}`)



// bai 2
const findLongestWord = function() {
    let sentence = prompt("Nhap vao day:").split(" ");
    let longestWord = "";

    for (const word of sentence) {
        if (longestWord.length < word.length) {
            longestWord = word;
        }
    }
    
    return longestWord;
}


function sumAll() {
    var sum = 0;
    for(var num of arguments){
        sum += num;
    }
    return sum;
}

document.write(sumAll(1) + "<br/>");
document.write(sumAll(2,3,5) + "<br/>");


function printArgs(a,b,c) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}

printArgs(1,2,3);


var person = {name: 'Hoang Lan'};


var sayHello = function(){ alert('Hello ' + this.name);};


var sayGoodbye = function(){ alert('Goodbye ' + this.name);};


sayGoodbye.call(person);
sayGoodbye.apply(person);
sayHello.call(person);
sayHello.apply(person);