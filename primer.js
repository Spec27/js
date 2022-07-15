'use strict'; /* {const positions = ['june', 'middle', 'signer', 'teamLead'];
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

/* for (let i = 0; i<110; i += 5){
    console.log(i);
} */

/* 
let totalSpent = 5000;
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

/* const work = function (r, d) {
    return r * d;
}
const r1 = work(30, 13);
console.log("Результат роботы функции :", r1) */

/* const logins = ['sergey', 'andrey', 'anton', 'vasiliy', 'evgeniy'];


const findLogin = function (allLogin, loginToFined) {
    
    for (const login of allLogin) {
        
        if (login === loginToFined) {

        return  `пользователь  ${loginToFined} обнаружен`;
        }    
    }
    return `пользователь  ${loginToFined} не найден`;
}

const r1 = findLogin(logins, 'anton');
console.log(r1);
const r2 = findLogin(logins, 'ggg');
console.log(r2);
const r3 = findLogin(logins, 'vasiliy');
console.log(r3);
const r4 = findLogin(logins, 'sergey');
console.log(r4);
const r5 = findLogin(logins, 'ggg');
console.log(r5); */

/* 
const sms = function (rezult) {
    return rezult.toLowerCase().join('-');
}
console.log(sms('Делаем всю строку в нижнем регистре через тире')) */

// Перебераем сумму  не обявленных аргументов в новом масиве
/* 
const add = function (...args) {
    let total = 0;
    for (const arg of args) {
        total += arg;
    }
    return total;
}
console.log(add(1, 2, 2, 4, 4, 5,));
console.log(add(1, 3, 10, 4, 8, 7, 7)); */

// Задание
/* Напиши функцию filterArray(numbers, value),
 которая принимает массив чисел (параметр numbers) и возвращает новый массив,
  в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число). */

/* const filterArray = function (numbers, value)
{
    // Change code below this line
    let array = [];
    for (number of numbers) {
        
        if (number > value) {
            array.push(number) 
       }
}
    return array;
 
   // Change code above this line
}
console.log(filterArray([1, 2, 3, 4, 5], 3));

console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));
 */

/* const fruct = ['aple', 'mango', 'banana', 'ananas'];
const indexElement = fruct.length - 1;

for (let i = 0; i <=indexElement; i += 1){
    fruct[i] += " вкусный фрукт";  
}
console.table(fruct) */

/* // найти в массыве суму всех четных чисел
const namber = [1, 4, 6, 7, 9, 3, 2, 6, 5, 33, 35, 77, 44, 22, 88, 99, 2];
//  1 - Создать переменную в которую сплюсую все четные числа
let allNamber = 0;
//  2 - перебрать масив
for (let i = 0; i < namber.length; i += 1){
    if (namber[i] % 2 === 0) {
        console.log(namber[i])
        // 3 Сплюсовать сууму всех четных чисел
        allNamber += namber[i];
        
    } 
}console.log('Сума всех четных чисел равна :', allNamber) 

 */

//  Вариант 2

/* const namber = [1, 4, 6, 7, 9, 3, 2, 6, 5, 33, 35, 77, 44, 22, 88, 99, 2];
let allNamber = 0;
for (const nambers of namber) {
    if (nambers % 2 !== 0) {
        console.log(nambers)
        // 3 Сплюсовать сууму всех  не четных чисел 
        allNamber += nambers;
    }
}
console.log('Сума всех не четных чисел равна :', allNamber) */

// Обработать массив,развернуть массив,вырезать foo, перевести его в строку разделенную пробелами.

/* const arr = ['BEST', 'the', 'foo', 'is', 'JS'];
const nevArr1 = arr.slice(0,2);
const nevArr2 = arr.slice(3);
const nevArr3 = nevArr1.concat( nevArr2).join(' ');
console.log(nevArr3)
 */

// ---------------ОБЬЕКТЫ------------

/* const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    rating: 8.38,
    specil: 'bookmaker',
  };
  
  for (const key in book) {
    // Ключ
    console.log(key);
    // Значение свойства с таким ключом
    console.log(book[key]);
} */

/* const playlist = {
    name: 'my pleylist',
    rating: 8.5,
    track: ['track-1', 'track-2', 'track-3'],
    
    chengeName( newName ) {
        console.log(playlist);
        this.name = newName
    },
    chengeRating(newRating) {
        this.rating=newRating

    },
    addNewTreck(track) {
        this.track.push(track);
        this.trackCount = this.track.length;
    },
    trackCount() {
        return this.track.length;
    }

};
playlist.chengeName("Новый Плеилист");
playlist.chengeRating(10);
playlist.addNewTreck('track-4');
playlist.addNewTreck('track-5');
console.log(playlist.trackCount()) */

