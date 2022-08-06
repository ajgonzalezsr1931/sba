class Person {
    constructor(fName, lName, age){
        this.fName= fName;
        this.lName= lName;
        this.age= age;
    }
}

const button = document.getElementById('submit');

button.addEventListener('click', submitResult);
function submitResult() {
    const fName = document.getElementById('firstName').value;
    const lName = document.getElementById('lastName').value;
    const age = document.getElementById('userAge').value;

    const newPerson = new Person(fName, lName, age);
    console.log(newPerson);
    document.getElementById('result').innerHTML= `Hello ${newPerson.fName} ${newPerson.lName}. Age is nothing but a number, but your age is ${newPerson.age} years old.`;
}