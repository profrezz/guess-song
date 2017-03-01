var mysql = require('mysql')
var host = 'localhost',
    user = 'root',
    password = '',
    database = 'guesssong';

String.format = function() {
    var s = arguments[0];
    for (var i = 0; i < arguments.length - 1; i++) {       
        var reg = new RegExp("\\{" + i + "\\}", "gm");             
        s = s.replace(reg, arguments[i + 1]);
    }
    return s;
}

function createConnection() {
    return mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : '',
            database : 'guesssong'
        });
}
module.exports = function (app) {

    // home page
    app.get('/api/getYoutubeLinkByCode', function (req, res) {
        var connection = createConnection();
        var query = req.param('q');

        connection.connect()
        var result;
        var sqlQuery = String.format("SELECT * FROM youtube WHERE Code = '{0}' ",query);
        connection.query(sqlQuery, function (err, rows, fields) {
        if (err) throw err
        result = JSON.stringify(rows);
        console.log('The solution is: ', result )

        connection.end()
        res.setHeader('Content-Type', 'application/json');
        // res.send(JSON.stringify({}));
        res.send(result);

        })
        
    });

    app.post('/api/setYoutubeLink', function (req, res) {
        var youtubelink = req.body.youtubelink;
        var youtubeCode = req.body.youtubecode;
        var title = req.body.title;
        var artist = req.body.artist;
        var language = req.body.language;
        var createby = 'Chin';

        var connection = createConnection();
        connection.connect();
        var result;
        var sqlQuery = String.format("INSERT INTO `youtube` (`id`, `code`, `link`, `title`, `artist`, `language`, `likecount`, `dislikecount`, `createby`, `createdate`, `updateby`, `updatedate`, `isvalid`) VALUES (NULL, '{0}', '{1}', '{2}', '{3}', '{4}', '1', '0', '{5}', CURRENT_TIMESTAMP, NULL, CURRENT_TIMESTAMP, '1')", youtubeCode, youtubelink, title, artist, language, createby);
        connection.query(sqlQuery, function (err, result) {
        if (err) throw err
        //result = JSON.stringify(rows);
        console.log('Create status :', result )
        connection.end()
         res.setHeader('Content-Type', 'application/json');
         res.send({'status' : "done" });

        })
    });

}