/* const friends = [
    { name: "Sergey" , online: false },
    { name: "Andrey" , online: true},
    { name: "Ruslan" , online: false},
    { name: "Evgenii", online: true },
    {name: "Spec27" , online: false}
];
 */
// ******** Задача 1***************
//  Зделать строку с  трех первых имен разделенных пробелом  с свойства ключа Name
/* const getAllFriends = function (allFriends) {
    
    const names = [];
    for (const friend of allFriends) {
        names.push(friend.name);
    
    }
    return names;
}
console.log(getAllFriends(friends).splice(0,3).join('-'))
 */

// ***********Задача 2***************
// Найти в масиве с обектами Имена которыйе Онлайн , значение функции взято с переменной с масивом.
/* const getOnlineAllFriends = function (allFriends) {
    
    const onlineFriends = [];
    for (const friend of allFriends) {
        console.log(friend)
      console.log(friend.online)  
        if (friend.online) {
            onlineFriends.push(friend)
       }  
    }
    return onlineFriends;
}
console.log(getOnlineAllFriends(friends)) */

// ********** Задача 3 ****************
//  Найти в масиве с обектами Имена которыйе Офлайн , значение функции взято с переменной с масивом.
/* const getOflineAllFriends = function (allFriends) {
    const oflineFriends = [];
    for (const friend of allFriends) {
        console.log(friend.online)
        if (!friend.online) {
            oflineFriends.push(friend) 
        }
    }
    return oflineFriends;
}
console.log(getOflineAllFriends(friends)) */

// ********Задача 4 ****************
//  Обеденить друзей которые онлайн в  масив онлайн . Друзей которые не онлайн в масив Офлай
/* const splitFriendsByStatus = function (allFriends) {
    const friendsByStatus = {
        online:  [],
        ofline:  [],
    };
    
    for (const friend of allFriends) {
        if (friend.online) {
            friendsByStatus.online.push(friend);
            continue;
        }
        friendsByStatus.ofline.push(friend);
    }
    return friendsByStatus;
}
console.log(splitFriendsByStatus(friends))




const x = {
a:12,
    b: 23,
    e: 33,
    c: 45,
}
console.log(Object.keys(x));
console.log(Object.values(x)); */

/* const user = {
    name: "Jacques Gluke",
    tag: "jgluke",
    stats: {
      followers: 5603,
      views: 4827,
        likes: 1308,
        options: {
            color: 'red',
            bacgraund: 'till',
      }
    },
  };
  
  const {
    name,
    tag,
      stats: { followers, views: userViews, likes: userLikes = 0,
        options: {color: userColor ,bacgraund: userBacgraund,}
      },
  } = user;
  
  console.log(name); // Jacques Gluke
  console.log(tag); // jgluke
  console.log(followers); // 5603
  console.log(userViews); // 4827
console.log(userLikes); // 1308
console.log(userColor);
console.log(userBacgraund); */

// *****************Задача***************
// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат,
// где имя свойства это имя сотрудника, а значение свойства это зарплата.
// Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её.
// Используй переменную totalSalary для хранения общей суммы зарплаты.

/* function countTotalSalary(salaries) {
    let totalSalary = 0;
    // Change code below this line
    const name = Object.values(salaries)
    for (const value of name) {
        totalSalary+=value
  
        console.log(totalSalary)
    }
    // Change code above this line
    return totalSalary;
}
countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) */

// ************Задача****************
// Перебери массив объектов colors используя цикл for...of.
// Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.
/* 
const colors = [
    { hex: "#f44336", rgb: "244,67,54" },
    { hex: "#2196f3", rgb: "33,150,243" },
    { hex: "#4caf50", rgb: "76,175,80" },
    { hex: "#ffeb3b", rgb: "255,235,59" },
  ];
  
  const hexColors = [];
  const rgbColors = [];
  // Change code below this line
  for (const color of colors){
      hexColors.push(color.hex);
      rgbColors.push(color.rgb);
}
  console.log(hexColors,rgbColors) */

//   **********Задача************
// Напиши функцию getProductPrice(productName)
//  которая принимает один параметр productName - название продукта.
// Функция ищет объект продукта с таким именем(свойство name) в массиве products и возвращает его цену(свойство price).
// Если продукт с таким названием не найден, функция должна возвращать null.
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

// function getProductPrice(productName) {

//       for (const product of  products) {

//           if (product.name===productName) {
//               return product.price;
//           }
//       }
//     return null
//   }
// console.log(getProductPrice("Radar"))
// console.log(getProductPrice("Grip"))
// console.log(getProductPrice("Scanner"))
// console.log(getProductPrice("Droid"))
// console.log(getProductPrice("Engine"))

