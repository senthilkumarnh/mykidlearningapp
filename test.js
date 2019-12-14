const vowels = ['a', 'e', 'i', 'o', 'u'];
const consonents = ['b','c','d','f','g','h','j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v','w','x','y', 'z']
const random = (min, max) => Math.random() * (+max - +min) + +min;

const random1 = random(0, 1);
    const vowelsSelector = parseInt(random(0, 4));
    const consonentsSelector = parseInt(random(0, 20))
    const currentVowel = vowels[vowelsSelector];
    const currentConsonent = consonents[consonentsSelector];
    let newString = '';

    if(random1 < 0.5){
      newString = `${currentConsonent}${currentVowel}`;
    }else{
      newString = `${currentVowel}${currentConsonent}`;
    }
console.log(newString);