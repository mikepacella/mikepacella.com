module.exports = function(app, models) {
  this.models = models;
  app.get("/", index);
  app.get("/eeds", eeds);
  app.get("/eeds/word-list/:id", eedsById);
  app.get("/skeleton", 
    function(req, res){
      res.render('skeleton', {title: ['Skeleton']});
    }
  );
}

var index = function(req, res){
  res.render('index', { title: [this.models.appconfig.title] });
};

var eeds = function(req, res) {
  res.render('eedslists', { 
    title: [this.models.appconfig.title,
      'EEDS Listing'],
    wordlists: this.models.eedlist.allWordLists });
}

var eedsById = function(req, res){
  res.render('eedslists-view', { 
    params: req.params,
    title: [this.models.appconfig.title,
      'EEDS Listing',
      'List ' + req.params.id],
    wordlist: this.models.eedlist.getWordList(req.params.id) 
  }); 
}