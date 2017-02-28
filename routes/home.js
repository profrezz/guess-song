module.exports = function (app) {

    // home page
    app.get('/', function (req, res) {
        res.redirect('/en');
    });
    app.get('/en', function (req, res) {
        console.log(req)
        res.render('index', { title: 'Home Page.  ', language: 'en' })
    });
    app.get('/th', function (req, res) {
        console.log(req)
        res.render('index', { title: 'Home Page.  ', language: 'th' })
    });
    
    // chat area
    app.get('/chat', function (req, res) {
        res.render('chat', { title: 'Shout what you think!  ' })
    });

    // about page
    app.get('/play', function (req, res) {
        res.render('play', { title: 'Choose your category  ' })
    });
}
