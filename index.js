const inquirer = require('inquirer');
const fs = require('fs');
const circle = require('./lib/circle');
const square = require('./lib/square');
const triangle = require('./lib/triangle');


const questions = [
    {
        name: 'shape',
        message: 'Choose a shape for your logo.',
        type: 'list',
        choices: ['circle, square, triangle'],
    },
]