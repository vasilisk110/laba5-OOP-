let numMass = [1, 15, 32, 4];
let stringMass = ['one', 'q', '', 'black'];
/*ForEach*/
numMass.forEach((item)=>{
    console.log(item);
});

numMass.forEach((item, i, mas)=>{
    mas[i] = item+2;
    console.log(mas[i]);
});

/*filter*/
let newNumMass = numMass.filter((item)=> item>10);
console.log(newNumMass);

let newStringMass = stringMass.filter((item)=>item.length>1);
console.log(newStringMass);

/*Map*/
let numMassMinusOne = numMass.map((item)=>--item);
console.log(numMassMinusOne);
let stringMassLength = stringMass.map((item)=>item.length);
console.log(stringMassLength);

/*every/some*/
let numEveryMass = numMass.every((item)=>item<2); //якщо хоча б один ні то false (and &&)
console.log(numEveryMass);
let numSomeMass = numMass.some((item)=>item>33); //якщо всі ні то false (or ||)
console.log(numSomeMass);

let stringEveryMass = stringMass.every((item)=>item.length>=0);
console.log(stringEveryMass);
let stringSomeMass = stringMass.some((item)=>item.length>4);
console.log(stringSomeMass);

/*reduce/reduceRight*/
let numReduceMass = numMass.reduce((sum,item)=>sum+item);
console.log(numReduceMass);
let numReduceRightMass = numMass.reduceRight((sum,item)=>sum+item);
console.log(numReduceRightMass);
let stringReduceMass = stringMass.reduce(function (sum,item){return sum+item.length},0);
console.log(stringReduceMass);
let stringReduceRightMass = stringMass.reduceRight(function (sum,item){return sum+item.length},0);
console.log(stringReduceRightMass);