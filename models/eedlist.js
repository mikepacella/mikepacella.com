var wordlist = {
  "1": ["the", "said", "it", "she", "my", "all", "that", "and", 
    "to", "in", "his", "of", "be", "for", "a", "I", "was", "but", 
    "on", "go", "you", "he", "is", "they", "me", "can" ]
  ,"2": ["no", "some", "not", "with", "so", "day", "like", "one",
    "out", "that", "than", "her", "up", "are", "your", "when",
    "we", "will", "have", "get", "what", "mother", "thing", "him",
    "look", "come", "do"]
  ,"3": ["don't", "every", "down", "got", "would", "time", "love",
    "went", "father", "had", "see", "dog", "home", "little", "if",
    "just", "baby", "way", "there", "want", "too", "could", "good",
    "this"]
  ,"4": ["walk", "came", "were", "ask", "back", "now", "friend", 
    "cry", "oh", "Mr.", "bed", "where", "every", "play", "let",
    "long", "here", "how", "make", "big", "from", "put", "read",
    "them", "as", "Miss"]
  ,"5": ["any", "right", "nice", "well", "old", "night", "may", "about",
    "think", "new", "know", "help", "grand", "boy", "take", "eat",
    "body", "school", "house", "morning", "yes", "after", "never", "or"]
  ,"6": ["self", "try", "has", "side", "again", "over", "always",
    "thank", "why", "saw", "around", "give", "kid", "mom", "by",
    "Mrs.", "off", "sister", "made", "tell", "more", "find", "first",
    "sleep", "while", "fun"]
  ,"7": ["ran", "dear", "next", "only", "says", "ride", "say",
    "soon", "man", "fast", "am", "sure", "pet", "took", "lady",
    "better", "still", "began", "teacher", "dad", "found", "through",
    "stop", "head", "keep"]
  ,"8": ["watch", "because", "gave", "does", "until", "about", "hurry",
    "their", "door", "great", "car", "ever", "hand", "our", "us",
    "pull", "ball", "each", "hard", "push", "stay", "should", "room",
    "sat"]
  ,"9": ["mama", "use", "turn", "blue", "lot", "papa", "thought",
    "bath", "mean", "sit", "together", "floor", "feel", "brother",
    "best", "wait", "tomorrow", "surprise", "shop", "own", "best"]
};

exports.allWordLists = Object.keys(wordlist).sort();

exports.getWordList = function(listNumber) {
  return wordlist[listNumber];
}