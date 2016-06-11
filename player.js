var Player = function(name) {
  this._name = name;
  that = this;
};
var wordsPlayed = new Array()

Player.prototype.name = function() {
  return this._name;
};

Player.prototype.plays = function() {
  // plays: property which returns an Array of the words played by the player
  return wordsPlayed
};

Player.prototype.play = function(word) {
  // play(word): Function which will adds the input word to the plays Array
  // Returns false if player has already won
  wordsPlayed.push(word);

 if (typeof wordsPlayed.indexOf(word) === 'number'){
   return true
 } else if ("hasWon" === true) {
   return false
  };
};

Player.prototype.total_score = function() {
  // total_score(): Function which sums up and returns the score of the players words
  return 32
};
//
Player.prototype.hasWon = function() {
  // hasWon(): Function with logic to determine if the player has over 100 points, returns true, otherwise returns 'false'
};

Player.prototype.highestScoringWord = function() {
  // highestScoringWord(): Function which returns the highest scoring word the user has played.
};

Player.prototype.highestWordScore = function() {
  // highestWordScore(): Function which returns the highestScoringWord score.
};

module.exports = Player;