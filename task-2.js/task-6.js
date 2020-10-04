function mapArray(array) {
    'use strict';
    const numbers = new Array(array.length);
   for(let i = 0; i < array.length; i += 1) {
      // Write code under this line
      numbers[i] = array[i] * 10;

    /*або for(const number of numbers) {
        number * 10;
      } */
    }
    return numbers;
  }
  
  console.log(mapArray([-2, 0, 2]));
  // [-20, 0, 20]
  
  console.log(mapArray([-2.5, 0, 2.5]));
  // [-25, 0, 25]



  /*Задача 2-6
//Конструкция new Array(10) создаст массив, длинной в 10 элементов. Значения в таком массиве будут отсутствовать, т.е. не будет даже undefined. Поэтому такой массив нужно заполнить значениями для дальнейшего использования.

Есть еще способ создания и заполнения массива - можно создать пустой массив [] и заполнять его методом push()

Быстрая обработка массива
Преимущество создания массива заданной длины перед добавлением в пустой массив в том, что метод push() медленнее обрабатывается.

Если `new Array()` будет содержать более одного аргумента, то будет создан массив с элементами из аргументов.
Пример:

new Array(3);
// [,,]

new Array(1, 2, 3);
// [1, 2, 3]
Быстрое создание массива
Пустой массив. Вызов new Array() создаст пустой массив []. Но это более медленный способ создания массива по сравнению с использованием литерала. Если нужен пустой массив, то рекомендуется использовать литерал массива.

const arrFast = []; // быстрее
const arrSlow = new Array(); // медленнее
Создание нового массива на основе преобразования данных из старого массива
Напиши функцию mapArray(array), принимающую 1 параметр array - массив чисел. Функция создает новый массив numbers размером в длину массива array и заполняет его числами из массива array умноженными на 10. Для перебора массива и добавления новых значений используй цикл for. По завершению перебора массива array возвращается массив numbers. */