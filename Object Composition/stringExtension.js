(function solve() {

    String.prototype.ensureStart = function (str) {
        if (!this.toString().startsWith(str)) {
            return `${str}${this.toString()}`;
        }

        return this.toString();
    }

    String.prototype.ensureEnd = function (str) {
        if (!this.toString().endsWith(str)) {
            return `${this.toString()}${str}`;
        }

        return this.toString();
    }

    String.prototype.isEmpty = function () {
        if (this.length < 1) {
            return true;
        }

        return false;
    }

    String.prototype.truncate = function (nChars) {
        if (nChars <= 3) {
            return ".".repeat(nChars);
        }

        if (this.toString().length <= nChars) {
            return this.toString();
        }

        let lastIndex = this.toString().substr(0, nChars - 2).lastIndexOf(' ');

        if (lastIndex !== -1) {
            return this.toString().substr(0, lastIndex) + "...";
        } else {
            return this.toString().substr(0, n - 3) + "...";
        }
    }

    String.format = function (input) {
        let i = 0;
        while (true) {
            if (input.includes(i)) {
                input = input.replace(`{${i}}`, `${arguments[i + 1] ? arguments[i + 1] : `{${i}}`}`);
                i++;
                continue;
            }

            break;
        }

        return input.toString();
    }
})()



/*
Extend the build-in String object with additional functionality. Implement the following functions:

⦁ensureStart(str) - append str to the beginning of a string, only if it’s not already present

⦁ensureEnd(str) - append str to the end of a string, only if it’s not already present

⦁isEmpty() - return true if the string is empty, false otherwise

⦁truncate(n) - truncates the string to n characters by removing words and appends an ellipsis (three periods) to the end.
If a string is less than n characters long, return the same string.
If it is longer, split the string where a space occurs and append an ellipsis to it so that the total length is less than or equal to n.
If no space occurs anywhere in the string, return n - 3 characters and an ellipsis. If n is less than 4, return n amount of periods.

⦁format(string, …params) - static method to replace placeholders with parameters. A placeholder is a number surrounded by curly braces.
If parameter index cannot be found for a certain placeholder, do not modify it. Note static methods are attached to the String object instead of it’s prototype.
See the examples for more info.
Note strings are immutable, so your functions will return new strings as a result.

Examples
let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
  'quick', 'brown');
str = String.format('jumps {0} {1}',
  'dog');	
*/