// ************Задача************
// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства.
// Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products.
// Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.
/* const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  
function getAllPropValues(propName) {
    const allMeanings = [];
    // Change code below this line 
  for(const product of products){
          
      
      
    }
    return allMeanings
  }
  console.log(getAllPropValues("name")) */

/* const highTemperatures = {
    yesterday: 28;
    */

/* {const defaultSettings = {
    theme: "light",
    public: true,
    withPassword: false,
    minNumberOfQuestions: 10,
    timePerQuestion: 60,
  };
  const overrideSettings = {
    public: false,
    withPassword: true,
    timePerQuestion: 30,
  };
  // Change code below this line
const finalSettings = { ...defaultSettings, ...overrideSettings };
  console.log(finalSettings)} */

//   **********Задача************
// Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.

// Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data.
// В новом объекте должно быть свойство completed, значение которого хранится в одноимённой локальной переменной.
// В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут отсутствовать.
// Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения по умолчанию,
// хранящиеся в одноимённых локальных переменных.

/* function makeTask(data) {
    const completed = false;
    const category = "General";
    const priority = "Normal";
    // Change code below this line
    const newData = { completed, category, priority, ...data };
    return newData;
    // Change code above this line
}

  console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" })) */

// Change code below this line

/* function add(...args) {
    let total = 0;
    for (const arg of args) {
        total += arg
        
}
return total
    // Change code above this line
    
  }
  
console.log(add(74, 11, 62, 46, 12, 36))   */

// **************Задача*********************
// Функция findMatches() принимает произвольное количество аргументов.
//  Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.
// Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы,
//  начиная со второго, которые есть в массиве первого аргумента.
// Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], потому что только они есть в массиве первого аргумента.

/* function findMatches( arrayOfNumbers,... theNumbers) {
    const matches = []; // Don't change this line
    for (const theNumber of arrayOfNumbers) {
        if (theNumbers.includes(theNumber)) {
            matches.push(theNumber)
      }
  }
    // Change code above this line
    return matches;
  }
console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7))   */

// *************Задача**************************
// Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто строки по аналогии с getBooks() и addBook(bookName).
// Метод removeBook(bookName) будет удалять книгу по имени. Возвращает строку "Deleting book <имя книги>", где <имя книги> это значение параметра bookName.
// Метод updateBook(oldName, newName) будет обновлять название книги на новое.
// Возвращает строку "Updating book <старое имя> to <новое имя>", где < старое имя > и < новое имя > это значения параметров oldName и newName соотвественно.

/* const bookShelf = {
    // Change code below this line
    books: ["The last kingdom", "The guardian of dreams"],
    getBooks() {
      return "Returning all books";
    },
    addBook(bookName) {
      return `Adding book ${bookName}`;
    },
    removeBook(bookName) {
        return `Deleting book ${bookName}`   
    },
    updateBook(oldName, newName) {
        return `Updating book ${oldName} to ${newName}`
    }
    // Change code above this line
};
console.log(bookShelf.getBooks());
console.log(bookShelf.updateBook("Sands of dune", "Dune"))  */

// *****************Задача************************
/* const atTheOldToad = {
    potions: [
        { name: "Speed potion", price: 460 },
        { name: "Dragon breath", price: 780 },
        { name: "Stone skin", price: 520 },
    ],
    
    // Change code below this line
    getPotions() {
        return this.potions;
        
    },
    
 
    addPotion(newPotion) {
        for (let potion of this.potions) {
            if (potion.name === newPotion.name) {
                return `Error! Potion ${newPotion.name} is already in your inventory!`
            }
        }
       
        this.potions.push(newPotion);
    },

    removePotion(potionName) {
        for (let i = 0; i < this.potions.length; i += 1) {
            const item = this.potions[i];
            if (potionName === item.name) {
                return this.potions.splice(i, 1);
            }
        }
        return `Potion ${potionName} is not in inventory!`
    },
    updatePotionName(oldName, newName) {
        for (let i = 0; i < this.potions.length; i += 1) {
            
            const item = this.potions[i];
            if (oldName === item.name) {
                return item.name = newName
            }
        }
        return `Potion ${oldName} is not in inventory!`;

     
        // Change code above this line
    },
}
console.log(atTheOldToad.getPotions()) */

/* const academy ={
    name: 'Sergey',
    age: 35,
    adress: {
        sity: 'lviv',
        stret: 'Franka',
    }
}
if ('name' in academy) {
    console.log(academy.adress.sity);
}
 */
