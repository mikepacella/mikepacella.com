module.exports = function(app, models) {
  this.models = models;
  app.get("/users", list);
}
/*
 * GET users listing.
 */

var list = function(req, res){
  res.send("respond with a resource");
};