//ООП - парадигма программирования,
//которая использует "обьеты" для представления
//данных и методов для раблты с этими данными.

//1. Класс и Объект (Class & Object)
//класс - "чертёж" для создания объектов
//объект - экземпляр класса с собственными данными
//object - instance of class

class Animal {
    //конструктор - специальный метод
    //для создания и инциализации объекта
    //spesial method for creating and
    //initializing an object creatid with a class

 constructor(name,age) {
//this - ссылка на текущий объект
//reference to the current object
this.name = name;
   this.age = age;
   }
   //метод - это функция внутри объекта
   //method - a function inside an odject
speak() {
    console.log(`${this.name} издаёт какой - то звук.`);
    }
    displayinfo() {
        console.log(`имя: ${this.name}, Возраст: ${this.age}`);
        }
       }

       //создание объектов (экземпляров класса)
       //creating objects (instances of a class)
       const genericAnimal = new Animal(`Some animal`, 5);
       const myDog = new Animal ("Шарик", 8);

       genericAnimal.displayinfo();
       myDog.displayinfo();
       myDog.speak();
       //2. Инкапсуляция (e)
       //Инкапсуляция - скрытие внутренней реализации от внешнего мира
       //
       //или же - об\единение данных и методов
       // и работы с этими данными в одном классе

       console.log(`--- Инкапсуляция ---`);

       class BanrAccount (
        //# - означает, что свойство приватное
        //private property
        constructor(initialBalance) {
            if(initialBalance > 0) {
                this.#balance = initialBalance;
                }
              }
              //публичный метод для внесения денег
              //public method for depositing money
              deposit(amount) {
                if(amount > 0) {
                 this.#balance += amount;
                 console.log(`Внесено: ${amount}. Новый баланс: ${this.#balance}`);
                 } else {



   
   