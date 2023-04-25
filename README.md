# Personal SVG Logo Generator

![https://img.shields.io/badge/license-MIT-green](https://img.shields.io/badge/license-MIT-green)

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Code Example](#code-example)
* [Walkthrough](#walkthrough)
* [Usage](#usage)
* [License](#license)
* [Questions](#questions)



## Description
An easy to use command line interface applications that creates a personal SVG logo based on just answering a few command line questions. The application is capable of creating a circle, square, or triangle shape with an option of up to three characters. Options include choosing the color of the shape and the text by either entering the color text or the hexadecimal color code.

## Installation
Installation steps of this application would require forking this repo and cloning it to your local machine to run. After forking, open it with your preferred code application, or run it directly from your command line.

## Code Example
Below is an example of the shape.test.js file function that generates a test which results in the generated shape passing.
```JS
// This code calls and compares from a different file named circle.js
const Circle = require('../circle.js');


describe('Circle', () => {
    it('should return a logo with user choice of shape color, text, and text color', () => {
        const circle = new Circle('blue','JAB','green');
        expect(circle.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="blue"/>
            <text x="145" y="120" font-size="70" text-anchor="middle" fill="green">JAB</text>
        </svg>
        `);
    });
});
```
## Walkthrough 
Bellow is a walkthrough clip

![Gif walkthrough](./lib/images/walkthrough-clip.gif)

For full video follow this link:
[Walkthrough Video](https://drive.google.com/file/d/14UQJPJBKa2sD4RZ_sbFJNKHDpAinv7Ne/view)

## Usage
After cloning this repo to your local machine, open it with your preferred application or start directly from your command line. You will need to run the "node index.js" command to get started. Once initiated, the application will give a series of prompts with questions. Note that all questions must be answered for the application to work correctly. At the end of the prompts you will receive a message acknowledging that a new SVG logo has been generated.



## License
![https://img.shields.io/badge/license-MIT-green](https://img.shields.io/badge/license-MIT-green)

For additional information on this license please use the provided link
https://choosealicense.com/licenses/mit/

## Questions
Github: https://github.com/jonnyboy808


