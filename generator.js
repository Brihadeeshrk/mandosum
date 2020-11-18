const loremIpsum = new GenerateNewText();
function GenerateNewText() {

  this.sentences =
    [
      "Come on Baby! Do the magic hand thing.",
      "I will help you. I have spoken.",
      "I can bring you in warm, or I can bring you in cold.",
      "I like those odds.",
      "I will initiate self-destruct.",
      "I’m a Mandalorian. Weapons are part of my religion.",
      "We have you 4 to 1. I like those odds.",
      "Our secrecy is our survival. Our survival is our strength.",
      "You expect me to search the galaxy for the home of this creature and deliver it to a race of enemy sorcerers?",
      "Do Not Self Destruct, We're Shooting Our Way Out.",
      "Here’s What I’m Gonna Do. I’m Gonna Walk To My Ship, With The Kid, And You’re Gonna Let It Happen.",
      "No Questions Asked, That Is The Policy, Right?",
      "This is the way.",
      "I would like to see the baby, It is Sleeping, We will all be quiet, Open the pram.",
      "Are Those X-Wings?",
      "Kill him and the Child.",
      "I'll tell you where the rest of your kind are if you give me your shiny Beskar Armour.",
      "That is not Food! Don't do that Again!",
      "We've Trapped them in the Cargo Control Area Sir.",
      "I gave you a 1000 Credits, THis was the best you could do?"
   ];
}


GenerateNewText.prototype.getRandomSentence = function() {
  let randomSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)]
	return randomSentence;
}


GenerateNewText.prototype.getParagraph = function() {
  let paragraph = "";

  let minimumCharacterLength = 300;
  let firstSentence = true;
  while (paragraph.length < minimumCharacterLength) {
    if (firstSentence) {
      paragraph = paragraph.concat(this.getRandomSentence());
      firstSentence = false;
    } else {
      paragraph = paragraph.concat(" " + this.getRandomSentence());
    }
  }
  return paragraph;
}


GenerateNewText.prototype.getAllParagraphs = function(numberOfParagraphs) {
  let allParagraphs = [];

  while (allParagraphs.length < numberOfParagraphs) {
    allParagraphs.push(this.getParagraph());
  }

  let paragraphHTML = "";
  allParagraphs.forEach(function (paragraph) {
    paragraphHTML += "<p>" + paragraph + "</p>";
  });
  return paragraphHTML;
}

module.exports = loremIpsum;