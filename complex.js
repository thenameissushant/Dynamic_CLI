import inquirer from 'inquirer';
const questions = [
  {
    type: 'input', message: 'Enter your Email: ', name: 'email', 
  },
  {
    type: 'password', message: 'Enter your Password: ', name: 'password', mask: '*',
  },
  {
    type: 'input', message: 'Enter user ID(number): ', name: 'userId', default(){
      return 1000;
    },
    validate: (answer) => {if(!Number.isInteger(+answer)){
      return 'Value must be a number';}
                           return true;
    },
  },
  {
    type: 'number', message: 'previous build number', name: 'buildNumber'
  },
]

function ask(){
  inquirer.prompt(questions).then((answers) => {
    console.log(answers, {color:true});
  });
}
ask();