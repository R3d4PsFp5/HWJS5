// function calcSign () {
//     let result = Math.floor(Math.random() * 4 + 1)
//     let sign = '';
//     switch(result) {
//         case 1:
//             sign = '-';
//             break
//             case 2:
//                 sign = '+';
//                 break
//                 case 3:
//                     sign = '*';
//                     break
//                     case 4:
//                         sign = '/';
//                         break
//     }
//     sign *= sign;
//     return sign
// }

// function randNum() {
//     return Math.floor(Math.random() * 21);
// }

// let quantity = +prompt('Укажите количество примеров которое хотите решить');
 
// for(let i = 0;i <= quantity;i++) {
//     let a = randNum();
//     let b = randNum();
//     let sign = calcSign();
//     let example = a + sign + b;
//     let result = +prompt(a + sign  +  b);
//     if(example == result){
//         console.log(`Ваш ответ ${result} верный`);
//     }else {
//         console.log(`Ответ ${result} не верный! Правельный ${example}`);
//     }
// }


let quantity = +prompt('Укажите количество примеров которое хотите решить');

function randNum() {
    return Math.floor(Math.random() * 21);
}


for(let i = 1;i <= quantity;i++) {
    let a = randNum();
    let b = randNum();
    let sing = Math.floor(Math.random() * 4 + 1);
    let primer
    let answer
    switch(sing) {
        case 1:
            primer = a + '-' + b;
            break
            case 2:
                primer = a + '+' + b;
                break
                case 3:
                    primer = a + '*' + b;
                    break
                    case 4:
                        primer = a + '/' + b;
                        break
    }
    switch(sing) {
        case 1:
            answer = a - b;
            break
            case 2:
                answer = a + b;
                break
                case 3:
                    answer = a * b;
                    break
                    case 4:
                        answer = a / b;
                        break
    }
    let userAnswer = +prompt(primer);
    let result = userAnswer == answer ? `Ваш ответ ${userAnswer} верный`: `Ваш ответ не верный - ${userAnswer}. Правельны ответ - ${answer}!`
    alert(result)
}
    



