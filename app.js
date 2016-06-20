
/**
 * Module dependencies.
 */
var express = require('express');
var app = express();
var routes = require('./routes/IndexServerRoute');
var api = require('./models/post-server-model');
var partials = require('express-partials');
var http = require('http');
var path = require('path');

// Configuration

//app.use(partials());

app.configure(function(){
  app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');
  app.set('view engine', 'jade');
//app.set('view options', {
//  layout: false
//});
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/angular'));
  app.use(app.router);
});


app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.IndexServerRoute);
app.get('/partials/:name', routes.partials);

// JSON API

app.get('/api/posts', api.posts);

app.get('/api/post/:id', api.post);
app.post('/api/post', api.postAdd);
app.put('/api/post/:id', api.postEdit);
app.delete('/api/post/:id', api.postDelete);

// redirect all others to the index (HTML5 history)
app.get('*', routes.IndexServerRoute);

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('ErrorView', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('ErrorView', {
    message: err.message,
    error: {}
  });
});

app.set('port', process.env.PORT || 3000);

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
