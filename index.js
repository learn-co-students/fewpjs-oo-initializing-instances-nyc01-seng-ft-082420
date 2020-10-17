class Dog {
  constructor(name, breed){
    this.name = name;
    this.breed = breed;
  }
}

let tomTheDog = new Dog("Tom", "black");
let zarroTheDog = new Dog("Zarro", "gray");

class Breakfast {
  constructor(food, drink){
    this.food = food;
    this.drink = drink;
  }
}
class Lunch {
  constructor(soup, salad){
    this.soup = soup;
    this.salad = salad;
  }
}
class Dinner {
  constructor(salad, soup, entree, dessert){
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this._dessert = dessert;
  }
}