/* const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
const technologys = ['Js', 'Html', 'Css', 'Sass', 'Git', 'Github', 'Visual Studio Code', 'Figma'];
const Deadlines = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',];

const perfectTermsOfReference = [
    { Deadline: Deadlines },
    { technology: technologys },
    { complexity: {
            level:levels,
            position: positions ,
        },
    },
];

const [Deadline, technology, complexity,] = perfectTermsOfReference;
console.log(Deadline);
 */
// КОЛБЕК фУНКЦИЯ
/* {const doMath = function (a, b,c, calbeck) {
    
    const result = calbeck(a, b,c);
    console.log(result);

}
const add = function (x, y,n) {
    return x * y +n;
    }
    const sub = function (x, y, n) {
        return x / y - n;
    }
    doMath(2, 3, 5, add)
    doMath(10,2,2,sub)
} */

// Аналог
/* {const doMath = (a, b,c, calbeck)=> {
    
    const result = calbeck(a, b,c);
    console.log(result);

}
const add = (x, y,n)=> {
    return x * y +n;
    }
    const sub = (x, y, n)=> {
        return x / y - n;
    }
    doMath(2, 9, 5, add)
    doMath(10,2,2,sub)
}
 */

// Слушатель событий
/* {
    const buttonNev = document.querySelector('.js-button');
    const arguments = function () {
    console.log('Клик по кнопке '+ Date.now())
}
buttonNev.addEventListener('click',arguments)
}
 */
/* {
    const buttonNev = document.querySelector('.js-button');
    const arguments = () => console.log('Клик по кнопке ' + Date.now());
    
buttonNev.addEventListener('click',arguments)
} */

/* 
{
    const onGetPositionSucces = function (position) {
        console.log(position);
    }
    const onGetPositionError = function (error) {
        console.log(error);
    }
    window.navigator.geolocation.getCurrentPosition(onGetPositionSucces, onGetPositionError);

} */
// Аналог
/* const onGetPositionSucces = (position)=> console.log(position);
const onGetPositionError = (error)=> console.log(error);
    
window.navigator.geolocation.getCurrentPosition(onGetPositionSucces, onGetPositionError); */

// ПРИМЕР КАЛБЕК ФУНКЦИИ 2
/* const filter = function (array, test) {
    const filteredArray = [];
    for (const els of array) {
        console.log(els);
        const passed = test(els);
        if (passed) {
            filteredArray.push(els);    
        }
}
return filteredArray
}

const calback1 = function (value) {
    return value >= 3; 
}
const r1 = filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], calback1);
console.log(r1);

const calback2 = function (value) {
    return value>=5 ;
}
const r2 = filter([2, 4, 5, 6, 7, 8, 9,22,3,9,44,21,65], calback2);
console.log(r2) */

// Аналог

/* const filter = (array, test)=>{
    const filteredArray = [];
    for (const els of array) {
        console.log(els);
        const passed = test(els);
        if (passed) {
            filteredArray.push(els);    
        }
}
return filteredArray
}


const calback1 =(value) =>value >= 3; 
    
const r1 = filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], calback1);
console.log(r1);


const calback2 = (value)=>value>=5 ; 
 
const r2 = filter([2, 4, 5, 6, 7, 8, 9,22,3,9,44,21,65], calback2);
console.log(r2) */

// **********ЗАМыКАЮЩИЕ ФУНКЦИИ КОНЦЕПЦИЯ**********

/* const fna = function (param) {
    const work = 'Ета функция возращаеться в другой функции';

    const inerFunction = function () {
        console.log(param);
        console.log(work);
        console.log('ето вызов другой функции')

    }
    return inerFunction;
    }
const fnb = fna(555);
fnb();
console.log(fnb)
    */
// АНАЛОГ

/* const fna = (param)=> {
    const work = 'Ета функция возращаеться в другой функции';

    const inerFunction = ()=> {
        console.log(param);
        console.log(work);
        console.log('ето вызов другой функции')

    }
    return inerFunction;
    }
const fnb = fna(555);
fnb();
console.log(fnb) */

/* const makeShef = function (name) {
    
    const makeDish = function(dish) {
        console.log(`${name} готовит ${dish}`);
    }
    return makeDish;
}
const oneShef2 = makeShef('Антон');
oneShef2('Шаурму');
oneShef2('Люлякебаб');

const oneShef = makeShef('Валера');
oneShef('Вареники');
oneShef('Борщ');
 */

// АНАЛОГ

