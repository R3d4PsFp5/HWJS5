let user = {
    
}


for(let i = 1; i <= 10; i++) {
    let name = prompt('Введите ваше имя ');
    let age = +prompt('Введите ваш возраст ');
    
    user['num' + i] = 'Пользователь ' + i;
    user['name' + i] = `Ваше имя ${name}`;
    user['age' + i] = `Ваш возраст ${age}`;
}

for(let key in user) {
    console.log( user[key]);
}