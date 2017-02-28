module.exports = function (app) {

    // home page
    app.get('/', function (req, res) {
        res.render('index', { title: 'Home Page.  ' })
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