/* const makeShef = (name)=> {
    
    const makeDish = (dish)=> {
        console.log(`${name} готовит ${dish}`);
    }
    return makeDish;
}
const oneShef2 = makeShef('Антон');
oneShef2('Шаурму');
oneShef2('Люлякебаб');

const oneShef = makeShef('Валера');
oneShef('Вареники');
oneShef('Борщ');
 */

/* const rounder = function (meaning) {
    return function (namber) {
        return Number(namber.toFixed(meaning))
    };
};
const rounder1 = rounder(1);
const rounder2 = rounder(2);
const rounder3 = rounder(3);
console.log(rounder1(43.9989));
console.log(rounder2(22.1111));
console.log(rounder3(2.9934)); */

// Приватные переменные
/* const myLibrauryFact = function () {
    let value = 0;
    const add = function (num) {
        value += num;
    };
    return {
        add:add,
        getValue() {
            return value;
        }
    };
};
const myLib = myLibrauryFact();
console.log(myLib.getValue);
console.log(myLib)
console.log(myLib.getValue());
myLib.add(10);
console.log(myLib.getValue()) */

/* const salaryManagerFactory = function (emploeName, baseSalary = 0) {
    let salary = baseSalary;
    return {
        raise(amount) {
            salary += amount;
            
        },
        lover(amount) {
            salary -= amount;
        },
        current() {
            return `Текущая зарплата ${emploeName}:  ${salary} грн`;
        },
    };
}
const salaryManager = salaryManagerFactory('Вася',12500);
console.log(salaryManager.current()) */

//   СТРЕЛОЧНЫЕ ФУНКЦИИ КОНЦЕПЦИЯ

/* const bmw = function (a, b, c) {
    console.log(a,b,c)
    return a + b + c;
}
console.log(bmw(2, 5, 8));

// Аналогично

const bmw1 = (a, b, c) => {
    console.log(a,b,c)
    return a + b + c;
} 
console.log(bmw1(55, 3, 78)); */

/* const pureMultiply = (array, value) => {
    const newArray = [];
  
    array.forEach(element => {
      newArray.push(element * value);
    });
  
    return newArray;
  };
  
  const numbers = [1, 2, 3, 4, 5,7,8,9,3];
  const doubledNumbers = pureMultiply(numbers, 4);
  
  // Не произошло мутации исходных данных
  console.log(numbers); // [1, 2, 3, 4, 5]
  // Функция вернула новый массив с изменёнными данными
  console.log(doubledNumbers); // [2, 4, 6, 8, 10] */

/*  const students = [
    { name: "Манго", score: 83 },
    { name: "Поли", score: 59 },
    { name: "Аякс", score: 37 },
    { name: "Киви", score: 94 },
    { name: "Хьюстон", score: 64 },
  ];
  
  const names = students.map(student => student.name);
console.log(names); // ['Манго', 'Поли', 'Аякс', 'Киви', 'Хьюстон']
const scores = students.map(student => student.score);
console.log(scores);  // Получаем масив оценок студента
 */

/* const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
  { name: "Манго", score: 83 },
  { name: "Поли", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Киви", score: 94 },
  { name: "Хьюстон", score: 64 },
];

const best = students.filter(student => student.score >= HIGH_SCORE);
console.log(best); // Массив объектов с именами Манго и Киви

const worst = students.filter(student => student.score < LOW_SCORE);
console.log(worst); // Массив с одним объектом Аякс


const averages = students.filter(student =>( student.score>= LOW_SCORE && student.score < HIGH_SCORE)
  );
  console.log(averages); // Массив объектов с именами Поли и Хьюстон

// В коллбек-функции удобно деструктуризировать свойства объекта
const average = students.filter(
  ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
);
console.log(average); // Массив объектов с именами Поли и Хьюстон
 */

//  ********** Задача 7

/* function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Change code below this line
  
   
   numbers.forEach((number)=> {
   
     if(number > value) {
     filteredNumbers.push(number)
     
     }
   
   })
  
    // Change code above this line
    return filteredNumbers;
}
console.log(filterArray([1, 2, 3, 4, 5], 3))   */

/* function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Change code below this line
    firstArray.forEach((array)=>{if(secondArray.includes(array)){commonElements.push(array)} })
    
  
    return commonElements;
    // Change code above this line
}
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])) */

// *********************МЕТОД REDUCE*********************
/* const salary = {
    tema: 30,
    vasya: 50,
    jekson: 33,
    kristin:88,
};

const totalSalary = Object.values(salary).reduce((total, value) =>{return total + value},0 );
console.log(totalSalary); */

