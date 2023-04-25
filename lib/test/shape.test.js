const Square = require('../square.js');
const Circle = require('../circle.js');
const Triangle = require('../triangle.js');



describe('Square', () => {
    it('should return a logo with user choice of shape color, text, and text color', () => {
        const square = new Square('orange','WEB','pink');
        expect(square.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="orange"/>
            <text x="100" y="115" font-size="70" text-anchor="middle" fill="pink">WEB</text>
        </svg>
        `);
    });
});


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


describe('Triangle', () => {
    it('should return a logo with user choice of shape color, text, and text color', () => {
        const triangle = new Triangle('purple','CDG','blue');
        expect(triangle.render()).toEqual(`
        <svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="purple"/>
            <text x="95" y="185" font-size="70" text-anchor="middle" fill="blue">CDG</text>
        </svg>
        `);
    });
});