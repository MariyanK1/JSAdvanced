/*
The loadCommits() function should get the username and repository from the HTML textboxes with IDs "username" and "repo" and make a GET request to the Github API:
https://api.github.com/repos/<username>/<repository>/commits

Swap <username> and <repository> with the ones from the HTML:

⦁	In case of success, for each entry add a list item (<li>) in the unordered list (<ul>) with id "commits" with text in the following format:
"<commit.author.name>: <commit.message>" 

⦁	In case of an error, add a single list item (<li>) with text in the following format:
"Error: <error.status> (<error.statusText>)"


*/


function loadCommits() {
    const $usernameInput = document.querySelector('#username').value;
    const $repoInput = document.querySelector('#repo').value;
    const $ul = document.querySelector('#commits');

    const url = `https://api.github.com/repos/${$usernameInput}/${$repoInput}/commits`;


    fetch(url)
        .then(x => x.json())
        .then(data => {
            data.forEach(entry => {
                const author = entry.commit.author.name;
                const message = entry.commit.message;
                const $li = document.createElement('li');
                $li.textContent = `${author}: ${message}`;

                $ul.appendChild($li);
            })
        })
        .catch(e => {
            const $li = document.createElement('li');

            $li.textContent = e;

            $ul.appendChild($li);
        })

}
