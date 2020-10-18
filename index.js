// Write your code here

class Breakfast {

  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}

let breakfast = new Breakfast('toast', "juice")

class Lunch {

  constructor(salad, soup, drink) {

    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}

const lunch = new Lunch("Greek", "Lentil", "Sparkling water");

class Dinner  {

  constructor(salad, soup, entree, dessert) {

    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this._dessert = dessert;

  }
}

const dinner = new Dinner("Garden", "Hot and Sour", "Steak", "Cheesecake");