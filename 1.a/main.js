let name = prompt('Введите ваше имя ');
let age = +prompt("Введите год рождения ");
let year = +prompt('Введите нынешний год');

function info() {
    let result= year - age; 
    return result  
}

alert(`${name}, ваш возраст ${info()} `);
info(year,age)


