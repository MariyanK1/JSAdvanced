/*

Write a class Movie, which implements the following functionality:

Functionality
constructor ( movieName, ticketPrice )
Receives 2 parameters at initialization of the class - movieName and ticketPrice.  

Should have these 3 properties:
movieName – property of type string;
ticketPrice – property of type number, may come as a string;
screenings– initially an empty array;

Hint: Here you can add more properties to help you finish the task.  

newScreening(date, hall, description)

The date, hall and description are of type string. 

⦁	Check if there is already entered screening with the same date and hall and  throw an Error:
"Sorry, {hall} hall is not available on {date}"

⦁	Otherwise this function should add the screening to the screenings array and return:
"New screening of {movieName} is added."

endScreening(date, hall, soldTickets) 
Check if the given screening array has a screening with the given date and hall, if NOT throw an Error:
"Sorry, there is no such screening for {movieName} movie."

⦁	Otherwise  calculate the current screening profit of sold tickets, add the profit to the total profit for the movie, also add the sold tickets count to the total sold movie tickets, delete the screening from the screenings array and return:
"{movieName} movie screening on {date} in {hall} hall has ended. Screening profit: {currentProfit}"

toString ()
In the end is the toString() method where we return the full information of the movie.
At the first line:
"{movieName} full information:" 

⦁	On the second two lines comes the collected profit, fixed to 0 and count of all sold tickets: 
"Total profit: {profit}$
Sold Tickets: {soldTickets}"

⦁	If there are screenings into the screening array, add on new line:
"Remaining film screenings:"
 Sort screenings alphabetically by hall name and add a message for each of them on new line:
"{hall} - {date} - {desrtiption}"

⦁	If there are no screenings into screenings array add this line to the returned message:
"No more screenings!"

*/


class Movie {
    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.screenings = [];
        this.totalProfit = 0;
        this.ticketsCount = 0;
    }

    newScreening(date, hall, description) {
        let obj = { date, hall, description };
        let screen = this.screenings.find(
            (o) => o.date === date && o.hall === hall
        );
        if (!screen) {
            this.screenings.push(obj);
            return `New screening of ${this.movieName} is added.`;
        } else {
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
        }
    }

    endScreening(date, hall, soldTickets) {
        let screen = this.screenings.find(
            (o) => o.date === date && o.hall === hall
        );
        if (!screen) {
            throw new Error(
                `Sorry, there is no such screening for ${this.movieName} movie.`
            );
        } else {
            let currentProfit = Number(soldTickets) * Number(this.ticketPrice);
            this.totalProfit += currentProfit;
            this.ticketsCount += Number(soldTickets);
            let idx = 0;
            for (let i = 0; i < this.screenings.length; i++) {
                if (
                    this.screenings[i].date === date &&
                    this.screenings[i].hall === hall
                ) {
                    idx = i;
                    break;
                }
            }
            this.screenings.splice(idx, 1);
            return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit}`;
        }
    }

    toString() {
        let result = [
            `${this.movieName} full information:`,
            `Total profit: ${this.totalProfit.toFixed(0)}$`,
            `Sold Tickets: ${this.ticketsCount.toFixed(0)}`,
        ];
        if (this.screenings.length > 0) {
            result.push(`Remaining film screenings:`);
            let sorted = this.screenings.sort((a, b) => a.hall.localeCompare(b.hall));
            for (const s of sorted) {
                result.push(`${s.hall} - ${s.date} - ${s.description}`);
            }
        } else {
            result.push(`No more screenings!`);
        }
        return result.join("\n");
    }
}

let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 3, 2020', 'Aaz', `regular1`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 3, 2020', 'Main', 78));
console.log(m.toString());

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());

