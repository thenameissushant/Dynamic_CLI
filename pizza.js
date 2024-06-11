import inquirer from 'inquirer';

const questions = [
  {
    type: 'checkbox',
    message: 'Select Toppings',
    name: 'toppings',
    choices:[
      new inquirer.Separator(' = The Meats ='),
      {
      name: 'Pepperoni',
      },
      {
        name: 'Ham',
      },
      {
        name: 'Bacon',
      },
      {
        name: 'Sausage',
      },
      new inquirer.Separator(' = The Cheeses ='),
      {
        name : 'Mozzarella',
        checked: true,
      }, 
      {
        name: 'Cheddar',
      },
      {
        name:'Gouda',
      },
      new inquirer.Separator(' = The Veggies ='),
      {
        name: 'Mushrooms',
      },
      {
        name: 'Onions',
      }, 
      {
        name: 'Peppers',
      },
      {
        name: 'Olives',
      },
      {
        name: 'Tomatos',
      },
      new inquirer.Separator(' = The Sauces ='),
      {
        name: 'Pesto',
        disabled: 'out of stock',
      },
      {
        name: 'Alfredo',
      },
      {
        name: 'Marinara',
      }, 
    ]
  }
];


function ask() {
  inquirer.prompt(questions).then(answers => {
    console.dir(answers, { colors: true });
  });
}

ask();