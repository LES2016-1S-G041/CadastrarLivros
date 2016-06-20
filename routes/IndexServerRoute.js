
/*
 * GET home page.
 */

 exports.IndexServerRoute = function(req, res) {
   res.render('index-server-view');
 };

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};
