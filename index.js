const inquirer = require('inquirer');
const fs = require('fs');
// pulls in each shape depending on user choice from questions
const circle = require('./lib/circle.js');
const square = require('./lib/square.js');
const triangle = require('./lib/triangle.js');

// helps push newly created logo to file
const fileName = "./examples/logo.svg";
// created const from pulled color names from the node modules inside of the color-name folder
const colorNames = ['aliceblue', 'antiquewhite', 'aqua', 'aquaMarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgrey', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'grey', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgrey', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'rebeccapurple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen']

// start of questions for user generated logo 
const questions = [
    // generates questions for user shape choice
    {
        name: 'shape',
        message: 'Choose a shape for your logo.',
        type: 'list',
        choices: ['circle', 'square', 'triangle'],
    },
    // generates question for user color entry method
    {
        name: 'shapeColorFormat',
        message: 'Choose a color format for the color of the shape.',
        type: 'list',
        choices: ['color name', 'hexadecimal']
    },
    // color names entry, validates if entry matches color array
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color for your shape:',
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
    // hexadecimal color entry, validates if entry matches that of hex RegEx
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
    //requires user to only enter 3 characters and will return a message if more than that
    {
        type: 'input',
        name: 'text',
        message: 'Enter 3 characters:',
        validate: (answer) => {
            if (answer.length > 3) {
                return console.log('\n Sorry, text must be 3 characters or less.');
            }
            return true;
        }
    },
    // generates question for user color entry method
    {
        name: 'textColorFormat',
        message: 'Choose a color format for the color of the text:',
        type: 'list',
        choices: ['color name ', 'hexadecimal']
    },
    // color names entry, validates if entry matches color array
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color for your text:',
        when: (answers) => {
            if(answers.textColorFormat === 'color name ') {
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
    // hexadecimal color entry, validates if entry matches that of hex RegEx
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

 // function pulls from its respected shape folder to generate a shape depending on user choice
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

// function generates a new svg file using inquirer 
function createLogo(response) {
    const svg = shapeOption(response);
    fs.writeFile(fileName, svg, ()=> console.log('Generated logo.svg'))
}

// function to start question prompts, generate logo and console logs any errors
function questionSet() {
    inquirer.prompt(questions).then((response) => {
        createLogo(response);
    })
    .catch(err => {
        console.log(err)
    });
}
questionSet();