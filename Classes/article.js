/*
Your Task
Write an Article Class, which supports the described functionality below.

Functionality

constructor(title, creator)
Should have these 4 properties:
title - string
creator - string
comments - private property (empty array by default)
likes - private property (empty array by default) 
Note: Choose the most helpful structure for the likes array for you.

Getter likes ()
This function should print the likes in the following format:
If there are no likes, the following message should be returned:
"{title} has 0 likes"
If there is one like, the following message should be returned:
"{username} likes this article!"
Otherwise, the following message should be returned:
"{username of the first person that liked the article} and {likes} others like this article!"


like (username)
This function should increase the likes of the article. 
If the username, has already liked the article, an error with the following message should be thrown:
"You can't like the same article twice!"
If this user is the creator of the article, an error with the following message should be thrown:
"You can't like your own articles!"
Otherwise, the following message should be returned:
"{username} liked {title}!"

dislike (username)
This function should decrease the likes of the article.
If the username, didn't like the article in the first place, an error with the following message should be thrown:
"You can't dislike this article!"
Otherwise, the following message should be returned:
"{username} disliked {title}"

comment (username, content, id)
This function should make a new comment or reply to a comment with a given id.
If the given id is equal to undefined or there is not a comment with that id, you should make a new comment and add it to the comments array.
Every comment should have an id (1, 2, 3 ...) which represents the order the comments are submitted.
If the comment is made successfully, the following message should be returned:

"{username} commented on {title}"
If there is a comment with the given id, you should add a reply to it.
The reply should have an id (1.1, 1.2 ...) constructed from the id of the comment and the order in which the replies are submitted.
If the reply is made successfully the following message should be returned:
"You replied successfully"
Comments should have the following structure:
{Id, Username, Content, Replies}
Replies should have the following structure:
{Id, Username, Content}


toString(sortingType)
This function should print the article information in the following format:
If the sorting type is 'asc' - The comments and replies should be sorted by id in ascending order
If the sorting type is 'desc' - The comments and replies should be sorted by id in descending order
If the sorting type is 'username' - The comments and replies should be sorted by username in ascending order
"Title: {title}
Creator: {creator}
Likes: {lik	es}
Comments:
-- {id}. {username}: {content}
-- {id}. {username}: {content}
--- {replyId}. {username}: {content}
--- {replyId}. {username}: {content} 
-- {id}. {username}: {content}
..."

Submission
Submit only your Article class.
*/


class Article {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        switch (this._likes.length) {
            case 0:
                return `${this.title} has 0 likes`;

            case 1:
                return `${this._likes[0]} likes this article!`;

            default:
                return `${this._likes[0]} and ${this._likes.length - 1} others like this article!`
        }
    }

    like(username) {
        if (username === this.creator) {
            throw Error("You can't like your own articles!");
        }

        if (this._likes.includes(username)) {
            throw Error("You can't like the same article twice!");
        }

        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw Error("You can't dislike this article!");
        } else {
            const i = this._likes.indexOf(username);

            this._likes.splice(i, 1);
            return `${username} disliked ${this.title}`
        }
    }

    comment(username, content, id) {
        let idPresent = this._comments.find((c) => { return c.id === id });

        if (!idPresent) {
            this._comments.push({ id: this._comments.length + 1, username, content, replies: [] });
            return `${username} commented on ${this.title}`
        } else {
            idPresent.replies.push({ id: `${id}.${idPresent.replies.length + 1}`, username, content });
            return `You replied successfully`;
        }
    }

    toString(sortingType) {
        const sortFunctions = {
            asc: (a, b) => {
                return a.id - b.id;
            },

            desc: (a, b) => {
                return b.id - a.id;
            },

            username: (a, b) => {
                return a.username.localeCompare(b.username);
            }
        }
        const sortIt = sortFunctions[sortingType];

        let resultString = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:\n`;

        let sortedComments = this._comments.slice().sort(sortIt);

        for (const comment of sortedComments) {
            resultString += `-- ${comment.id}. ${comment.username}: ${comment.content}\n`;
            let sortedReplies = comment.replies.sort(sortIt);

            for (const reply of sortedReplies) {
                resultString += `--- ${reply.id}. ${reply.username}: ${reply.content}\n`
            }
        }
        return resultString.trim()
    }
}

let art = new Article("My Article", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
