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
