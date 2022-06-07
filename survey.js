const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profile = {};

rl.question('What\'s your name?  ', (answer) => {
  profile.name = answer;
  rl.question('What\'s an activity you like doing?  ', (answer) => {
    profile.activity = answer;
    rl.question('What do you listen to while doing that?  ', (answer) => {
      profile.music = answer;
      rl.question('Which meal is your favourite?  ', (answer) => {
        profile.meal = answer;
        rl.question('What\'s your favourite thing to eat for that meal?  ', (answer) => {
          profile.food = answer;
          rl.question('Which sport is your absolute favourite?  ', (answer) => {
            profile.sport = answer;
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!  ', (answer) => {
              profile.super = answer;
              console.log(`${profile.name} likes to do ${profile.activity} while listing to ${profile.music}. Their favorite meal is ${profile.meal} and for it they like ${profile.food}. ${profile.sport} is something they like and they are reall good at ${profile.super}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
  
});