// ************************Количество часов******************
/* const allGemers = [
    { id: 'playr-1', name: 'Vasia', timePlayd: 43, online: true, },
    { id: 'playr-2', name: 'Viktor', timePlayd: 93, online: true, },
    { id: 'playr-3', name: 'Andrey', timePlayd: 87, online: true, },
    { id: 'playr-4', name: 'denis', timePlayd: 21, online: true, },
];
const allTotaltimePlayd = allGemers.reduce((totalTime, plaer) => totalTime + plaer.timePlayd, 0);
console.log(allTotaltimePlayd); */

// **************Корзина товаров************************
/* const cart = [
    { lable: 'aple', price: 98, quantity: 3, },
    { lable: 'banana', price: 44, quantity: 2, },
    { lable: 'pinacle', price: 21, quantity: 7, },
    { lable: 'tomato', price: 90, quantity: 5, },
];
const totalProduct = cart.reduce((total, { price, quantity }) => total + price * quantity, 0);
console.log(totalProduct); */

// *********************** получаем масив всех тегов
// *********************** и фильтруем их по количеству
/* const tweets = [
    { id: '001', likes: 5, tags: ['js', 'nodejs'] },  
    { id: '002', likes: 7, tags: ['html', 'css'] }, 
    { id: '003', likes: 9, tags: ['figma', 'photoshop'] }, 
    { id: '004', likes: 51, tags: ['react', 'nodejs','html'] }, 
    { id: '005', likes: 4, tags: ['js', 'nodejs','react'] }, 
    
];
const allTags = tweets.reduce((acc, tweet) => {
    return [...acc,...tweet.tags];
}, [])
console.log(allTags)




const tagsStats = allTags.reduce((acc, tag) => {
 
    return { ...acc, [tag]: acc[tag] ? acc[tag] + 1:1,}

}, {});
console.log(tagsStats);
 */

// МЕТОД SORT
/* const nambers = [1, 5, 7, 3, 2, 4, 8, 5, 3, 6, 4,];

const nambersSert = [...nambers].sort((a,b)=>a-b);
console.log(nambersSert);

const reversNanbSert = [...nambers].sort((a, b) => b - a);
console.log(reversNanbSert);

const reversNambSert2 = [...nambers].sort((a, b) => a - b).reverse();
console.log(reversNambSert2) */

/* 
const changeEven=(numbers, value) =>{
    // Change code below this line
    const newArray = [];
    
    numbers.forEach(namber => {
        if (namber % 2 === 0) { newArray.push(namber + value) }
        else newArray.push(namber) ;
    }
    ); 
      
    
    return newArray
    
    // Change code above this line
  }
  

  console.log(changeEven([1, 2, 3, 4, 5], 10)) */
/* const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// Change code below this line
const planetsLengths = planets.map(planet => planet.length);
console.log(planetsLengths) */

/* const users=[
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      gender: "male"
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      gender: "female"
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      gender: "male"
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      gender: "female"
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
      isActive: true,
      balance: 3951,
      gender: "male"
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
      isActive: false,
      balance: 1498,
      gender: "male"
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      gender: "female"
    }
  ] */

/* const getSortedFriends = (users) => {
    const sortedFriends = users.flatMap(user => user.friends).filter((friemd, index, array) => array.indexOf(friemd) === index).sort((a,b)=>a.localeCompare(b));
  
    
    return sortedFriends;
    
}; 

console.log(getSortedFriends(users));
 */

/* const showTag = function () {
    console.log('showTag=>this',this);
    console.log('showTag=>this', this.tag);
};
const user ={
    tag:'mango',
};

user.showUserTag = showTag;
console.log('user', user);
user.showUserTag(); */

/* class User {
    // Синтаксис объявления метода класса
    constructor(name, email,age) {
      // Инициализация свойств экземпляра
      this.name = name;
        this.email = email;
        this.ege = age;
    }
  }
  
  const mango = new User("Манго", "mango@mail.com",15);
  console.log(mango); // { name: 'Манго', email: 'mango@mail.com' }
  
  const poly = new User("Поли", "poly@mail.com");
  console.log(poly); // { name: 'Поли', email: 'poly@mail.com' }
 */

/* const person1 = {
    name: 'sara',
};
console.log(person1);

const person2 = Object.create(person1);
person2.age = 25;
console.log(person2);
console.log(person2.name);
console.log(person2.age);

const person3 = Object.create(person2);
person3.clock = 12;
console.log(person3);
console.log(person3.name);
console.log(person3.age); 
 */

