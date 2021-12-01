/* let primer = '25px';
primer = '50px';
primer = Number.parseInt(primer);
console.log('Цена за шт', primer) */



/* let primer2 = '45.5px';
primer2='34.2px'
primer2 = Number.parseFloat(primer2);
console.log('цена за 2 шт:', primer2) */

/* Метод toFixed */

/* let simbol = 1489.44443;
simbol = Number(simbol.toFixed(3));
console.log(simbol); */


/* Math.random() * (max - min) + min */

/* const max = 120;
const min = 20;
const result = Math.round(Math.random() * (max - min) + min);
console.log(result); */

/* let adressa = 'GorTTTkiWWWWWWWWWWWy';
console.log(adressa.slice(6).toLowerCase());
adressa = adressa[0] + adressa.slice(1).toLowerCase();
console.log(adressa); */
/* console.log(adressa.slice(1)toLowerCase())

 */

/* const language = 55445;
let mesagge = '';
switch (language) {
    case 1:
        mesagge = 'Английский Язык'
        break;
        case 2:
            mesagge = ' Язык'
        break;
        case 3:
            mesagge = 'Английский '
        break;
        case 4:
            mesagge = 'Руский Язык'
        break;
    default:
        mesagge = 'Курите кеды';
}
console.log(mesagge); */

/* for (let i = 0; i<110; i += 10){
    console.log(i);
}
 */

/* let totalSpent = 5000;
let payment = 500;  
let discont = 0;

if  (totalSpent < 100) {
    console.log('Не партнер 0%');
    discont = 0;
}

else if (totalSpent >= 100 && totalSpent < 1000) {
    console.log('Партнерская скидка 2%');
    discont = 0.02;
}
else if (totalSpent >=1000 && totalSpent < 5000) {
    console.log('партнерская скидка 5%');
    discont = 0.05;
}
else {
    console.log('партнерская скидка 10%');
    discont = 0.1;
}
payment -=payment * discont; 
console.log(`Заказ ${payment} Скидка ${discont * 100}%`);
totalSpent += payment;
console.log(`Потрачено всего в магазине ${totalSpent}`);
 */


/* const nambers = [54, 12, 435, 86, 6, 3, 98,2];
let smallNamber = nambers [0];
for (const namber of nambers) {
    if (namber < smallNamber) {
        smallNamber = namber;
    }
}
console.log( 'Самое маленькое число', smallNamber)
 */


                       /* АНАЛОГИЧНО */


/* const nambers = [54, 12, 435, 86, 6, 3, 98,2];
let bigNamber = nambers [0];
for (const namber of nambers) {
    if (namber > bigNamber) {
        bigNamber = namber;
    }
}
console.log( 'Самое большое число', bigNamber) */




