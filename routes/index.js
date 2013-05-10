module.exports = function(app, models) {
  this.models = models;
  app.get("/", index);
  app.get("/:id", getListById);
}

var index = function(req, res){
  res.render('index', { title: this.models.appconfig.title,
    wordlist: this.models.eedlist.allLists});
};

var getListById = function(req, res){
  res.render('listdetails', { 
    id: req.params.id,
    title: this.models.appconfig.title,
    wordlist: this.models.eedlist.getList(req.params.id) 
  }); 
}