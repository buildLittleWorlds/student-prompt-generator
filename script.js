const names = ['Adam', 'Stella', 'Ashleigh', 'Amber', 'Kristiana', 'Madeline', 'Jacob', 'Michael E', 'Natalia', 'Chloe', 'Raya', 'Annelyse', 'Erin', 'Nick', 'Max', 'Eric', 'Ashley', 'Michael S', 'Brenden', 'Isabella', 'Aleah'];
const studentPrompts = {
    1: "Alright [name], what's your hot take on this essay?",
    2: "Spill the tea, [name]! What are your thoughts?",
    3: "[name], dazzle us with your wisdom. What do you think?",
    4: "Time to shine, [name]! Your thoughts, please.",
    5: "Hey [name], let your genius flow. What's your opinion?",
    6: "What say you, [name]? Enlighten us!",
    7: "Ok [name], be our essay guru for a moment!",
    8: "[name], you're up! Got any epic insights?",
    9: "Hey [name], time to drop some knowledge bombs. Thoughts?",
    10: "[name], you're the star now. What's your perspective?",
    11: "Alright, [name], hit us with your wisdom!",
    12: "Yo [name], what's cookin'? What do you think of the essay?",
    13: "[name], ready to dissect this literary masterpiece?",
    14: "Hey [name], ready to be the class critic?",
    15: "What's the word, [name]? Share your thoughts!",
    16: "[name], you're on the hot seat! Impress us.",
    17: "Your turn, [name]! Any revelations?",
    18: "[name], share your brilliance. What's your angle?",
    19: "Time to go deep, [name]. What did you find interesting?",
    20: "Ok [name], be our Sherlock. Any discoveries?",
    21: "Elevate our thinking, [name]. What's your view?",
    22: "[name], you've been summoned! What's your verdict?",
    23: "Step up to the mic, [name]! Thoughts?",
    24: "Hey [name], channel your inner critic. What did you think?",
    25: "[name], drop some literary wisdom on us!",
    26: "Time for a mind meld, [name]. Share your thoughts!",
    27: "It's [name] time! What’s your take?",
    28: "[name], step into the intellectual ring. What's your stance?",
    29: "Ok [name], what's your scholarly opinion?",
    30: "[name], raise the bar! What’s your take?"
  };
  

document.getElementById('generate').addEventListener('click', function() {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomPromptKey = Math.floor(Math.random() * 30) + 1;
  const randomPrompt = studentPrompts[randomPromptKey];
  const output = randomPrompt.replace("[name]", randomName);

  document.getElementById('output').innerText = output;
});
