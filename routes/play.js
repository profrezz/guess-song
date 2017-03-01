module.exports = function (app) {
    // Play page
    app.get('/en/play', function (req, res) {
        console.log(req)
        res.render('play/index', { title: 'Play Play Play!! - Guess Word ', language: 'en' })
    });
    app.get('/th/play', function (req, res) {
        console.log(req)
        res.render('play/index', { title: 'เล่นแม่ม - Guess Word ', language: 'th' })
    });

    // Play Insert
    app.get('/en/play/Create', function (req, res) {
        console.log(req)
        res.render('play/play_insert', { title: 'Create New Stuff - Guess Word ', language: 'en' })
    });
    app.get('/th/play/Create', function (req, res) {
        console.log(req)
        res.render('play/play_insert', { title: 'สรรสร้างสิ่งที่น่าสนใจ - Guess Word ', language: 'th' })
    });

}