/* 
const Car = function ( { model, brand, color, price } = {} ) { 
    console.log(config);
   
    this.model = model;
    this.brand = brand;
    this.color = color;
    this.price = price;
    
  
};
Car.prototype.Argument = function () {
    console.log('Контекст ссылается на обект myCar', this);
    console.log('ПОНЯТНО');
};

Car.prototype.changePrice = function (newPrice) {
    this.price = newPrice;
}



const myCar = new Car({ model: 'laguna', brand: 'Renaut', color: 'Black', price: 21000 });
myCar.changePrice(19000);
console.log(myCar);


const myCar2 = new Car({ model: 'X-5', brand: 'BMW', color: 'Red', price: 45000 });
console.log(myCar2);

myCar.Argument();
myCar2.Argument(); */

/* const CounterPlagins = function ({ initialValue = 0, step = 1 } = {}) {
    this.value = initialValue;
    this.step = step;
    
};
CounterPlagins.prototype.incriment=function(){
    this.value += this.step;
};
CounterPlagins.prototype.dincriment=function(){
    this.value -= this.step;
};
const counter = new CounterPlagins({ step: 15 });
const counter1 =new CounterPlagins({step:5})
console.log(counter);


counter.incriment()
console.log(counter);
counter1.dincriment();
console.log(counter1) */

//  КЛАССЫ

/* class Car{
    constructor({ model, brand, color, price }={}) { 
        this.model = model;
        this._brand = brand;
        this.color = color;
        this.price = price;
    }
      setPrice(newPrice) { 
            this.price = newPrice;
    }
        getModel(newModel) {
        
        this.model=newModel
    }

    get brand() {
        return this._brand;
    }
    set brand(newBrand) {
         this._brand=newBrand;
    }
  
};

const myCar = new Car({ model: 'laguna', brand: 'Renaut', color: 'Black', price: 21000 });
myCar.getModel('LAGUNA 2021');
myCar.setPrice(35000);
console.log(myCar);
myCar.brand = "Suzuki";
console.log(myCar.brand);


const myCar2 = new Car({ model: 'X-5', brand: 'BMW', color: 'Red', price: 45000 });
console.log(myCar2);
myCar2.brand='OPEL';
console.log(myCar2.brand); */

// НАСЛЕДОВАНИЕ КЛАССОВ

/* class Hero { 
    constructor({ name = 'gero', xp = 0 }) {
        this.name = name;
        this.xp = xp;
    }
  gainXp(amount) {
        console.log(`${this.name} получает ${amount}`)
        this.xp += amount; 
        
    } 
  getName(newName) {
        console.log(`${this.name} получает иммя ${newName}`)
        this.name = newName; 
        
    } 
};

class Warrior extends Hero{
    constructor({  weapon,...restProps }={}){
        super( restProps  );
        this.weapon = weapon;   
    }
    attack() {
        console.log(`${this.name} атакует с помощью ${this.weapon}`)
    }
    
};
class Mage extends Hero {
    constructor({  magicWeapon,...restPropst  }={}) {
        super(restPropst);
        this.magicWeapon = magicWeapon;
    }
    casts() {
        console.log(`${this.name} атакует с помощью ${this.magicWeapon}`)
    }
};

class Potter extends Mage{
    constructor({ spell, ...restProps } = {}) {
        super(restProps);
        this.spell = spell;
    }
    conjure() {
        console.log(this.spell);
    }

}
class Ronald extends Mage{
    constructor({ chara, ...restProps } = {}) {
        super(restProps);
        this.chara = chara;
    }
    jampe() {
        console.log(this.chara)
    }
}

const pecheneg = new Warrior({name: "Vasia", xp:10,weapon: "Мечь"});
console.log(pecheneg);
pecheneg.getName('Georgiy');
pecheneg.attack();
pecheneg.gainXp(1000);

const Druid = new Mage({ name: "Spec",xp: 20,magicWeapon: "Посох"});
console.log(Druid);
Druid.casts();
Druid.gainXp(500);

const grifindor = new Potter({ name: "Garri", xp: 80, magicWeapon: "Авада Кедабра", spell:"patronus"});
console.log(grifindor);
grifindor.casts();
grifindor.gainXp(1090);

const slizarin = new Ronald({ name: "Ronald", xp: 50, magicWeapon: "Палочка", spell:"Expelearmus"});
console.log(slizarin);
slizarin.casts();
slizarin.gainXp(677);  */

/* 
const books = [
    {
        id: 1,
        title: "Gari Potter",
    },
    {
        id: 2,
        title: 'Lord of the Rings',
    },
    {
        id: 3,
        title: 'Fantastic Сreatures'
    },
    {
        id: 4,
        title: 'Home Alon'
    },

];
const transfornToObject = (books) => {
    return books.reduce((acc, item) => {
        const { id } = item;
        acc[id] = item;
        return acc;
    }, {});
    
};
const bookColection = transfornToObject(books);
console.log(bookColection);
const foundTheObject = bookColection['1'];
console.log(foundTheObject); */

