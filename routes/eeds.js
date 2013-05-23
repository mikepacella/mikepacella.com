module.exports = function(app, models) {
  app.get("/eeds", eeds);
  app.get("/eeds/word-list/:id", eedsById);
  app.get("/eeds/practice-word-list/:id/:idx?", eedPractice);
}

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

var eedPractice = function(req, res) {
  if (!req.session.wordListConfig) {
    req.session.wordListConfig = req.params.id;
  } else if (req.session.wordListConfig != req.params.id) {
    req.session.wordListConfig = req.params.id;
    req.session.words = null;
  }
  if (!req.session.words) {
    req.session.words = this.models.eedlist.getWordList(req.params.id);
  }
  if (!req.params.idx || isNaN(req.params.idx) || req.params.idx >= req.session.words.length) {
    req.params.idx = 0;
  }

  res.render('eedslists-slide', { 
    params: req.params,
    title: [this.models.appconfig.title,
      'EEDS Practice'],
    word: req.session.words[req.params.idx],
    numWords: req.session.words.length
  }); 
}