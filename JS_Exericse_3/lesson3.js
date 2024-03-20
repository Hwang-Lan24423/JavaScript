//Scopes 
var avar = "something global";
afunc();
function afunc() {
    document.write(avar + "<br/>");
    var ava = "something local";
    document.write(avar + "<br/>");
}

//"This" in function
function global() { document.write(this + "<br/>");}
var o = { "local": function() {document.write(this + this.x + "<br/>");}, "x": 10};
global();
o.local();

// This
var student = {
    name: 'Mai Ha Thi',
    getName: function() {
        console.log(this.name);
        return this.namel
    }
};
var _deStudent = student.getName();

//Scopes, call & apply
var person1 = {name: 'Nhat Minh', age: 12};
//<- Undefined
var person2= {name: 'Huu Trung', age: 32};
//<- Undefined

var sayHello = function(){ alert('Hello, '+this.name);};
var sayGoodbye = function(){ alert('Goodbye, '+this.name);};



sayHello.call(person1);
sayGoodbye.call(person2);
sayHello.apply(person1);
sayGoodbye.apply(person2);

//Scope chain
function step1 () {
    console.log(te);
}

function step2 () {
    te = 2;
    step1();
}
step2();
var te = "Global variables";

//Scopes, bind (ES6)
//Define the original function
var checkNumericRange = function(value){
    if(typeof value !=='number')
        return false;
    else    
        return value >= this.minimum&&value <= this.maximum;
}

//The range object will become the this value in the callback function
var ragne = {minimum: 10, maximum: 20};

//Bind the checkNumerricRange function
var boundCheckNumericRange = checkNumericRange.bind(range);

//Yse the new fucntion to check whether 12 is in the numeric range
var result = boundCheckNumericRange(12);
document.write(result);

//Ouput: true

//Closures scope
var SayBye = function (name) {
    var text = 'Bye, ' + name;
    return () =>{
        console.log(text);
    }
}
SayBye('Me');
var calledMe = sayBye('Me');
calledMe();

//Curry
function add(a,b,c) {
    return a+b+c;
}

console.log(add(1,2,3));
function addCuries(a) {
    return (b) => {
        return (c) => {
            return a + b +c;
        }
    }
}
console.log(addCuries(1)(2)(3));
const ad1 = addCuries(1);
const ad2 = ad1(2);
const ad3 = ad2(4);

console.log(ad3)





//Functional inheritance
class square {
    constructor(width){
        this.width = width;
    }
    getArea() {
        console.log(`Square of this ${this.width + this.width}`);
        return this.width + this.width;
    }
}
class cube extends square {
    constructor(width){
        super(width);
    }
    squareArea = this.getArea();
    getVolume () {
        console.log(`Volume of this ${this.squareArea + this.width}`)
        return this.squareArea + this.width;
    }
}
var myCube = new cube(5);
myCube.getVolume();



//Class Exercise 
class Pet {
    constructor(name, sound){
        this.name = name;
        this.sound = sound;
    }
    Introduce() {
        console.log(`My name is: ${this.name}`);
        return this.name;
    }
    Talk() {
        console.log(`My sound: ${this.sound}`);
        return this.sound;
    }
}
class Dog extends Pet {
    constructor(name, sound, typeofpet){
        super(name,sound);
        this.typeofpet = typeofpet;
    }
    KindOf() {
        console.log(`My type is: ${this.KindOf}`);
        return this.KindOf;
    }
}

var Lion = new Lion('Leo', 'Gru Gru', 'Su Tu');
Dog.Introduce();
Dog.Talk();
Dog.KindOf;

