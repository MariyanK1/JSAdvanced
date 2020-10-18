/*
Your need to create several classes for Posts.

Implement the following classes:
⦁	Post, which is initialized with title (String) and content (String)
⦁	The 2 arguments should be public members
⦁	The Post class should also have toString() function which returns the following result:
"Post: {postTitle}"
"Content: {postContent}"

⦁	SocialMediaPost, which inherits the Post class and should be initialized with 2 additional arguments - likes (Number) and dislikes (Number). The class should hold:
⦁	comments(Strings) -  an array of strings
⦁		a function, which adds comments to that array
⦁	The class should extend the toString() function of the Post class, and should return the following result:
"Post: {postTitle}"
"Content: {postContent}"
"Rating: {postLikes - postDislikes}"
"Comments:"
" * {comment1}"
" * {comment2}"
. . .
In case there are no comments, return information only about the title, content and rating of the post.

⦁	BlogPost, which inherits the Post class:
⦁	The BlogPost class should be initialized with 1 additional argument - views(Number).
⦁	The BlogPost class should hold 
- view() - which increments the views of the object with 1, every time it is called. The function should return the object, so that chaining is supported.
⦁	The BlogPost class should extend the toString() function of the Post class, and should return the following result:
"Post: {postTitle}"
"Content: {postContent}"
"Views: {postViews}"
*/


function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }


    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let result = [super.toString(), `Rating: ${this.likes - this.dislikes}`];

            if (this.comments.length > 0) {
                result.push('Comments:')
                this.comments.forEach((el) => result.push(` * ${el}`));
            }

            return result.join('\n');
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = Number(views);
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            return `${super.toString()}\nViews: ${this.views}`
        }
    }


    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}

let classes = solve();

let test = new classes.BlogPost("TestTitle", "TestContent", 5);

test.view().view().view();

console.log(test.toString())
