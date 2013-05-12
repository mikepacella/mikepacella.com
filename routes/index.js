module.exports = function(app, models) {
  this.models = models;
  app.get("/", index);
  app.get("/about", comingSoon);
  app.get("/skeleton", skeleton);
}

var index = function(req, res){
  res.render('index', { title: [this.models.appconfig.title] });
};

var skeleton = function(req, res){
  res.render('skeleton', {title: ['Skeleton']});
};


var comingSoon = function(req, res){
  res.send("coming soon");
};