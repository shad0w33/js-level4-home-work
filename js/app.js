
// 1. вывести одной строкой минимальное значние массива array с помощью деструктуризации и Math

const array = [1,2,3,4,6,710,34013,013];
console.log(Math.min(...array));

// 2.функция multiply не принимает явно никаких параметров

function multiply() {
  const numbers = [...arguments];
  const total = numbers.reduce((total, current) => {
    return total * current
  });
  console.log(total);
}

multiply(100,200,83902,1230) // В результате фукнции должно вернутся число, которое является результатом умножения всех аргументов переданых в функцию

// 3. У нас есть фукниця totalPrice, с помощью деструктуризации объекта сделать так, что б функция работала.

const product = {
  productName: 'Water',
  price: 20,
  count: 3
}
const {price, count} = product;
function totalPrice() {
  return price * count;
}
console.log(totalPrice(product));

//4. написать объект в котором будет свойство items (изначально пустой массив), 
// метод объекта setItems который принимает массив значений и устанавливает этот массив как значение свойста items
// метод объекта sum котроый возвращает сумму всех элементов массива items 
// метод maxValue который возвращает максимальное значение из массива items с использованием деструктуризации массива.

const exampleNumbers = {
  items: [],
  setItems(arr) {
    this.items = arr;
  },
  sum() {
    return this.items.reduce((a, b) => a + b, 0);
  },
  maxValue() {
    return Math.max(...this.items);
  }
};

// 5. Написать функционал что б при вызове showPrediction выводилась случайная фраза из массива predictsArr1 для predictions1 и predictsArr2 для predictions2

const predictsArr1 = [
  'Удача придет откуда не ждете.',
  'Давние долги будут возвращены вам.',
  'Вас ожидает неожиданное денежное поступление.',
  'Все неоконченные дела будут завершены.',
  'Яркое приключение уже поджидает вас.',
  'Планирование времени поможет вам не опоздать на встречу.',
  'Интуиция на этот раз не подведет вас. Используйте это.',
  'Прислушайтесь к себе и ответ на вопрос будет найден.',
  'Появится возможность отправиться в дорогу.',
  'Ваш ценный опыт сможет кому-то помочь, если перестанете его прятать в себе.',
  'Вам не удастся понравиться абсолютно всем, не тратьте на это энергию.',
  'Одежда, которая вас старит, не достанется вам.'
]

const obj = {
  predictions1: [],
      setPredictions(arr) {
        this.predictions1 = arr;
      },
      showPrediction() {
        const randomPredicts = obj.takeNumber();
        console.log(this.predictions1[randomPredicts]);
      },
      takeNumber() {
        return Math.floor(Math.random() * this.predictions1.length);
      },
}
const predictions = obj;
predictions.setPredictions(predictsArr1);
predictions.showPrediction();


