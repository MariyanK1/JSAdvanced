/*
Your Task
Implement the following classes: Pet, Cat, Dog.

Class Pet 
constructor(owner, name)
Should have these 3 properties:
⦁	owner – string; 
⦁	name – string;
⦁	comments – array;
addComment(comment)
This function should receive single comment like string, add it to the comments array and return a message:
"Comment is added."
If comment is already added to the comments array throw an error with:
"This comment is already added!"
feed()
This function should return a simple message:
"{ name } is fed"
toString()
This function should return string:
"Here is { owner }'s pet { name }." 
If there are any comments then add on a new line:
"Special requirements: { comment1 }, { comment2 }, { comment3 ...}"

Class Cat
Class Cat inherits class Pet.
constructor( owner, name, insideHabits, scratching )
Should have these 4 properties:
⦁	owner – string,  
⦁	name – string, 
⦁	insideHabits – string,
⦁	scratching – boolean,
feed()
This function should inherit the feed() method of class Pet and extend the  returned message adding this at the same line at the end:
", happy and purring."
toString()
This function should extend the toString() method of class Pet, returning the message with some more lines at the end which are:
"Main information:
{ name } is a cat with { insideHabits }"
And if scrathing prоperty is true  you should add this at the end: 
", but beware of scratches."  
Note:  For more information see the examples below! 

Class Dog
Class Dog inherits class Pet.
constructor(owner, name, runningNeeds, trainability)
Should have these 4 properties:
⦁	owner – string,  
⦁	name – string, 
⦁	runningNeeds – string
⦁	trainability – string 
feed()
This function should inherit the feed() method of class Pet and extend the returned message adding this at the end:
", happy and wagging tail."
toString()
This function should extend the toString() method of class Pet returning the message with some more lines at the end which are:
"Main information:
{ name } is a dog with need of { runningNeeds }km running every day and { trainability } trainability."
Note:  For more information see the examples below! 

Submission
Submit your solveClasses function.

*/


function solveClasses() {
    class Pet {
        constructor(owner, name) {
            this.owner = owner;
            this.name = name;
            this.comments = [];
        }

        addComment(comment) {
            if (this.comments.includes(comment)) {
                throw Error("This comment is already added!");
            }
            this.comments.push(comment);
            return "Comment is added.";
        }

        feed() {
            return `${this.name} is fed`;
        }

        toString() {
            if (this.comments.length <= 0) {
                return `Here is ${this.owner}'s pet ${this.name}.`
            }
            return `Here is ${this.owner}'s pet ${this.name}.\nSpecial requirements: ${this.comments.join(', ')}`
        }

    }

    class Cat extends Pet {
        constructor(owner, name, insideHabits, scratching) {
            super(owner, name);
            this.insideHabits = insideHabits;
            this.scratching = scratching;
        }

        feed() {
            return super.feed() + ", happy and purring.";
        }

        toString() {
            let result = [super.toString(), 'Main information:', `${this.name} is a cat with ${this.insideHabits}`];
            if (this.scratching) {
                result[2] += ", but beware of scratches.";
            }

            return result.join('\n');
        }
    }

    class Dog extends Pet {
        constructor(owner, name, runningNeeds, trainability) {
            super(owner, name);
            this.runningNeeds = runningNeeds;
            this.trainability = trainability;
        }

        feed() {
            return super.feed() + ", happy and wagging tail.";
        }

        toString() {
            let result = [super.toString(), `Main information:`,
            `${this.name} is a dog with need of ${this.runningNeeds}km running every day and ${this.trainability} trainability.`]

            return result.join('\n')
        }
    }

    return {
        Pet,
        Cat,
        Dog
    }
}

let classes = solveClasses();
let pet = new classes.Pet('Ann', 'Merry');
console.log(pet.addComment('likes bananas'));
console.log(pet.addComment('likes sweets'));
console.log(pet.feed());
console.log(pet.toString());

let cat = new classes.Cat('Jim', 'Sherry', 'very good habits', true);
console.log(cat.addComment('likes to be brushed'));
console.log(cat.addComment('sleeps a lot'));
console.log(cat.feed());
console.log(cat.toString());

let dog = new classes.Dog('Susan', 'Max', 5, 'good');
console.log(dog.addComment('likes to be brushed'));
console.log(dog.addComment('sleeps a lot'));
console.log(dog.feed());
console.log(dog.toString());

