/**
 * Classes
 * Class Inheritance, From Expressions
 * Support for mixin-style inheritance by extending from expressions yielding function objects. 
 * [Notice: the generic aggregation function is usually provided by a library like this one, of course]
 * http://es6-features.org/#ClassInheritanceFromExpressions
 * 
 * Getter/Setter
 * Getter/Setter also directly within classes 
 * (and not just within object initializers, as it is possible since ECMAScript 5.1).
 * http://es6-features.org/#GetterSetter
 */

const aggregation = (baseClass, ...mixins) => { 
    let base = class _Combined extends baseClass { 
        constructor(...args) { 
            super(...args)
            mixins.forEach(mixin => { 
                mixin.prototype.initializer.call(this)
            })
        }
    }
    let copyProps = (target, source) => {
        Object.getOwnPropertyNames(source)
            .concat(Object.getOwnPropertySymbols(source))
            .forEach((prop) => {
            if (prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
                return
            Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop))
        })
    }
    mixins.forEach((mixin) => {
        copyProps(base.prototype, mixin.prototype)
        copyProps(base, mixin)
    })
    return base
}

class Colored { 
    initializer() { this._color = "white"; }
    // Getter
    get color() { return this._color; }
    // Setter
    set color(v) { this._color = v; }
}

class ZCoord { 
    initializer() { this._z = 0; }
    // Getter
    get z() { return this._z; }
    // Setter
    set z(v) { this._z = v; }
}

class Shape { 
    constructor(x, y) { this._x = x; this._y = y; }
    // Getter
    get x() { return this._x; }
    // Setter
    set x(v) { this._x = v; }
    // Getter
    get y() { return this._y; }
    // Setter
    set y(v) { this._y = v; }
}

class Rectangle extends aggregation(Shape, Colored, ZCoord) { }

let rect = new Rectangle(7, 42);
rect.z = 1000;
rect.color = 'blue';
console.log({ rect });
console.log(rect.x, rect.y, rect.z, rect.color);