/**
 * Classes
 * Class Inheritance
 * More intuitive, OOP-style and boilerplate-free inheritance.
 * http://es6-features.org/#ClassInheritance
 * 
 * Base Class Access
 * Intuitive access to base class constructor and methods
 * http://es6-features.org/#BaseClassAccess
 * 
 * Static member
 * Simple support for static class members
 * http://es6-features.org/#StaticMembers
 */

import Shape from './definition.js';

class Rectangle extends Shape { 
    constructor(id, x, y, w, h) { 
        super(id, x, y)
        this.width = w
        this.height = h
    }
    // Base Class Access
    toString() { 
        return `Rectangle > ${super.toString()}`;
    }
    // Static member
    static defaultRectangle() { 
        return new Rectangle('default', 0, 0, 100, 100);
    }
}

class Circle extends Shape { 
    constructor(id, x, y, r) { 
        super(id, x, y)
        this.radius = r
    }
    // Base Class Access
    toString() { 
        return `Circle > ${super.toString()}`;
    }
    // Static member
    static defaultCircle() { 
        return new Circle('default', 10, 10, 110);
    }
}
// Inheritance
const shape = new Shape(1, 2, 3)
const rectangle = new Rectangle(1, 2, 3, 5, 6)
const circle = new Circle(1, 2, 3, 4);
// Base class access
console.log({ shape, rectangle, circle });
console.log(shape.toString());
console.log(rectangle.toString());
console.log(circle.toString());
// Static class member
const defRect = Rectangle.defaultRectangle();
const defCircle = Circle.defaultCircle();
console.log({defRect, defCircle});