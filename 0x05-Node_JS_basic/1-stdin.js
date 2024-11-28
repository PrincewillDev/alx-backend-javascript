// This program take input from stdin and display result
const readline = require('readline');

const getInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

getInput.question(
  'Welcome to Holberton School, what is your name?\n',
  (input) => {
    console.log(`Your name is: ${input}`);
  },
);

process.on('exit', () => console.log('This important software is now closing'));
