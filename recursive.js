import inquirer from 'inquirer';

const output = [];
const tvShowQuestions = [
  {
    type: 'input',
    name: 'tvShow',
    message: 'What is your favorite TV show?',
  },
  {
    type: 'confirm',
    name: 'askAgain',
    message: 'Want to enter another TV show favourite (Just hit enter for Yes)?',
    default: true,
  },
];

function ask(){
  inquirer.prompt(tvShowQuestions).then((answers) => {
    output.push(answers.tvShow);
    if(answers.askAgain){
      ask();
    } else {
      console.log('Your fav TV Shows: ', output.join(', '));
    }
  })
}
ask();