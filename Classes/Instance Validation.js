/*
Write a class for a checking account that validates it’s created with valid parameters.

A CheckingAccount has a clientId, email, firstName, lastName. Each parameter must meet specific requirements:

⦁	clientId - Must be a string representing a 6-digit number; if invalid, throw a TypeError with the message "Client ID must be a 6-digit number"

⦁	email - Must contain at least one alphanumeric character, followed by the @ symbol, followed by one or more letters or periods; all letters must be Latin; if invalid, throw a 
TypeError with message "Invalid e-mail"

⦁	firstName, lastName - Must be at least 3 and at most 20 characters long, containing only Latin letters; 

⦁	If the length is invalid, throw a TypeError with message:
"{First/Last} name must be between 3 and 20 characters long"

⦁	 If invalid characters are used, throw a TypeError with message:
"{First/Last} name must contain only Latin characters" (replace First/Last with the relevant word)
All checks must happen in the order in which they are listed - if more than one parameter is invalid, throw an error for the first encountered.
Note that error messages must be exact.

Submit your solution containing a single class definition.
*/

class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;

        if (clientId.toString().length < 6 || clientId.toString().length > 6) {
            throw new TypeError("Client ID must be a 6-digit number");
        };

        if (!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g)) {
            throw new TypeError("Invalid e-mail");
        };

        if (firstName.length < 3) {
            throw new TypeError(`First name must be between 3 and 20 characters long`);
        };

        if (lastName.length < 3) {
            throw new TypeError(`Last name must be between 3 and 20 characters long`);
        };

        if (!firstName.match(/(\w)/g)) {
            throw new TypeError(`First name must contain only Latin characters`)
        };

        if (!lastName.match(/(\w)/g)) {
            throw new TypeError(`Last name must contain only Latin characters`)
        };

    }
}