/* const newOpen = document.querySelector('opentext');


newOpen.addEventListener('click', () => {
   
}); */
/* const bodyEl = document.querySelectorAll('.visibleTrue');
console.log(bodyEl); */

/* const actions = document.querySelectorAll('.js-action button');
console.log(actions[2].dataset.action); */

/* const newEl = document.querySelector('.action_btn');
console.log(newEl.classList);
newEl.classList.add('poher');
console.log(newEl.classList);
newEl.classList.remove('action_btn');
console.log(newEl.classList);
newEl.classList.replace('poher', 'good');
console.log(newEl.classList)  */

/* {
  const curentPageUrl = '/about';
  const curentPageUrl1 = '/portfolio';
  const linkEl = document.querySelector(`.site-nav__link[href="${curentPageUrl}"]`);
  console.log(linkEl);
  const linkEl1 = document.querySelector(`.site-nav__link[href="${curentPageUrl1}"]`);
  console.log(linkEl1);
  linkEl.classList.add('site-nav__link--curent');

  linkEl1.classList.add('site-nav__link--next');
}

{
  const showsButton = document.querySelector('button[data-action="close"]');
  console.log(showsButton);
  console.log(showsButton.dataset.action);
} */
/* 
const titleEl = document.createElement('h1');
titleEl.classList.add('page-title');
titleEl.textContent = 'Моя страница';
console.log(titleEl);

const imgEl = document.createElement('img');
imgEl.src = 'https://vnokia.net/images/wallpaper/2021/wallpaper_768x1280_20.jpg';
imgEl.alt = 'Три картинки';
imgEl.width = 320;
console.log(imgEl);

const heroEl = document.querySelector('.hero');
heroEl.append(titleEl, imgEl);
console.log(heroEl);

const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.textContent = 'facebook';
navLinkEl.href = 'https://www.facebook.com/';

const navEl = document.querySelector('.site-nav');
navEl.insertBefore(navItemEl, navEl.firstElementChild);

console.log(navItemEl);
navItemEl.appendChild(navLinkEl);
 */

/* const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
let timerId = null;

startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    console.log(`PUTIN UILO !  ${Math.random()}`);
    console.log(date);
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  console.log(`DEAD ${timerId} PUTIN!`);
});

const date = new Date();
console.log(date);
 */

/* const promise = new Promise((resolve, reject) => {
  const griatePromise = Math.random() < 0.5;

  setInterval(() => {
    if (griatePromise) {
      resolve('Промис Выполнен успешно ');
    }
    reject('Провал Ошибка промис не выпонен ');
  }, 1001);
});

promise
  .then(result => {
    console.log(`🤚${result}`);
  })
  .catch(error => {
    console.log(`😡 ${error}`);
  })
  .finally(() => console.log('Ok выполняем в любом случае 🔥'));
 */

/* const griateCast = spell => {
  const DELAY = 1000;

  return new Promise((resolve, reject) => {
    const griatePromise = Math.random() < 0.5;
    setTimeout(() => {
      if (griatePromise) {
        resolve(`Griate ${spell}`);
      } else {
        reject('Fak you ❌');
      }
    }, DELAY);
  });
};
griateCast('Avada Kedabra ⚔️').then(makeresult).catch(makeerror);

function makeresult(result) {
  console.log(result);
}

function makeerror(error) {
  console.log(error);
}
 */

/* function oddOrEven(array) {
  let strings = 0;
  for (let namber of array) {
    namber += 1;
    if (namber % 2 === 0) {
      strings = namber;
      console.log(strings);
    }
  }
}
oddOrEven([1, 2, 22, 4, 5, 8, 9]); */

/* const arr = [2, 4, 6, 8, 1, 3, 5];
function arraySum(array) {
  let sumPositive = 0;
  let sumNegative = 0;
  for (let i = 0; i < array.length; i++) {
    let x = (sumPositive += array[i]);
    if (x % 2 === 0) {
      console.log('Вывожу суму четных:', sumPositive);
    }
    let y = (sumNegative += array[i]);
    if (y % 2 !== 0) {
      console.log(sumNegative);
    }
  }
}
arraySum(arr); */
{
  /* <button id="btn">Кнопка 1</button>;

let buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
  btn.addEventListener('click', clickHandler);
});

function clickHandler() {
  alert(this.textContent);
} */
}

let str = 'aaDDddhhgg';
let result = str.split('').reverse();
let res = [];

for (let i = 0; i < result.length; i++) {
  res.push(result[i] + i);
  console.log(res.toString('').toLowerCase());
}
