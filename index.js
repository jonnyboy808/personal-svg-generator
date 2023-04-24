const inquirer = require('inquirer');
const fs = require('fs');
const circle = require('./lib/circle');
const square = require('./lib/square');
const triangle = require('./lib/triangle');
const colorNames = ['aliceblue', 'antiquewhite', 'aqua', 'aquaMarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgrey', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'grey', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgrey', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'rebeccapurple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen']

const questions = [
    {
        name: 'shape',
        message: 'Choose a shape for your logo.',
        type: 'list',
        choices: ['circle, square, triangle'],
    },

    {
        name: 'shapeColorFormat',
        message: 'Choose a color format for the color of the shape.',
        type: 'list',
        choices: ['color name', 'hexadecimal']
    },

    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color name for your shape',
        when: (answers) => {
            if(answers.shapeColorFormat === 'color name') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let answersLowerCase = answer.toLowerCase();
            for (var i = 0, len = colorNames.length; i < len; ++i) {
                if (answersLowerCase.indexOf(colorNames[i]) != -1) {
                    return true;
                }
            }
            return console.log('\n Please enter a valid color name')
        }
    },

    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a hexadecimal color for your shape, i.e.(#ffffff):',
        when: (answers) => {
            if(answers.shapeColorFormat === 'hexadecimal') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const hexRegEx = '^#[A-Fa-f0-9]{6}$'
            if (!answer.match(hexRegEx)) {
                return console.log('\n Please enter a valid hexadecimal')
            }
            return true;
        }
    },

    {
        type: 'input',
        name: 'text',
        message: 'Enter 3 characters',
        validate: (answer) => {
            if (answer.length > 3) {
                return console.log('\n Sorry, text must be 3 characters or less.');
            }
            return true;
        }
    },

    {
        name: 'textColorFormat',
        message: 'Choose a color format for the color of the text:',
        type: 'list',
        choices: ['color names, hexadecimal']
    },

    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color name for your text',
        when: (answers) => {
            if(answers.textColorFormat === 'color name') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let answersLowerCase = answer.toLowerCase();
            for (var i = 0, len = colorNames.length; i < len; ++i) {
                if (answersLowerCase.indexOf(colorNames[i]) != -1) {
                    return true;
                }
            }
            return console.log('\n Please enter a valid color name')
        }
    },

    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a hexadecimal color for your text, i.e.(#ffffff):',
        when: (answers) => {
            if(answers.textColorFormat === 'hexadecimal') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const hexRegEx = '^#[A-Fa-f0-9]{6}$'
            if (!answer.match(hexRegEx)) {
                return console.log('\n Please enter a valid hexadecimal')
            }
            return true;
        }
    },   
];

function shapeOption(response) {
    if (response.shape === 'circle') {
        let userShape = new circle (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }

    if (response.shape === 'square') {
        let userShape = new square (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }

    if (response.shape === 'triangle') {
        let userShape = new triangle (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }
};