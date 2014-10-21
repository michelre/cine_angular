var mdb = require('moviedb')('5192eb6331a3db50b6b388ae8941edc6');
var app = require('express')();

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/popular', function(req, res){
    var page = (req.query["page"]) ? req.query["page"] : 1;
    page = (req.query["page"] > 1000) ? 1000 : req.query["page"];
    mdb.miscPopularMovies({page: page}, function(err, data){
        data.total_pages = 1000;
        res.send(data)
    });
});

app.get('/search', function (req, res) {
    var query = req.query["q"];
    var page = (req.query["page"]) ? req.query["page"] : 1;
    mdb.searchMovie({query: query, page: page}, function(err, data){
        res.send(data)
    });
})

app.get("/similar/:id", function(req, res){
   var id = req.params.id;
   var page = (req.query["page"]) ? req.query["page"] : 1;
    mdb.movieSimilar({id: id, page: page}, function(err, data){
        res.send(data);
    });
});

app.get('/info/:id', function (req, res) {
    var id = req.params.id;
    mdb.movieInfo({id: id}, function(err, data){
        res.send(data);
    });
});

app.listen(3000, function () {
    console.log("Listening 3000")
});