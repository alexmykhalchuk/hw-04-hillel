/* 1. Напишите функцию max, которая сравнивает два числа и возвращает
большее:

console.log( max(0, -1) ); // 0*/

/*function max(a, b) {
   if (a > b) {
      return a;
   } else if (a < b) {
      return b;
   } else return "Numbers are equal!";
}

console.log(max(0, -1));*/

/* 2. Напишите функцию-аналог Math.min(). Функция принимает любое количество чисел и возвращает меньшее из них:

      console.log( min(0, -1, 100, 500, 100500) ); // -1*/

// Вариант 1

/*let arr = [0, -1, 100, 500, 100500];
arr.sort((a, b) => a - b);
let arrMin = arr[0];

alert(arrMin);*/

// Вариант 2

/*function min() {
    let arrArguments = [...arguments];

    let minNumber = arrArguments.reduce(function (acc, item) {
        if (item < acc) return acc = item;
        return acc;
    }, arrArguments[0]);

    return minNumber;
}

 console.log( min(0, -1, 100, 500, 100500) ); */

 /* 3.Изучите перебирающие методы массивов: forEach, filter, map. Создайте массив объектов users (~10 объектов),
 каждый объект имеет поля firstname, lastname, age с разными значениями. Используя встроенные функции(методы) массивов:
    •	Отфильтруйте пользователей младше 18 лет
    •	Добавьте каждому объекту поле fullName, которое является конкатенацией имени и фамилии
    •	Сформируйте новый массив, который содержит только полное имя пользователей*/

/*let users = [
 { name: "Вася", surname: "Пупкин", age: 15 },
 { name: "Петя", surname: "Иванов", age: 19 },
 { name: "Маша", surname: "Петрова", age: 20 },
 { name: "Жора", surname: "Лютый", age: 12 },
 { name: "Том", surname: "Вагензон", age: 22 },
 { name: "Боб", surname: "Харис", age: 33 },
 { name: "Роланд", surname: "Трепло", age: 18 },
 { name: "Эва", surname: "Шар", age: 8 },
 { name: "Роберт", surname: "Янки", age: 10 },
 { name: "Алекс", surname: "Штурмер", age: 30 }
];

let adultUsers = users.filter(item => item.age >= 18);

console.log(adultUsers);

let getFullName = adultUsers.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  age: user.age
}));

console.log(getFullName);

let fullnameUsers = [];
getFullName.forEach(item => fullnameUsers.push(item.fullName));

console.log(fullnameUsers);*/

/* 4. Напишите функцию аналог метода массива shift. 
Функция удаляет из переданного в параметре массива первый элемент.*/

/*let arr = [0, -1, 100, 500, 100500];
arr.splice(0, 1);
alert(arr);*/

// Или такой вариант

/*function deleteFirstElem (arr) {
   let newArray = [];
   for (let i = 1; i < arr.length; i++) {
      newArray.push(arr[i]);
   }
   return newArray;
}

console.log(deleteFirstElem([0, -1, 100, 500, 100500]));*/

/* 5. Напишите функцию аналог метода массива push. 
Функция добавляет в конец переданного в параметре массив произвольное количество элементов.*/

/*function addElemToEnd(arr) {
    const newElements = [];

    for (let i = 1; i < arguments.length; i++) {
       
       newElements.splice(Infinity, 0, arguments[i]);    //newElements.push(arguments[i]);
    }

    return [...arr, ...newElements];
}

console.log(addElemToEnd(['1', '2', '3', '4', '5'], 6, 7, 8, 'g', 9, 10, 11));*/

/* 6. Напишите функцию аналог метода Object.assign(). 
Первый параметр функции - целевой объект, поля которого будут изменены или расширены. 
Остальные параметры - объекты-источники, полями которых будет расширяться целевой объект.*/

/*function extend(newObj) {
    let obj = {};

    for (let i = 1; i < arguments.length; i++) {
        obj = {
            ...obj,
            ...arguments[i]
        };
    }

   return {
      ...newObj,
      ...obj
   };
}

let source = {firstname: 'Tom', age: 10};
let s = extend(source, {firstname: 'John'}, {lastname: 'Doe'});
console.log(source); 
console.log(s); */

/* 7. Напишите функцию setComment с параметрами: date, message, author. Дата и текст сообщения - обязательные параметры, 
если какой-то из них или оба отсутствуют, то выполнение функции должно обрываться, а пользователю выдаваться предупреждение (alert) о том, 
что данные переданы некорректно. Параметр author - опциональный, но должна происходить проверка: если параметр не передан, 
то вместо него подставляется значение ‘Anonymous’. Функция распечатывает в консоле текст в формате:
    			<имя_автора>, <дата>
    			<текст_сообщения>

setComment('2016-11-02', 'Everything is ok', 'John');

John, 2016-12-22 Everything is ok

setComment('2016-11-02', 'You could do it better!');

Anonymous, 2016-12-22 You could do it better!*/

/*function setComment(date, message, author = 'Anonymous') {
   if (!date || !message) {
      return alert('The data was sent incorrectly.');
   }
   console.log(`${author}, ${date} ${message}`);
}


setComment('2016-11-02', 'Everything is ok', 'John');
setComment('2016-11-02', 'You could do it better!');*/