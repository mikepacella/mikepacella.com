var wordlist = {
  "1": ["the", "said", "it", "she", "my", "all", "that", "and", 
    "to", "in", "his", "of", "be", "for", "a", "I", "was", "but", 
    "on", "go", "you", "he", "is", "they", "me", "can" ]
  ,"2": ["no", "some", "not", "with", "so", "day", "like", "one",
    "out", "that", "than", "her", "up", "are", "your", "when",
    "we", "will", "have", "get", "what", "mother", "thing", "him",
    "look", "come", "do"]
};

exports.allLists = Object.keys(wordlist).sort();

exports.getList = function(listNumber) {
  return wordlist[listNumber];
}