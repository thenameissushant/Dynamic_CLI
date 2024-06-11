import inquirer from 'inquirer';

const questions = [
  {
    type: 'list',
    name: 'jsts',
    message: 'Do you prefer JavaScript or TypeScript?',
    choices: ['JavaScript', 'TypeScript'],
  },
  {
    type: 'input',
    name: 'reason',
    message: 'Why do you prefer this?',
    when: (answers) => answers.jsts,
  },
];

function ask() {
  inquirer.prompt(questions).then(answers => {
    console.dir(answers, { colors: true });
  });
}

ask();
