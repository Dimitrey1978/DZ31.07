// ### task. Запись **переменной экземпляра**
// Завершите определение класса `User`, чтобы он записывал переменные экземпляра `firstName`, `lastName` и `age` в качестве ключей объекта.

// Class definition
class User {
	constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;    
  }
}


// Class usage
const sam = new User("Sam", "Blue", 49);
const charlie = new User("John", "Doe", 30);
console.log(sam);
console.log(charlie);

// ### task. Запись **переменной экземпляра**
// Завершите определение класса `Recipe`, чтобы он записывал переменные экземпляра `name` и `calories` в качестве ключей объекта.
console.log("\n", "---------Запись **переменной экземпляра**-------------", "\n");

class Recipe {
	constructor(name, calories) {
        this.name = name;
        this.calories = calories;
}
}


// class usage
const pasta = new Recipe("Pasta", 600);
const salad = new Recipe("Salad", 400);
console.log(pasta);
console.log(salad);


// ### task. **Реализовать методы экземпляра**
// Реализуйте метод экземпляра `getFullName`, чтобы он возвращал имя и фамилию пользователя, разделенные пробелом.
console.log("\n", "---------Работаем с методами-------------", "\n");

class User1 {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    getFullName () {
        return this.firstName + " " + this.lastName;
    }

  }
  
  
  // Class usage
  const sam1 = new User1("Sam", "Blue");
  console.log(sam1.getFullName()); // "Sam Blue"
  
  const charlie1 = new User1("Charlie", "Doe");
  console.log(charlie1.getFullName()); // "Charlie Doe"

//   ### task. **Реализовать методы экземпляра**
// Реализуйте следующие методы экземпляра для класса `Recipe`:
// - `isLowCaloric`, который возвращает `true`, когда калорийность рецепта составляет 400 или ниже
// - `isHighCaloric`, который возвращает `true`, когда калорийность рецепта составляет 600 или выше

console.log("\n", "---------Калорийность-------------", "\n");

class Recipe1 {
    constructor(name, calories) {
      this.name = name;
      this.calories = calories;
    }
  
    isLowCaloric () {
        return this.calories <=400;
    }

    isHighCaloric () {
        return this.calories >=600;
    }

  }
  
  
  // Class usage
  const pasta1 = new Recipe1("Pasta", 700);
  const salad1 = new Recipe1("Salad", 350);
  console.log(pasta1.isLowCaloric());
  console.log(salad1.isLowCaloric());
  console.log(pasta1.isHighCaloric());
  console.log(salad1.isHighCaloric());

//   ### task. **Реализовать методы экземпляра**
// Реализуйте следующие методы экземпляра для класса `User`:
// - `getFullName` возвращает имя и фамилию пользователя, разделенные пробелом
// - `getInitials` возвращает первый символ имени, сразу за которым следует первый символ фамилии
// - `canVote` возвращает `true`, когда пользователю исполнилось 18 лет или больше

console.log("\n", "--------Экземпляры класса User-------------", "\n");

class User2 {

	constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;    
  }

  getFullName (){
    return this.firstName + " " + this.lastName;
  }

  getInitials () {
    return this.firstName[0]+this.lastName[0];
  }

  canVote () {
    return this.age >=18;
  }


}


// Class usage
const sam2 = new User2("Sam", "Blue", 49);
console.log(sam2.getFullName());

const charlie2 = new User2("Charlie", "Doe", 13);
console.log(charlie2.getFullName());

console.log(sam2.getInitials());
console.log(charlie2.getInitials());

console.log(sam2.canVote());
console.log(charlie2.canVote());

// ### task. Писатель **и пользователь**
// Определите класс `Writer`, содержащий следующие методы экземпляра:
// - `getFullName` возвращает полное имя писателя
// - `canVote` возвращает истину, когда возраст 18 или выше
// - `publishArticle` выводит в консоль строку: `"Article published"`

console.log("\n", "--------Писатель **и пользователь**-------------", "\n");

class User3 {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    canVote() {
      return this.age >= 18;
    }
  }
  
  class Writer extends User3{
    publishArticle (){
        console.log("Article published");
    }

  }
  
  
  // Class usage
  // User {firstName: 'Sam', lastName: 'Smith', age: 30}
  const user = new User('Sam', 'Smith', 30); 
  
  // Writer {firstName: 'Tom', lastName: 'Roth', age: 20}
  const writer = new Writer('Tom', 'Roth', 20);
  writer.publishArticle(); // Article published

