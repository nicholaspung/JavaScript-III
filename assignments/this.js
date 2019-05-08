/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global binding

        When using "this" to reference the window/global binding used in the global scope, "this" points towards the 
        Javascript console/environment. This means that you are pointing towards the "Window" object, which houses all 
        the Javascript methods/objects/etc. within that environment. It's generally not recommended to ever used this 
        binding since you would likely override some key function used in your regular Javascript programming.

* 2. Implicit binding

        Using "this" as an implicit binding references the object that "this" is contained in. It lets you access properties
        from the same object because "this" references to the object and that scope.

* 3. New binding

        "This" is used for new binding to reference a specific instance of the object that is created and returned by the
        constructor function. It references the properties specified in the new binding towards the object the new binding
        is referencing.

* 4. Explicit binding

        Using ".call()", ".apply()", ".bind()" creates an explicit binding, where "this" references the object being passed
        through the function. It's called explicit because it is used to insert an object explicitly in a function to be use, 
        rather than adding the function to the object.

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

this.console.log("This is a Window Binding using 'this'");

// Principle 2

// code example for Implicit Binding

class Example {
    constructor(apple, bananas) {
        this.apple = apple;
        this.bananas = bananas;
    }
}

// Principle 3

// code example for New Binding

const exercise = new Example('Gala Apples', 'Foster Farm Bananas');
console.log(exercise);

// Principle 4

// code example for Explicit Binding

function speakFruits(saying) {
    return console.log(`${this.apple} says ${saying}`);
}

speakFruits.call(exercise, 'JALA');