const fire = firebase.auth();
const router = Sammy('#main', function () {

    this.use('Handlebars', 'hbs');

    this.get('#/home', function () {
        this.loadPartials({
            'header': '../templates/common/header.hbs',
            'footer': '../templates/common/footer.hbs',
        }).then(function () {
            this.partial('../templates/home/home.hbs');
        });
    });


    this.get('#/login', function () {
        this.loadPartials({
            'header': './templates/common/header.hbs',
            'footer': './templates/common/footer.hbs',
            'loginForm': './templates/login/loginForm.hbs'
        }).then(function () {
            this.partial('./templates/login/loginPage.hbs');
        });
    });


    this.get('#/register', function () {
        this.loadPartials({
            'header': '../templates/common/header.hbs',
            'footer': '../templates/common/footer.hbs',
            'registerForm': './templates/register/registerForm.hbs'

        }).then(function () {
            this.partial('../templates/register/registerPage.hbs');
        });
    });


    this.get('#/about', function () {
        this.loadPartials({
            'header': '../templates/common/header.hbs',
            'footer': '../templates/common/footer.hbs',
        }).then(function () {
            this.partial('../templates/about/about.hbs');
        });
    });

    this.post('/register', function (context) {
        const { email, password, repeatPassword } = context.params;

        if (password !== repeatPassword) {
            alert('Passwords must match!');
            return;
        }
        fire
            .createUserWithEmailAndPassword(email, password)
            .then(createdUser => {
                this.redirect('/login');

            })
            .catch(console.error)
    })
});

(() => {
    router.run('#/home');
})();
