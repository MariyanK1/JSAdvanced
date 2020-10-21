/*

Your Task
Write a Forum class, which supports the described functionality below.

Functionality

constructor()
Should have these 3 private properties:
users - empty array
questions -  empty array
id  -  number with initial value 1


register({username}, {password}, {repeatPassword}, {email})
This function should register new user and add it to the users array.
If one of the passed parameters is empty string (""),  this function should throw an error with the following message
"Input can not be empty"
If password is different from the repeat password, an error with the following message should be thrown:
"Passwords do not match"
If an user with such username or email is already registered, an error with the following message should be thrown:
"This user already exists!"
If registration is successful the function should return the following message:
"{username} with {email} was registered successfully!"


login({username}, {password})
This function should log in an existing user.
If there is no registered user with that username, an error with the following message should be thrown:
"There is no such user"
If the username and the password match with those of a registered user, this function should return the following message:
"Hello! You have logged in successfully"
logout({username}, {password})
This function should log out a logged user.
If there is no registered user with that username, an error with the following message should be thrown:
"There is no such user"
If the username and the password match with those of a registered user, this function should return the following message:
"You have logged out successfully"

postQuestion({username}, {question})
This function should post a new question with id, equal to the private field's id value .Every time a new question is added the id is incremented.
If there is no user with that username, or he isn't logged in, an error with the following message should be thrown:
"You should be logged in to post questions"
If the question is equal to  empty string (""), an error with the following message should be thrown:
"Invalid question"
If a question can be posted, you should add it to the questions array and return the following message:
"Your question has been posted successfully"



postAnswer({username}, {questionId}, {answer})
This function should post an answer to the question with the given id.
If there is no user with that username, or he isn't logged in, an error with the following message should be thrown:
"You should be logged in to post answers"
If the answer is equal to  empty string (""), an error with the following message should be thrown:
"Invalid answer"
If there is no question with the given id, an error with the following message should be thrown:
"There is no such question"
The function should return the following message:
"Your answer has been posted successfully"

showQuestions()
This function should return a sting with all the questions and their answers in the following format:
"Question {id} by {username}: {question}
---{username}: {answer}
Question {id} by {username}: {question}
---{username}: {answer}
---{username}: {answer}
. . . "

*/

class Forum {
    constructor() {
        this._users = [];
        this._questions = [];
        this._id = 1;
        this.loggedUsers = [];
    }

    register(username, password, repeatPassword, email) {
        let userExist = this._users.find((o) => { o.username === username || o.email === email });

        if (!username || !password || !repeatPassword || !email) {
            throw Error("Input can not be empty");
        }

        if (password !== repeatPassword) {
            throw Error("Passwords do not match");
        }

        if (userExist) {
            throw Error("This user already exists!");
        }

        this._users.push({ username, email, password });
        
        return `${username} with ${email} was registered successfully!`
    }

    login(username, password) {
        let userExist = this._users.find((o) => { return o.username === username && o.password === password });

        if (userExist) {
            this.loggedUsers.push(username);
            return "Hello! You have logged in successfully"
        }

        throw Error("There is no such user");
    }

    logout(username, password) {
        let userExist = this._users.find((o) => { return o.username === username && o.password === password });

        if (userExist) {
            this.loggedUsers.splice(this.loggedUsers.indexOf(username), 1);
            return "You have logged out successfully";
        }

        throw Error("There is no such user");
    }

    postQuestion(username, question) {
        let findUser = this._users.find((x) => { return x.username === username });
        let loggedIn = this.loggedUsers.indexOf(username);

        if (!findUser || loggedIn < 0) {
            throw Error("You should be logged in to post questions");
        }

        if (!question) {
            throw Error("Invalid question");
        }

        this._questions.push({ question, id: this._id, username, answers: [] });
        this._id++;

        return `Your question has been posted successfully`;
    }


    postAnswer(username, questionId, answer) {
        let findUser = this._users.find((x) => { return x.username === username });
        let loggedIn = this.loggedUsers.indexOf(username);
        let answerExist = this._questions.find((o) => o.id === questionId);

        if (!findUser || loggedIn < 0) {
            throw Error("You should be logged in to post answers");
        }

        if (!answer) {
            throw Error("Invalid answer");
        }

        if (!answerExist) {
            throw Error("There is no such question");
        }

        answerExist.answers.push({ answer, username });

        return "Your answer has been posted successfully";
    }

    showQuestions() {
        let result = [];
        for (const question of this._questions) {
            result.push(`Question ${question.id} by ${question.username}: ${question.question}`);

            for (const answer of question.answers) {
                result.push(`---${answer.username}: ${answer.answer}`);
            }
        }
        return result.join('\n')
    }

}
