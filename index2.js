/*демонструвати та пояснювати роботу конструктора та створення об'єкта*/
/*демонструвати та пояснювати роль this */
let Animal = function (name){
    this.name = name;
    console.log("Create new animal");}
let dog = new Animal("Ceeb");
console.log(dog.name);
//Obj.func()
Animal.prototype.SayName = function (){console.log("This animal`s name - " + this.name);}
dog.SayName();
/*реалізувати наслідування (прототипне та ES6)*/
/*реалізувати поліморфізм (перевизначення методів)*/
function Cat(name, say){
    Animal.call(this, name);
    this.say = say;``
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.SayName = function (){console.log('This cat`s name - ' + this.name);}
Cat.prototype.Say = function (){console.log(this.say);}
let cat1 = new Cat("Vasya","Myau");
cat1.SayName();
cat1.Say();
class Hipo extends Animal{
constructor(name, say) {
    super(name);
    this.say = say;
    console.log("New  Hipo")
}
}
let hipo = new Hipo("Hip", "something");
hipo.SayName();

/*приватні, публічні члени (властивості та методи) - у стилі замикань та в ES6*/
//Cat.prototype._age = 6;
function Dog(name, say){
    Animal.call(this, name);
    this.say = say;
    let self = this;
    let run = "Running to tail";
    this.runUpTail = function (){
        console.log(run);
    }
}
let dog1 = new Dog("Chaki","bark");
Dog.prototype.SayName = function(){console.log('This dog`s name - ' + this.name);}
dog1.runUpTail();

class Croco extends Animal{
    constructor(name, say, age) {
        super(name);
        this.say = say;
        let privateage = age;
        this.setAge = function (age) {
        privateage = age;}
        this.getAge = ()=>privateage;
    }
}
let crok = new Croco("Krok","rar",13);
console.log(crok.getAge())